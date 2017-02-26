import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Toggle from './Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

storiesOf('Toggle', module)
  .addDecorator((getStory) => (
    <MuiThemeProvider>
      <div style={{width: '320px'}}>
        { getStory() }
      </div>
    </MuiThemeProvider>
  ))
  .add('enabled', () => (
    <Toggle label={'My label'} toggled={true} />
  ))
  .add('disabled', () => (
    <Toggle label={'My label'} toggled={false} />
  ));
