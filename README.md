# Chat Website

A real-time comment system built with Node.js and MySQL.

---

## Getting Started

real time chat application

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
    cd Backend
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

5. Install required NPM packages:

    ```bash
    npm install
    ```

6. Start the server:

    ```bash
    npm start
    ```

7. Navigate to `http://localhost:<port>` in your browser. Replace `<port>` with the actual port number (usually `3000`).

---

## Usage

Once the server is running, you can access the application by visiting `http://localhost:<port>`.

- Users will be able to post and view comments in real-time.
- All comments are stored in the MySQL database.
