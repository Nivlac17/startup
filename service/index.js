const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const authCookieName = 'token'; 
const DB = require('./database.js');



// The scores and users are saved in memory and disappear whenever the service is restarted.
// let users = [];

const port = process.argv.length > 2 ? process.argv[2] : 4000;
// JSON body parsing using built-in middleware
app.use(express.json());
// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());
// Serve up the front-end static content hosting
app.use(express.static('public'));
// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);



// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('email', req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('email', req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      await DB.updateUser(user);
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth cookie
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
    await DB.updateUser(user);
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};



// Navigation apis
apiRouter.get('/navigation', verifyAuth, async (req, res) => {
  res.send([
    { name: 'Draw', path: '/draw' },
    { name: 'Watch', path: '/watch' },
  ]);
});



// Saving Art to Database
apiRouter.post('/portfolio', verifyAuth, async (req, res) => {
  try {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (!user) {
      return res.status(401).send({ msg: 'Unauthorized' });
    }
    const { title, artCsv } = req.body;
    if (!title || !artCsv) {
      return res.status(400).send({ msg: 'title and artCsv are required' });
    }
    await DB.addArt({userName: user.email,title,artCsv,});
    res.status(201).send({ msg: 'Art saved successfully' });
  } catch (err) {
    console.error('Error saving art:', err);
    res.status(500).send({ msg: 'Server error' });
  }
});


// Get all art from database for Navigation page
apiRouter.get('/portfolio/all', verifyAuth, async (req, res) => {
  try {
    const art = await DB.getAllArt();
    res.send(art);
  } catch (err) {
    console.error('Error fetching all art:', err);
    res.status(500).send({ msg: 'Server error' });
  }
});




// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});


// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});


async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await DB.addUser(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  if (field === 'token') {
    return DB.getUserByToken(value);
  }
  return DB.getUser(value);
}


// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

