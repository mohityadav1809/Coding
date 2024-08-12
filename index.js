const bodyParser = require("body-parser");
const express = require("express");
const mysql = require("mysql");
const swaggerSetup = require("./swagger");
const userRoutes = require("./routes/users");
const { promisify } = require("util"); // Import promisify from util
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use("/users", userRoutes);

// Adding swagger file
swaggerSetup(app);

// Create a database connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "users",
});
// Promisify the pool.query method
const query = promisify(pool.query).bind(pool);

// Function to insert tasks into the database
async function insertTasksDb(taskObj) {
  try {
    const results = await query("INSERT INTO tasks SET ?", taskObj);
    console.log("Data inserted successfully", results);
    return true;
  } catch (error) {
    console.error("Error inserting data: ", error);
    return false;
  }
}

// Function to delete tasks from the database
async function deleteTasksDb(taskName) {
  try {
    const results = await query("DELETE FROM tasks WHERE name = ?", taskName);
    if (results.affectedRows === 0) {
      return { statusCode: 404, message: "Task not found" };
    }
    return { statusCode: 200, message: "Successfully deleted task" };
  } catch (error) {
    console.error("Error deleting data: ", error);
    return { statusCode: 500, message: `Error deleting data: ${error}` };
  }
}

// Function to update the status of a task in the database
async function updateTaskStatusDb(taskName, newStatus) {
  try {
    const results = await query("UPDATE tasks SET status = ? WHERE name = ?", [
      newStatus,
      taskName,
    ]);
    if (results.affectedRows === 0) {
      return { statusCode: 404, message: "Task not found" };
    }
    return { statusCode: 200, message: "Successfully updated task status" };
  } catch (error) {
    console.error("Error updating data: ", error);
    return { statusCode: 500, message: `Error updating data: ${error}` };
  }
}

// Route to add tasks
app.post("/addTasks", async (req, res) => {
  const task = req.body;
  const result = await insertTasksDb(task);
  if (result) {
    res.status(200).send(task);
  } else {
    res.status(500).send({ message: "Error inserting task" });
  }
});

// Route to delete tasks
app.post("/deleteTasks", async (req, res) => {
  const task = req.body;
  const response = await deleteTasksDb(task.name);
  res.status(response.statusCode).send(response.message);
});

app.get("/home", (req, res) => {
  res.send("Welcome to your Todo App!");
});

// Route to update task status
app.put("/updateTaskStatus", async (req, res) => {
  const { name, status } = req.body;
  const response = await updateTaskStatusDb(name, status);
  res.status(response.statusCode).send(response.message);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Perform database operation on starting of application
query("SELECT * FROM tasks")
  .then((results) => {
    console.log("Data fetched successfully: ", results);
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });

// Handle connection errors
pool.on("error", (err) => {
  console.error("Database pool error: ", err);
});
