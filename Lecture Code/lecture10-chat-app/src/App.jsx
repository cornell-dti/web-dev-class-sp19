import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import OneChatLog from './OneChatLog';
import ChatLogAdder from './ChatLogAdder';

const db = () => firebase.firestore();
const collection = () => db().collection('chats');

export default class App extends Component {
  state = { chatLogs: [] };

  componentDidMount() {
    collection().onSnapshot((snapshot) => {
      const chatLogs = snapshot.docs.map((doc) => {
        const id = doc.id;
        const data = doc.data();
        const { username, content, time: timestamp } = data;
        const time = (timestamp instanceof Date ? timestamp : timestamp.toDate()).toISOString();
        const obj = { id, username, time, content };
        console.log(obj);
        return obj;
      });
      this.setState({ chatLogs });
    });
  }

  onSubmit = (username, content) => {
    collection().add({ username, content, time: new Date() });
  };

  render() {
    const { chatLogs } = this.state;
    return (
      <div>
        <div className="container">
          {chatLogs.map(chatLog => (
            <OneChatLog key={chatLog.id} {...chatLog} />
          ))}
        </div>
        <ChatLogAdder onSubmit={this.onSubmit} />
      </div>
    );
  }
}
