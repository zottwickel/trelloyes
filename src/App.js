import React from 'react';
import List from './List';
import './App.css';

class App extends React.Component {
  static defaultProps = {
    store : {
      lists: [],
      allCards: {}
    }
  };
  render () {
    const { store } = this.props
    const lists = store.lists.map((list, i) => {
      const listCards = list.cardIds.map(id => {
        return store.allCards[id]
      });
        return (<List key={i} header={list.header} cards={listCards} />)
    });
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {lists}
        </div>
      </main>
    );
  }
}

export default App;
