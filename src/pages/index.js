/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Divider from 'material-ui/Divider';

import Entry from '../components/entry';
import Adder from '../components/adder';

const styles = theme => ({
  mainContainer: {}
});

class Index extends Component {
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
          <Grid item xs={12}>
            <Adder />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
            <Grid key={value} item xs={12}>
              <Entry />
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Index);
