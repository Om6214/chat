# Chat Website

A real-time comment system built with Node.js and MySQL.

---

## Getting Started

This is a real-time chat application where users can post and view comments in real-time.

---

## Prerequisites

Before you begin, ensure that you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

---

## Installation

Follow the steps below to install and set up the project.

1. Clone the repository:

    ```bash
    git clone https://github.com/Om6214/chat.git
    ```

2. Navigate to the `Backend` folder:

    ```bash
    cd chat/Backend
    ```

3. Create a `.env` file inside the `Backend` folder with the following content:

    ```env
    host=localhost
    user=root
    password=password
    database=real_time_comments
    ```

4. Run the SQL queries to set up the database:

    ```sql
    CREATE DATABASE real_time_comments;

    USE real_time_comments;

    CREATE TABLE comments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255),
      comment TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    ```

5. Install required NPM packages for the backend:

    ```bash
    npm install
    ```

6. Start the backend server:

    ```bash
    npm start
    ```

7. Navigate to the root folder and then to the `real-time-comments` folder:

    ```bash
    cd ..
    cd real-time-comments
    ```

8. Install required NPM packages for the frontend:

    ```bash
    npm install
    ```

9. Start the frontend server:

    ```bash
    npm run dev
    ```

10. Navigate to `http://localhost:<port>` in your browser. Replace `<port>` with the actual port number (usually `3000` for the frontend).

---

## Usage

Once both the backend and frontend servers are running, you can access the application by visiting `http://localhost:<frontend_port>`.

- Users will be able to post and view comments in real-time.
- All comments are stored in the MySQL database.

---

