# ToDo List App (Node.js + Express + EJS)

A simple CRUD-based ToDo List web app built with **Node.js**, **Express**, **EJS**, and **Method Override**.

## Features

- Add new task
- View all tasks
- Edit existing task
- Delete task
- Empty input validation (frontend + backend)
- Checkbox click par task text line-through effect

## Tech Stack

- Node.js
- Express.js
- EJS (templating)
- Method-Override
- UUID
- HTML, CSS, JavaScript

## Project Structure

Backend4-REST/
└── ToDoList/
    ├── index.js
    ├── package.json
    ├── public/
    │   ├── style.css
    │   ├── style2.css
    │   └── app.js
    └── views/
        ├── index.ejs
        └── edit.ejs

## Installation & Run
1. Clone repository
2. Go to project folder:
    cd Backend4-REST/ToDoList
3. Install dependencies:
    npm install
4. Start server:
    node index.js
5. Open in browser:
    http://localhost:8080/todo

 ## Routes
 - GET /todo → show all tasks
 - POST /todo → create new task
 - GET /todo/:id/edit → edit page
 - PATCH /todo/:id → update task
 - DELETE /todo/:id → delete task

## Notes
 - Tasks are currently stored in-memory array (no database yet).
 - Server restart karne par data reset ho jata hai.

## Future Improvements
 - MongoDB / SQL database integration
 - Completed task state persist karna
 - Due dates and priorities
 - Authentication (login/signup)

# Author
Pari
