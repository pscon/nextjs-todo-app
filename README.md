# TaskFlow - Modern Todo Application

A streamlined, responsive todo application built with Next.js, TypeScript, and React Query that allows users to manage tasks effectively with filtering and persistence capabilities.

## Features

### Core Functionality

- Create, read, update, and delete tasks
- Filter tasks by:
  - All
  - Active
  - Completed
- Data persistence using localStorage
- CRUD operations with React Query custom hooks

### Bonus Features

- ShadCN UI components for enhanced UI elements
- Click-to-edit task functionality
- Task summary display (e.g., "3 active, 1 completed")
- Responsive design for all devices
- Smooth Notification for CRUD operations
- TypeScript for type safety

## Technologies Used

- Next.js
- TypeScript
- React Query for state management
- Tailwind CSS for styling
- ShadCN UI component library
- localStorage for data persistence

## Project Setup

### Clone the repository

```bash
git clone https://github.com/pscon/nextjs-todo-app
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Run tests

```bash
npm run test
```

## Project Structure

- `app/` - Next.js app directory with file-based routing
- `components/` - Reusable UI components
- `hooks/` - Custom React Query hooks for data operations
- `types/` - TypeScript type definitions
- `lib/utils` - Helper functions and utilities
- `public/` - Static assets

## Implementation Details

- Task management with full CRUD functionality
- React Query for efficient state management
- Custom hooks for encapsulated data operations:
  - `useTodos()` - Fetches all tasks
  - `useAddTodo()` - Adds a new task
  - `useUpdateTodo()` - Updates existing task
  - `useDeleteTodo()` - Removes a task
- Tailwind CSS for responsive styling
- ShadCN UI for accessible, customizable components

## Deployment

The application has been successfully deployed on Vercel.

```bash
npm run build
```

## Deployed URL

[pscon-todoify](https://nextjs-todo-app-zeeo.vercel.app/)

## Author

Ekunola Paul
