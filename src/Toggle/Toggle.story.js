import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Toggle from './Toggle';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '@ox2/theme-mui';

const muiTheme = getMuiTheme(theme);

storiesOf('Toggle', module)
  .addDecorator((getStory) => (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div style={{width: '320px'}}>
        { getStory() }
      </div>
    </MuiThemeProvider>
  ))
  .add('on', () => (
    <Toggle label={'My label'} toggled={true} />
  ))
  .add('off', () => (
    <Toggle label={'My label'} toggled={false} />
  ))
  .add('disabled', () => (
    <Toggle label={'My label'} toggled={false} disabled={true} />
  ));
