import React from 'react';
import Toggle from '../Toggle';
import { neutral_faded } from '@ox2/colors';

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '42px',
    marginTop: '10px',
    borderBottom: `1px solid ${neutral_faded}`,
  },
};

/**
 * ToggleField Component
 */
const ToggleField = ({ ...rest }) => (
  <div style={styles.wrapper}>
    <Toggle {...rest} />
  </div>
);

export default ToggleField;
