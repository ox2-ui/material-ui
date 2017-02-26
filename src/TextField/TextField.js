import React, { PropTypes } from 'react';
import { default as MaterialTextField } from 'material-ui/TextField';

const styles = {
  error: {
    color: 'hsla(6, 63%, 46%, 1)',
  },
  underline: {
    borderColor: 'hsla(214, 70%, 53%, 1)',
  },
  label: {
    color: 'hsla(0, 0%, 35%, 1)',
  },
  labelFocus: {
    color: 'hsla(214, 70%, 53%, 1)',
  },
  hint: {
    color: 'hsla(0, 0%, 67%, 1)',
    fontFamily: 'Roboto Condensed',
  },
  input: {
    fontFamily: 'Roboto Condensed',
  },
};

/**
 * TextField Component
 */
const TextField = ({ ...rest, errorText }) => (
  <MaterialTextField
    floatingLabelFixed={true}
    underlineFocusStyle={styles.underline}
    floatingLabelStyle={styles.label}
    floatingLabelFocusStyle={errorText ? styles.error : styles.labelFocus}
    errorStyle={styles.error}
    inputStyle={styles.input}
    hintStyle={styles.hint}
    fullWidth={true}
    style={{fontSize: '18px'}}
    errorText={errorText}
    {...rest}
  />
);

TextField.propTypes = {
  errorText: PropTypes.string,
};


export default TextField;
