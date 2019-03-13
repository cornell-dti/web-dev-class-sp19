import React, { Component } from 'react';
import ContactCard from './ContactCard';

class Editor extends Component {

  onNameChange = (e) => {
    const { onNameChange } = this.props;
    onNameChange(e.currentTarget.value);
  };

  onEmailChange = (e) => {
    const { onEmailChange } = this.props;
    onEmailChange(e.currentTarget.value);
  };

  render() {
    const { name, email } = this.props;
    return (
      <div>
        <div>
          <input type="text" placeholder="name" value={name} onChange={this.onNameChange} />
        </div>
        <div>
          <input type="text" placeholder="email" value={email} onChange={this.onEmailChange} />
        </div>
      </div>
    );
  }
}

class EditorWithPreview extends Component {
  state = { name: '', email: '' };

  onNameChange = name => this.setState({ name });

  onEmailChange = email => this.setState({ email });

  submit = () => {
    const { onSubmit } = this.props;
    const { name, email } = this.state;
    onSubmit(name, email);
  }

  render() {
    const { name, email } = this.state;
    return (
      <div>
        <div>
          <h4>New Contact Adder</h4>
          <Editor
            name={name}
            email={email}
            onNameChange={this.onNameChange}
            onEmailChange={this.onEmailChange}
          />
        </div>
        <div>
          <h4>Preview</h4>
          <ContactCard name={name} email={email} />
        </div>
        <div>
          <button onClick={this.submit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default class ContactCardAdder extends Component {
  state = { data: [] };

  onSubmit = (name, email) => this.setState(({ data }) => ({ data: [...data, { name, email }] }));

  render() {
    const { data } = this.state;
    return (
      <div>
        <EditorWithPreview onSubmit={this.onSubmit} />
        <div>
          {data.map(contact => <ContactCard key={contact.email} {...contact} />)}
        </div>
      </div>
    )
  }
}
