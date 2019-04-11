import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-testing-library';

import 'jest-dom/extend-expect';


import Controls from './Controls';

describe('<Controls />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Controls />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    // it('the lock toggle button is disabled if the gate is open', () => {
    //     const { getByText } = render(<Controls closed={false} />)

    //     expect(getByText(/lock gate/i)).toBeDisabled();
    // })

    // it('the close toggle button is disabled if the gate is locked', () => {
    //     const { getByText } = render(<Controls locked={true} />)

    //     expect(getByText(/close gate/i)).toBeDisabled();
    // })

    it('button text reflects state if clicked', () => {
        const { getByText } = render(<Controls />)

        const toggleClose = getByText(/close gate/i);
        fireEvent.click(toggleClose);

        expect(getByText(/close gate/i)).toHaveTextContent('Open Gate');

    })


})

// it('should save when clicking Save button', () => {
//     const { getByText } = render(<App />);

//     const saveButton = getByText(/save/i);
//     fireEvent.click(saveButton);

//     getByText(/saving/i);