import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import * as serviceWorker from './serviceWorker';

const config = {
  apiKey: "AIzaSyDWEJbHzcWjwSnY6xp1AFQZyzaPXEg6Owg",
  authDomain: "dti-web-dev-sp19-db-demo.firebaseapp.com",
  databaseURL: "https://dti-web-dev-sp19-db-demo.firebaseio.com",
  projectId: "dti-web-dev-sp19-db-demo",
  storageBucket: "dti-web-dev-sp19-db-demo.appspot.com",
  messagingSenderId: "1079571664599"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
