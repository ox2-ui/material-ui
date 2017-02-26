/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import TextField from './TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders correctly', () => {
  const wrapper = mount(
    <MuiThemeProvider>
      <TextField
        id={'myId'}
        value={'Some value'}
        label={'My label'}
      />
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly with error', () => {
  const wrapper = mount(
    <MuiThemeProvider>
      <TextField
        id={'myId'}
        label={'My label'}
        value={'Some value'}
        errorText={'Invalid value'}
      />
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});
