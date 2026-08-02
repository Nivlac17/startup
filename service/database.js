const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');

const userCollection = db.collection('user');
const artPortfolio = db.collection('portfolio');
const chatCollection = db.collection('chat');



(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addArt({ userName, title, artCsv }) {
  await artPortfolio.updateOne(
    { userName, title },
    {
      $set: {
        artCsv,
        updated: new Date(),
      },
      $setOnInsert: {
        created: new Date(),
      },
    },
    { upsert: true }
  );

  return artPortfolio.findOne({ userName, title });
}


async function getArtByUser(userName) {
  return artPortfolio.find({ userName }).toArray();
}

async function getArtByUserAndTitle(userName, title) {
  return artPortfolio.findOne({ userName, title });
}

async function getAllArt() {
  return artPortfolio.find({}).toArray();
}



async function addChatMessage({
  artId,
  userName,
  message,
  sentAt,
}) {
  const chatMessage = {
    artId,
    userName,
    message,
    sentAt,
  };

  const result = await chatCollection.insertOne(chatMessage);

  return {
    ...chatMessage,
    _id: result.insertedId,
  };
}

function getChatMessages(artId) {
  return chatCollection
    .find({ artId })
    .sort({ sentAt: 1 })
    .limit(100)
    .toArray();
}




module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addArt,
  getArtByUser,
  getArtByUserAndTitle,
  getAllArt,
  addChatMessage,
  getChatMessages,
};



