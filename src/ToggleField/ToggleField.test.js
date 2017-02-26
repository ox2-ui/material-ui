/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ToggleField from './ToggleField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders enabled correctly', () => {
  const wrapper = mount(
    <MuiThemeProvider>
      <ToggleField label={'My label'} toggled={true} />
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders disabled correctly', () => {
  const wrapper = mount(
    <MuiThemeProvider>
      <ToggleField label={'My label'} toggled={false} />
    </MuiThemeProvider>
  );

  expect(wrapper).toMatchSnapshot();
});
