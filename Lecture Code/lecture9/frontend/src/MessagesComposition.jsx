import React, { Component } from 'react';
import { MessageAdder } from './LiftingStateUp';
import styles from './MessageComposition.module.css';

class TextDisplayOrEdit extends Component {
  state = { editContent: null };

  toEdit = () => this.setState({ editContent: this.props.text });

  toDisplay = () => this.setState({ editContent: null });

  onEdit = (e) => this.setState({ editContent: e.currentTarget.value });

  onSubmit = () => {
    this.props.onChange(this.state.editContent);
    this.toDisplay();
  };

  render() {
    const { editContent } = this.state;
    return editContent === null
      ? <span onClick={this.toEdit}>{this.props.text}</span>
      : (
        <>
          <input value={editContent} onChange={this.onEdit} />
          <button onClick={this.toDisplay}>Discard Changes</button>
          <button onClick={this.onSubmit}>Submit</button>
        </>
      );
  }
}

class Message extends Component {
  state = { newContent: '' };

  render() {
    // content: string, onEdit: (string) => void, onDelete: () => void
    const { content, onEdit, onDelete } = this.props;
    return (
      <div className={styles.Message}>
        <div className={styles.MessageContent}>
          <TextDisplayOrEdit text={content} onChange={onEdit} />
        </div>
        <div className={styles.CardActions}>
          <button onClick={() => onEdit(this.state.newContent)}>EDIT</button>
          <button onClick={onDelete}>DELETE</button>
        </div>
      </div>
    );
  }
}

const MessageList = ({ messages, onOneMsgEdit, onOneMsgDelete }) => (
  <div>
    <h4>Messages</h4>
    <div>
      {messages.map(({ id, content }) => (
        <Message
          key={id}
          content={content}
          onEdit={newMessage => onOneMsgEdit(id, newMessage)}
          onDelete={() => onOneMsgDelete(id)}
        />
      ))}
    </div>
  </div>
);

export default class MessageComposition extends Component {
  state = { messages: [] };

  onAdd = (msg) => this.setState(({ messages }) => ({
    messages: [...messages, { id: messages.length, content: msg }]
  }));

  onOneMsgEdit = (id, newMessage) => this.setState(({ messages }) => ({
    messages: messages.map(msg => (id === msg.id) ? { id, content: newMessage } : msg),
  }));

  onOneMsgDelete = (id) => this.setState(({ messages }) => ({
    messages: messages.filter(msg => id !== msg.id),
  }));

  render() {
    return (
      <div>
        <h3>Message Composition</h3>
        <MessageList
          messages={this.state.messages}
          onOneMsgEdit={this.onOneMsgEdit}
          onOneMsgDelete={this.onOneMsgDelete}
        />
        <MessageAdder onAdd={this.onAdd} />
      </div>
    );
  }
}
