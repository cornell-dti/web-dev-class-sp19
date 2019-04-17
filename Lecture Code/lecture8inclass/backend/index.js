const admin = require('firebase-admin');
const serviceAccount = require('./service-account.json');
const express = require('express');
const bodyParser = require('body-parser');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://dti-web-dev-sp19-db-demo.firebaseio.com'
});

const db = admin.firestore();

const app = express();
const port = 8080;
app.use(bodyParser.json());

app.get('/', (_, resp) => resp.send('Hello World!'));

const postsCollection = db.collection('posts');

// create a post
app.put('/post', async (req, resp) => {
  const post = req.body;
  const addedDoc = await postsCollection.add(post);
  resp.status(200).send(addedDoc.id);
});

// read all posts
app.get('/post', async (_, resp) => {
  const allPostsDoc = await postsCollection.get();
  resp.status(200).json(allPostsDoc.docs.map(doc => ({ id: doc.id, ...doc.data() })));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
