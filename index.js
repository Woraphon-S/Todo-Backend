const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db")

// middleware
app.use(cors());
app.use(express.json());

// ROUTES

        // create a todo

app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

        // Read todos

app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
})

        // Get a todo

app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query(
            "SELECT * FROM todo WHERE todo_id = $1",
            [id]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

        // Update a todo

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description, completed } = req.body;

    await pool.query(
      "UPDATE todo SET description = $1, completed = $2 WHERE todo_id = $3",
      [description, completed, id]
    );

    res.json({ message: "Todo was updated!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

        // Delete a todo

app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1",
            [id]);

        res.json("Todo was deleted!");
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log("Server is running on port 5000")
});