import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
    const cards = props.cards.map( (card) => {
        return (
            <Card 
                key={card.id} 
                id={card.id}
                title={card.title} 
                content={card.content} 
                onClickDelete={props.onClickDelete}
            />
        )
    });
    return (
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {cards}
                <button 
                    type='button' 
                    className='List-add-button' 
                    onClick={() => props.onClickAdd(props.id)}>
                    + Add Random Card
                </button>
            </div>
        </section>
    )
}

List.defaultProps = {
    onClickAdd: () => {}
}

export default List;