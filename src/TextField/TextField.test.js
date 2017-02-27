/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import TextField from './TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Material UI
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


it('renders correctly', () => {
  const wrapper = mount(
    <MuiThemeProvider>
      <TextField
        id={'myId'}
        value={'Some value'}
        floatingLabelText={'My label'}
      />
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders with custom focus color ', () => {
  const wrapper = mount(
    <MuiThemeProvider>
      <TextField
        id={'myId'}
        value={'Some value'}
        floatingLabelText={'My label'}
        focusColor={'hsla(0, 0%, 30%, 1)'}
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
        floatingLabelText={'Some value'}
        errorText={'Invalid value'}
      />
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});
