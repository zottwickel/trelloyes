import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('List component', () => {
    const cards = [
        { id: 'a', title: 'First card', content: 'lorem ipsum' },
        { id: 'b', title: 'Second card', content: 'lorem ipsum' },
        { id: 'c', title: 'Third card', content: 'lorem ipsum' }
    ]
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List cards={cards} header="header"/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('renders the UI as expected', () => {
        const cards = [
            { id: 'a', title: 'First card', content: 'lorem ipsum' },
            { id: 'b', title: 'Second card', content: 'lorem ipsum' },
            { id: 'c', title: 'Third card', content: 'lorem ipsum' }
        ]
        const tree = renderer
            .create(<List cards={cards} header="header"/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});