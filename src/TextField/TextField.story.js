import React from 'react';
import { storiesOf } from '@kadira/storybook';
import TextField from './TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

storiesOf('TextField', module)
  .addDecorator((getStory) => (
    <MuiThemeProvider>
      <div style={{width: '320px', padding: '20px'}}>
        { getStory() }
      </div>
    </MuiThemeProvider>
  ))
  .add('default', () => (
    <TextField
      id={'myId'}
      value={'Some value'}
      floatingLabelText={'My label'}
    />
  ))
  .add('custom focus color', () => (
    <TextField
      id={'myId'}
      value={'Some value'}
      focusColor={'hsla(0, 0%, 30%, 1)'}
      floatingLabelText={'My label'}
    />
  ))
  .add('with error', () => (
    <TextField
      id={'myId'}
      label={'My label'}
      floatingLabelText={'Some value'}
      errorText={'Invalid value'}
    />
  ));
