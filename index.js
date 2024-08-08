const express = require("express");
const axios = require("axios");
const fs = require("fs").promises;
// const cors = require("cors");

const app = express();
const PORT = 3000;
// sdlndsjj

// Middleware to parse JSON
app.use(express.json());
// app.use(cors());

// Route to fetch data from an external API using async/await
app.get("/api/external-data", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
});

// Route to demonstrate asynchronous file reading
app.get("/api/read-file", async (req, res) => {
  try {
    const data = await fs.readFile("text.txt", "utf8");
    res.send(data);
  } catch (error) {
    console.error("Error reading file:", error);
    res.status(500).send("Error reading file");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
