/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  header: {
    marginBottom: 24
  }
});

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography className={classes.header} type="headline" color="inherit">
          About the project
        </Typography>
        <Typography type="body1" color="inherit">
          This is the COMP104 Scenario Week 1 submission of Team 28 (Aleksei
          Rozhnov, Martin Praski, Maria Iacobici)
        </Typography>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

About.contextTypes = { store: PropTypes.object };

export default withStyles(styles, { withTheme: true })(About);
