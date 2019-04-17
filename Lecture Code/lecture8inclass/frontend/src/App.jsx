import React, { Component } from 'react';
import './App.css';
import Post from './Post';
import PostAdder from './PostAdder';

export default class App extends Component {
  state = { posts: null, postsToday: null, postsSorted: null };

  componentDidMount() {
    fetch('/post')
      .then(resp => resp.json())
      .then(posts => this.setState({ posts }));
    fetch('/post/today')
      .then(resp => resp.json())
      .then(postsToday => this.setState({ postsToday }));
    fetch('/post/sorted')
      .then(resp => resp.json())
      .then(postsSorted => this.setState({ postsSorted }));
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
    const { posts, postsToday, postsSorted } = this.state;
    console.log({ postsSorted });
    return (
      <div>
        {posts != null ? (
          <div className="Block">
            <h3>All Posts (not sorted)</h3>
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
        ) : (
          <div>Loading all posts (not sorted)...</div>
        )}
        {postsToday != null ? (
          <div className="Block">
            <h3>Today Posts (not sorted)</h3>
            <div>
              {postsToday.length === 0 && <div>No posts added today.</div>}
              {postsToday.length > 0 &&
                postsToday.map(({ id, author, date, content }) => (
                  <Post
                    key={id}
                    id={id}
                    author={author}
                    date={date}
                    content={content}
                    editPost={() => {}}
                    deletePost={() => {}}
                  />
                ))}
            </div>
          </div>
        ) : (
          <div>Loading today posts (not sorted)...</div>
        )}
        {postsSorted != null ? (
          <div className="Block">
            <h3>All Posts (sorted)</h3>
            <div>
              {postsSorted.length === 0 && <div>No sorted posts.</div>}
              {postsSorted.length > 0 &&
                postsSorted.map(({ id, author, date, content }) => (
                  <Post
                    key={id}
                    id={id}
                    author={author}
                    date={date}
                    content={content}
                    editPost={() => {}}
                    deletePost={() => {}}
                  />
                ))}
            </div>
          </div>
        ) : (
          <div>Loading sorted posts...</div>
        )}
        <div className="Block">
          <h3>Post Adder</h3>
          <PostAdder addPost={this.addPost} />
        </div>
      </div>
    );
  }
}
