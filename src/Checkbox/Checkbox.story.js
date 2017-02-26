import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Checkbox from './Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

storiesOf('Checkbox', module)
  .addDecorator((getStory) => (
    <MuiThemeProvider>
      <div style={{width: '320px', padding: '20px'}}>
        { getStory() }
      </div>
    </MuiThemeProvider>
  ))
  .add('enabled', () => (
    <Checkbox label={'My label'} checked={true} />
  ))
  .add('disabled', () => (
    <Checkbox label={'My label'} checked={false} />
  ));
