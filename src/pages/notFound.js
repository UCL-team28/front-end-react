/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';

const styles = theme => ({});

class NotFound extends Component {
  render() {
    const { classes, theme } = this.props;

    return (
      <Typography type="body2" color="inherit">
        Page not Found
      </Typography>
    );
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles, { withTheme: true })(NotFound));
