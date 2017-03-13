import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ToggleField from './ToggleField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '@ox2/theme-mui';

const muiTheme = getMuiTheme(theme);

storiesOf('TogglField', module)
  .addDecorator((getStory) => (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div style={{width: '320px'}}>
        { getStory() }
      </div>
    </MuiThemeProvider>
  ))
  .add('on', () => (
    <ToggleField label={'My label'} toggled={true} />
  ))
  .add('off', () => (
    <ToggleField label={'My label'} toggled={false} />
  ))
  .add('disabled', () => (
    <ToggleField label={'My label'} toggled={false} disabled={true} />
  ));
