import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { CardHeader } from '@material-ui/core';

export default class ChatLogAdder extends Component {
  state = { username: '', content: '' };

  onUsernameChange = (e) => this.setState({ username: e.currentTarget.value });

  onContentChange = (e) => this.setState({ content: e.currentTarget.value });

  onSubmit = () => {
    const { username, content } = this.state;
    if (username.trim() !== '' && content.trim() !== '') {
      this.props.onSubmit(username, content);
    }
    this.setState({ content: '' });
  }

  render() {
    const { username, content } = this.state;
    return (
      <Card className="card">
        <CardHeader title="Adder" />
        <CardContent>
          <label>
            Username
            <input type="text" value={username} onChange={this.onUsernameChange} />
          </label>
          <br />
          <label>
            Content
            <input type="text" value={content} onChange={this.onContentChange} />
          </label>
        </CardContent>
        <CardActions>
          <Button onClick={this.onSubmit}>Submit</Button>
        </CardActions>
      </Card>
    )
  }

}
