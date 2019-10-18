import React from 'react';
import List from './List';
import STORE from './store';
import './App.css';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends React.Component {

  static defaultProps = {
    store : {
      lists: [],
      allCards: {}
    }
  };

  state = {
    store: STORE
  }

  handleDeleteItem = (cardId) => {
    const { lists, allCards } = this.state.store;
    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));
    const newCards = omit(allCards, cardId);
    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    })
  };

  handleAddRandom = (listId) => {
    const newCard = newRandomCard()
    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })
    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
  };
  
  render () {
    const { store } = this.state
    const lists = store.lists.map((list) => {
      const listCards = list.cardIds.map(id => {
        return store.allCards[id]
      });
        return (
          <List 
            key={list.id} 
            id={list.id}
            header={list.header} 
            cards={listCards} 
            onClickDelete={this.handleDeleteItem} 
            onClickAdd={this.handleAddRandom}
          />
        )
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
