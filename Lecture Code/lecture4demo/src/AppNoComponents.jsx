import React, {Component} from 'react';
import ContactCard from './ContactCard.jsx';
import styles from './App.module.css';
import ConditionalComponent from './ConditionalComponent';
import './App.module.css';

class AppNoComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {inputVal: "dummy"};
    this.changeVal =this.changeVal.bind(this);
  }

  changeVal(e){
    this.setState({inputVal: Date.now()});
  }

    render() {
    // return (
    // <ContactCard name={"Justin Tran"} email={"jtt65@cornell.edu"}></ContactCard>
    // );
    return (
      <div className={styles.AppNoComp}>
        <div className={ styles.ContactCard } style={{marginTop: '0'}}>
          <h2>
            Justin Tran
          </h2>
          <p>
            jtt65@cornell.edu
          </p>
        </div>
        <div className={ styles.ContactCard }>
          <h2>
            Aram Baghdassarian
          </h2>
          <p>
            acb352@cornell.edu
          </p>
        </div>
        <div>
          <input
            type="text"
            placeholder="name"
            value={this.state.inputVal}
            className={styles.InputBox}
            style={{width: "20%"}}
          />
          <button onClick={this.changeVal} >Change Value!</button>
        </div>
        <div>
          <h3>Conditional Rendering</h3>
          <ConditionalComponent />
        </div>
      </div>
    );
  }
}

export default AppNoComponents;
