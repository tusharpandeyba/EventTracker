# Dynamic Event Calendar Application

## Overview
This project implements a **Dynamic Event Calendar Application** using **React.js**. It allows users to manage events on a calendar, including adding, editing, deleting, and filtering events. The calendar handles month transitions and persists event data across page reloads using `localStorage`.

## Features
- **Calendar View**: Displays a calendar grid for the current month with buttons to navigate between months.
- **Event Management**: Add, edit, or delete events for any selected day.
  - Event details include name, start and end times, and an optional description.
- **Event List**: View all events for a selected day in a modal or side panel.
- **Data Persistence**: Stores event data in `localStorage` for persistence across sessions.
- **Complex Logic**:
  - Handles month transitions (e.g., from January 31 to February 1).
  - Prevents overlapping events for the same day.
  - Filters events by keyword.
- **UI Design**: A clean and modern UI designed with **Shadcn** components.
  - Highlights the current and selected days.
  - Clear separation of weekdays and weekends.

### Optional Features (Bonus)
- Drag-and-drop functionality to reschedule events.
- Color coding for events (work, personal, etc.).
- Export event list to **JSON** or **CSV**.

## Installation

### Prerequisites
- **Node.js** (v14 or higher)


---

## Technologies Used

- **React.js**: For building the user interface using functional components and hooks.
- **Shadcn**: A UI component library for creating modern and responsive UI components.
- **localStorage**: For persisting event data between page reloads, ensuring that events are saved across sessions.
- **npm**: For managing dependencies and running the development server.
- **node-sass**: For SCSS-based styling (optional depending on the project setup).
- **Date-fns/Day.js**: For date manipulation and handling calendar logic (optional based on your approach).

---

## Instructions to Run Locally

To run this project locally, follow the steps below:

### Prerequisites:
- **Node.js** (v14 or higher)

### Steps:
1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/dynamic-event-calendar.git
