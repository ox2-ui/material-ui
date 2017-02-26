import React from 'react';
import { default as MaterialToggle } from 'material-ui/Toggle';

const styles = {
  thumbSwitched: {
    backgroundColor: 'hsla(145, 63%, 42%, 1)',
  },
  trackSwitched: {
    backgroundColor: 'hsla(145, 63%, 42%, .3)',
  },
  label: {
    fontSize: '13.5px',
    color: 'hsla(0, 0%, 35%, 1)',
  },
};

/**
 * Toggle Component
 */
const Toggle = ({ ...rest }) => (
  <MaterialToggle
    labelStyle={styles.label}
    thumbSwitchedStyle={styles.thumbSwitched}
    trackSwitchedStyle={styles.trackSwitched}
    {...rest}
  />
);

export default Toggle;
