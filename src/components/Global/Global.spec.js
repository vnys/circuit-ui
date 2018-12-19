import React from 'react';

import Global from './Global';

import { createGlobalStyles } from './GlobalService';

jest.mock('./GlobalService', () => ({
  createGlobalStyles: jest.fn()
}));

const renderComponent = (props = {}) => shallow(<Global {...props} />);

describe('Global', () => {
  it('should create the global stylesheet', () => {
    renderComponent();
    expect(createGlobalStyles).toHaveBeenCalled();
  });
});