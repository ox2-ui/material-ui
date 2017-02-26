import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ToggleField from './ToggleField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

storiesOf('TogglField', module)
  .addDecorator((getStory) => (
    <MuiThemeProvider>
      <div style={{width: '320px'}}>
        { getStory() }
      </div>
    </MuiThemeProvider>
  ))
  .add('enabled', () => (
    <ToggleField label={'My label'} toggled={true} />
  ))
  .add('disabled', () => (
    <ToggleField label={'My label'} toggled={false} />
  ));
