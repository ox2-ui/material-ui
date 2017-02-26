/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Toggle from './Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders enabled correctly', () => {
  const wrapper = mount(
    <MuiThemeProvider>
      <Toggle label={'My label'} toggled={true} />
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders disabled correctly', () => {
  const wrapper = mount(
    <MuiThemeProvider>
      <Toggle label={'My label'} toggled={false} />
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});
