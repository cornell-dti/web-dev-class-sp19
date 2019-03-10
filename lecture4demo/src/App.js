import React, { Component } from 'react';
import ContactCard from './ContactCard.jsx';
import './App.css';

class App extends Component {
  render() {
    // return (
    // <ContactCard name={"Justin Tran"} email={"jtt65@cornell.edu"}></ContactCard>
    // );
    return (
      <div>
        <div className="contactCardStyle">
          <h2>
            Justin Tran
          </h2>
          <p>
            jtt65@cornell.edu
          </p>
        </div>
        <div className="contactCardStyle">
          <h2>
            Aram Baghdassarian
          </h2>
          <p>
            acb352@cornell.edu
          </p>
        </div>
      </div>
    );
  }
}

export default App;
