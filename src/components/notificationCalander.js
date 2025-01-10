import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useCommunication } from "../context/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./notificationCalander.css";

const localizer = momentLocalizer(moment);

function CalendarView() {
  const { state } = useCommunication();
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Transform communications into calendar events
  const events = state.communications.map((comm) => {
    const company = state.companies.find((c) => c.id === comm.companyId);
    return {
      title: `${company ? company.name : "Unknown Company"}`,
      start: new Date(comm.timestamp),
      end: new Date(comm.timestamp),
      allDay: true,
      resource: comm,
    };
  });

  const handleSelectEvent = (event) => {
    setSelectedEvent(event.resource);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="calendar-view">
      <h1>Events Calendar</h1>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={handleSelectEvent}
      />

      {selectedEvent && (
        <div className="event-details-modal">
          <div className="event-details-content">
            <h2>Event Details</h2>
            {/* <p>
              <strong>Type:</strong> {selectedEvent.type}
            </p> */}
            <p>
              <strong>Date:</strong>{" "}
              {moment(selectedEvent.timestamp).format("MMMM Do, YYYY")}
            </p>
            <p>
              <strong>Notes:</strong>{" "}
              {selectedEvent.notes || "No additional notes"}
            </p>
            <button onClick={closeEventDetails}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarView;
