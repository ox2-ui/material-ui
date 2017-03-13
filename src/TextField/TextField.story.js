import React from 'react';
import { storiesOf } from '@kadira/storybook';
import TextField from './TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '@ox2/theme-mui';

const muiTheme = getMuiTheme(theme);

storiesOf('TextField', module)
  .addDecorator((getStory) => (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div style={{width: '320px', padding: '20px'}}>
        { getStory() }
      </div>
    </MuiThemeProvider>
  ))
  .add('default', () => (
    <TextField
      floatingLabelText={'My label'}
      id={'myId'}
      value={'Some value'}
    />
  ))
  .add('with error', () => (
    <TextField
      errorText={'Invalid value'}
      floatingLabelText={'Some value'}
      id={'myId'}
      label={'My label'}
    />
  ));
