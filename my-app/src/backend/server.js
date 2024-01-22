// API to post the data on the client side 

const express = require('express');
const app = express();
const fb = require('./db');
const port = 5000;
const cors= require('cors');

app.use(cors())


app.get('/users', async (req, res) => {
  try {
    const usersSnapshot = await db.ref('/users').once('value');
    const users = usersSnapshot.val();

    if (!users) {
      return res.status(404).json({ error: 'No data found' });
    }

    res.json(users);
  } 
  catch (error) {
    console.error("Error in fetching data", error);
    res.status(500).json({ error: "Internal server issue" });
  }
});

// to render the data on the client side

app.get('/maps/markers', async (req, res) => {
    try {
      fb.toFetchDataFromDb((data) => {
        res.json(data);
      });
    } 
    catch (error) {
      console.error("Error in fetching data", error);
      res.status(500).json({ error: "Internal server issue" });
    }
  });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
