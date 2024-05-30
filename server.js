const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;

// MySQL connection
const connection = mysql.createConnection({
  host: 'sql12.freesqldatabase.com', // Usually 'localhost'
  user: 'sql12710619',
  password: 'nGTDI9i4Gy',
  database: 'sql12710619',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId);
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  
  // Insert user data into MySQL database
  const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
  connection.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error('Error inserting user data into MySQL database: ' + err);
      res.send('Error signing up.');
    } else {
      console.log('User signed up successfully.');
      res.send('User signed up successfully.');
    }
  });
});

app.post('/signin', (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists in the database
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  connection.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error('Error querying user data from MySQL database: ' + err);
      res.send('Error signing in.');
    } else {
      if (results.length > 0) {
        res.send('Sign in successful.');
      } else {
        res.send('Invalid email or password.');
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
