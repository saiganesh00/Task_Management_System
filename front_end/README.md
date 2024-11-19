# Task Management System Frontend

This is the frontend of a task management system, built with **React.js** and **react-router-dom**. The frontend provides a responsive user interface that allows users to create, update, delete, and manage tasks efficiently. It interacts with a backend server built using Django via RESTful API calls.

## Features

- **User Authentication**: Secure login and registration forms.
- **Task Management**: Create, update, delete, and view tasks.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Interactive UI**: A user-friendly interface with modern design using Tailwind CSS.
- **Routing**: Navigation between different pages like Login, Dashboard, and Task Details using **react-router-dom**.

## Technology Stack

- **React.js**: A JavaScript library for building user interfaces.
- **react-router-dom**: For route management within the app.
- **Axios**: To handle HTTP requests to the backend API.
- **Tailwind CSS**: For fast and efficient styling.

## Folder Structure

```plaintext
frontend/
├── public/
│   ├── index.html         # Main HTML file
│   └── ...
├── src/
│   ├── components/        # Reusable React components
│   ├── pages/             # Page components for routing
│   ├── App.js             # Main application file
│   ├── index.js           # Entry point for React
│   ├── api.js             # API service for HTTP requests
│   └── ...
├── package.json           # Project metadata and dependencies
└── tailwind.config.js     # Tailwind CSS configuration
```

## Installation

To set up and run the frontend locally, follow these steps:

1. Clone the repository and navigate to the `frontend` directory:

    ```bash
    git clone <repository-url>
    cd frontend
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open the application in your browser at `http://localhost:3000`.

## Configuration

Ensure that the backend server is running and accessible (default: `http://localhost:8000`). You may need to update API endpoint URLs in the `api.js` file if your backend server is hosted on a different address or port.

## Usage

1. Open the app in your browser at `http://localhost:3000`.
2. Register or log in to your account.
3. Create new tasks, edit existing tasks, or delete tasks as needed.
4. Use the React Router to navigate between pages, such as the Dashboard, Task Details, and Login pages.
5. Enjoy a seamless task management experience with a responsive UI.

## Scripts

Below are some useful scripts for development and production:

- **`npm start`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production.
- **`npm test`**: Launches the test runner.
- **`npm run eject`**: Ejects the app (not reversible).

## Dependencies

- **React**: ^18.0.0
- **react-router-dom**: ^6.0.0
- **Axios**: ^1.0.0
- **Tailwind CSS**: ^3.0.0
