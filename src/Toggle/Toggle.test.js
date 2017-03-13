/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Toggle from './Toggle';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '@ox2/theme-mui';

const muiTheme = getMuiTheme(theme);

it('renders enabled correctly', () => {
  const wrapper = mount(
    <MuiThemeProvider muiTheme={muiTheme}>
      <Toggle label={'My label'} toggled={true} />
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders disabled correctly', () => {
  const wrapper = mount(
    <MuiThemeProvider muiTheme={muiTheme}>
      <Toggle label={'My label'} toggled={false} />
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});
