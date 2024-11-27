const db = require('../config/db');

class Comment {
  static async getAll() {
    const [rows] = await db.execute('SELECT * FROM comments ORDER BY timestamp DESC');
    return rows;
  }

  static async add(username, comment) {
    const [result] = await db.execute(
      'INSERT INTO comments (username, comment) VALUES (?, ?)',
      [username, comment]
    );
    return { id: result.insertId, username, comment, timestamp: new Date() };
  }
}

module.exports = Comment;
