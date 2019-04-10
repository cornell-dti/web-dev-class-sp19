import React, { Component } from 'react';
import './App.css';
import Post from './Post';
import PostAdder from './PostAdder';

export default class App extends Component {
  state = { posts: null };

  componentDidMount() {
    fetch('/post')
      .then(resp => resp.json())
      .then(posts => this.setState({ posts }));
  }

  addPost = async ({ date, author, content }) => {
    const resp = await fetch(`/post`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ author, date, content })
    });
    const id = await resp.text();
    const post = { id, author, date, content };
    this.setState(prevState => ({ posts: [post, ...prevState.posts] }));
  };

  editPost = async (id, content) => {
    const newContent = prompt('Change the content of the post', content);
    const resp = await fetch(`/post/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: newContent })
    });
    const text = await resp.text();
    if (text !== 'UPDATED') {
      throw new Error(`Bad response: ${text}`);
    }
    this.setState(prevState => ({
      posts: prevState.posts.map(p => (p.id === id ? { ...p, content: newContent } : p))
    }));
  };

  deletePost = async id => {
    const resp = await fetch(`/post/${id}`, { method: 'DELETE' });
    const text = await resp.text();
    if (text !== 'DELETED') {
      throw new Error(`Bad response: ${text}`);
    }
    this.setState(prevState => ({ posts: prevState.posts.filter(p => p.id !== id) }));
  };

  render() {
    const { posts } = this.state;
    if (posts == null) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div className="Block">
          <h3>Posts</h3>
          <div>
            {posts.length === 0 && <div>No posts available.</div>}
            {posts.length > 0 &&
              posts.map(({ id, author, date, content }) => (
                <Post
                  key={id}
                  id={id}
                  author={author}
                  date={date}
                  content={content}
                  editPost={this.editPost}
                  deletePost={this.deletePost}
                />
              ))}
          </div>
        </div>
        <div className="Block">
          <h3>Post Adder</h3>
          <PostAdder addPost={this.addPost} />
        </div>
      </div>
    );
  }
}
