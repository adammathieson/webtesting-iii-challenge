import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-test-renderer';

import Display from './Display';

describe('<Display />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Display />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('displays Closed if closed prop is true', () => {
        const { getByText } = render(<Display />);

        getByText(/open/i);
    })

})