import React from 'react';
import Header from './Header';
import render from '@testing-library/react'
import MockedNavigator from './MockedNavigator';

it('should render correctly', () => {
    const {toJSON} = render(
      <MockedNavigator component={Header} />
    );
    expect(toJSON()).toMatchSnapshot();
});