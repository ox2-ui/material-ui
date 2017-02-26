import React from 'react';
import { default as MaterialCheckbox } from 'material-ui/Checkbox';

const styles = {
  icon: {
    fill: 'hsla(0, 0%, 35%, 1)',
  },
};

/**
 * Checkbox Component
 */
const Checkbox = ({ ...rest }) => (
  <MaterialCheckbox
    iconStyle={styles.icon}
    {...rest}
  />
);

export default Checkbox;
