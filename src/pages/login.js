/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';

import Paper from 'material-ui/Paper';

const styles = theme => ({
  mainContainer: {},
  card: {
    padding: 24,
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%'
  }
});

class Login extends Component {
  state = {
    spacing: 24
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid
          item
          sm={12}
          md={8}
          lg={6}
          container
          spacing={Number(spacing)}
          className={classes.card}
        >
          <Paper className={classes.card}>
            <Typography type="title" color="inherit">
              Log in
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

Login.contextTypes = { store: PropTypes.object };

export default withStyles(styles, { withTheme: true })(Login);
