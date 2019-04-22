import React, { Component } from 'react';
import styles from './Tabs.module.css';

export default class Tabs extends Component {
  state = { chosenTab: 0 }

  render() {
    const { tabs } = this.props;
    const { chosenTab } = this.state;
    const ChosenTabContentComponent = tabs[chosenTab].component;
    return (
      <div>
        <div className={styles.TabsContainer}>
          {tabs.map(({ name }, index) => (
            <div
              key={name}
              className={index === chosenTab ? `${styles.Tab} ${styles.active}` : styles.Tab}
              onClick={() => this.setState({ chosenTab: index })}
            >
              {name}
            </div>
          ))}
        </div>
        <div className={styles.Content}>
          <ChosenTabContentComponent />
        </div>
      </div>
    );
  }
}

