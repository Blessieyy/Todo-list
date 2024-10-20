# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
Todo Application with Login and Registration
This project is a simple React-based Todo application that integrates login and registration functionality. It allows users to add, manage, and delete todos, as well as log in or register to access the main Todo page.

# Todo List Functionality:

Display Todos: Fetches and displays a list of todos from a local server (using json-server).
Add Todos: Users can add new todos with a priority field.
Toggle Todo Completion: Users can mark todos as completed or incomplete.
Delete Todos: Users can delete todos they no longer need.
Sorting: Todos are sorted by priority automatically after adding new items.

# Authentication:

Login Page: Allows users to log in with an email and password. Once logged in, users are navigated to the Todo list page.
Register Page: Provides users with a form to register a new account by entering their name, email, and password.
Navigation: After successful login or registration, users are redirected to the Todo page.

# UI Styling:

The application uses a modern, minimalist design with an emphasis on clean forms and accessible components.
Styling includes form inputs, buttons, and links, with hover effects and media responsiveness.
The background features a gradient from deep blue to lavender, enhancing the visual appeal.

# Error Handling:

The application catches and logs errors when fetching, adding, or deleting todos.
Error messages are shown in the console for troubleshooting.
Components

# TodoList

Fetches the list of todos from the server.
Renders the list of todos.
Handles adding new todos, toggling completion, and deleting todos.

# TodoItem
Represents a single todo item.
Includes controls for marking as completed or deleting.

# AddTodo

Form to add a new todo with priority.
Login
Simple login form that accepts an email and password.
Navigates to the Todo page upon successful login.
Register
Registration form for new users.
Allows users to enter a name, email, and password to create a new account.
Redirects to the Todo page after registration.
Getting Started
Prerequisites
React: Ensure you have React set up in your environment.
json-server: The todo items are fetched from a local json-server endpoint. You can install json-server using:
