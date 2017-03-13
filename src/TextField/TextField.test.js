/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import TextField from './TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '@ox2/theme-mui';

const muiTheme = getMuiTheme(theme);

// Material UI
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


it('renders correctly', () => {
  const wrapper = mount(
    <MuiThemeProvider muiTheme={muiTheme}>
      <TextField
        floatingLabelText={'My label'}
        id={'myId'}
        value={'Some value'}
      />
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly with error', () => {
  const wrapper = mount(
    <MuiThemeProvider muiTheme={muiTheme}>
      <TextField
        errorText={'Invalid value'}
        floatingLabelText={'Some value'}
        id={'myId'}
        label={'My label'}
      />
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});
