const express = require("express");
const path = require("path");
const db = require("./postgres");
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const saltRounds = 10;
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/images', express.static(path.join(__dirname, 'images')));

db.connect()
  .then(obj => {
      console.log('Connected to the database');
      obj.done(); // success, release the connection;
  })
  .catch(error => {
      console.error('Error connecting to the database:', error);
  });

// Session middleware setup
app.use(session({
    secret: 'SESSION_SECRET', // Replace with a real secret key
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
  const { firstName, lastName, identikey, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const insertQuery = `
      INSERT INTO members (firstName, lastName, identikey, password)
      VALUES ($1, $2, $3, $4)
    `;
    await db.none(insertQuery, [firstName, lastName, identikey, hashedPassword]);
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

      // Clear memberdata upon successful login
      await db.none('UPDATE memberdata SET picture = NULL, membertype = \'\' WHERE member_id = $1', [identikey]);

      res.redirect('/points.html');
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
app.post('/updateProfile', checkAuthentication, async (req, res) => {
  const { ffirstname, flastname, fusername, fmajor, fyear, fpassword } = req.body;
  const identikey = req.session.user.identikey;

  try {
    const hashedPassword = await bcrypt.hash(fpassword, saltRounds);
    // Check if user has memberdata entry, create or update accordingly
    const memberdataExists = await db.oneOrNone('SELECT * FROM memberdata WHERE member_id = $1', [identikey]);

    if (memberdataExists) {
      // Update existing memberdata entry
      await db.none(`
        UPDATE memberdata SET
          firstName = $1,
          lastName = $2,
          username = $3,
          major = $4,
          graduationYear = $5
        WHERE member_id = $6
      `, [ffirstname, flastname, fusername, fmajor, fyear, identikey]);
    } else {
      // Create new memberdata entry if it doesn't exist
      await db.none(`
        INSERT INTO memberdata (firstName, lastName, username, major, graduationYear, member_id)
        VALUES ($1, $2, $3, $4, $5, $6)
      `, [ffirstname, flastname, fusername, fmajor, fyear, identikey]);
    }

    // Optionally update the members table if needed, e.g., updating password
    await db.none('UPDATE members SET password = $1 WHERE identikey = $2', [hashedPassword, identikey]);

    res.redirect('/points.html');
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).send("Error updating profile.");
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
