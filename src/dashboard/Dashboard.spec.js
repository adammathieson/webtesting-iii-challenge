import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Dashboard />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    // it('should default to unlocked', () => {
    //      const { queryByLabelText } = render(
    //          <Dashboard />
    //      )
    // })
})