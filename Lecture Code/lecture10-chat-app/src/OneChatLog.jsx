import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default ({ username, time, content }) => (
  <Card className="card">
    <CardContent>Username: {username}</CardContent>
    <CardContent>Time: {time}</CardContent>
    <CardContent>
      <div>Content</div>
      <div>{content}</div>
    </CardContent>
  </Card>
)
