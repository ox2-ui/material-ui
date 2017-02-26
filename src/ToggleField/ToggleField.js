import React from 'react';
import Toggle from '../Toggle';

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '42px',
    marginTop: '10px',
    borderBottom: '1px solid rgb(224, 224, 224)',
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
