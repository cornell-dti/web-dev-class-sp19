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

app.get('/post/today', async (_, resp) => {
  const today = new Date();
  const todayString = `${today.getFullYear()}-${1 + today.getMonth()}-${today.getDate()}`;
  const todayPostsDoc = await postsCollection.where('date', '==', todayString).get();
  resp.status(200).json(todayPostsDoc.docs.map(doc => ({ id: doc.id, ...doc.data() })));
});

app.get('/post/sorted', async (_, resp) => {
  const sortedPosts = await postsCollection.orderBy('date', 'desc').get();
  resp.status(200).json(sortedPosts.docs.map(doc => ({ id: doc.id, ...doc.data() })));
});

// update a post
app.post('/post/:id', async (req, resp) => {
  const postId = req.params['id'];
  const postChange = req.body;
  await postsCollection.doc(postId).update(postChange);
  resp.status(200).send('UPDATED');
});

// delete a post
app.delete('/post/:id', async (req, resp) => {
  const postId = req.params['id'];
  await postsCollection.doc(postId).delete();
  resp.status(200).send('DELETED');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
