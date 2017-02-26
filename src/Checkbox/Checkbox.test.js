/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Checkbox from './Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders enabled correctly', () => {
  const wrapper = mount(
    <MuiThemeProvider>
      <Checkbox label={'My label'} checked={true} />
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders disabled correctly', () => {
  const wrapper = mount(
    <MuiThemeProvider>
      <Checkbox label={'My label'} checked={false} />
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});
