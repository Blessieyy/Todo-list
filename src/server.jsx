
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();
const port = 5173;


const db = new sqlite3.Database('./todos.db'); 


app.use(bodyParser.json());
app.use(cors()); 


db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      text TEXT,
      completed BOOLEAN,
      priority INTEGER
    )
  `);
});


app.get('/todo', (req, res) => {
  db.all("SELECT * FROM todos ORDER BY priority", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});


app.post('/todo', (req, res) => {
  const { text, priority } = req.body;
  db.run(`INSERT INTO todos (text, completed, priority) VALUES (?, ?, ?)`, [text, false, priority], function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID, text, completed: false, priority });
  });
});

// Update a todo
app.put('/todo/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  db.run(`UPDATE todos SET completed = ? WHERE id = ?`, [completed, id], function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.sendStatus(200);
  });
});

// Delete a todo
app.delete('/todo/:id', (req, res) => {
  const { id } = req.params;
  db.run(`DELETE FROM todos WHERE id = ?`, id, function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.sendStatus(200);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
