const express = require("express");
const path = require("path");
const db = require("./postgres");
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const saltRounds = 10;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/images', express.static(path.join(__dirname, 'images')));


// Session middleware setup
app.use(session({
    secret: 'your_secret_key', // Replace with a real secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// Authentication Middleware
function checkAuthentication(req, res, next){
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login.html');
    }
}

// Registration route
app.post('/register', async (req, res) => {
  const { identikey, firstName, lastName, nickName, email, phone, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const insertQuery = `
      INSERT INTO members (identikey, firstName, lastName, nickName, email, phone, password)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;
    await db.none(insertQuery, [identikey, firstName, lastName, nickName, email, phone, hashedPassword]);
    res.redirect('/login.html');
  } catch (error) {
    console.error('Error in registration:', error);
    res.status(500).send("Error in registration.");
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { identikey, password } = req.body;
  try {
    const user = await db.oneOrNone('SELECT * FROM members WHERE identikey = $1', [identikey]);
    if (user && await bcrypt.compare(password, user.password)) {
      req.session.user = { identikey: user.identikey, firstName: user.firstName };
      res.redirect('/profile.html');
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send("Error logging in");
  }
});

// Logout route
app.post('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login.html');
});

// Serve static files
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Profile page, requires authentication
app.get('/profile.html', checkAuthentication, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'profile.html'));
});

// Calendar page, requires authentication
app.get('/calendar.html', checkAuthentication, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'calendar.html'));
});
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
