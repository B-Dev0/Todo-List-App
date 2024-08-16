# To-Do List Application

This To-Do List application is a simple and effective solution for managing your daily tasks. It allows you to add, delete, and filter tasks, as well as save them to your browser's local storage. The application also supports toggling between light and dark themes.

## Features

- **Add Tasks**: Add a new task by filling out the form and submitting the task title.
- **Delete Tasks**: Remove a task by clicking on the trash icon next to it.
- **Filter Tasks**: Filter tasks to show all tasks, only completed tasks, or only incomplete tasks.
- **Local Storage**: Tasks are automatically saved to local storage, so they persist even after the page is reloaded.
- **Light/Dark Theme**: Switch the application theme by clicking on the corresponding icon.

## Code Structure

- **`createTodoElement(id, title, completed)`**: Creates a task element (`li`) with an ID, a title, and a completed or not completed state.
- **`saveToLocalStorage(key, value)`**: Saves data as a key/value pair in local storage.

## Installation

To run this application locally:

1. Clone the repository:
   ```bash
   git clone  https://github.com/B-Dev0/Todo-List-App.git
