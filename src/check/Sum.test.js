import React from 'react';
import Sum from './Sum';
import { create } from 'react-test-renderer'

describe('My first snapshot test',()=>{
    test('testing app button', () => {
    let tree = create(<Sum/>)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})