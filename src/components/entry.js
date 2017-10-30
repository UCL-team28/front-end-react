/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import Paper from 'material-ui/Paper';

import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

const styles = theme => ({
  header: {
    padding: 24
  },
  caption: {
    color: theme.palette.text.secondary
  },
  content: {
    padding: 24,
    paddingTop: 0
  },
  media: {
    padding: 24,
    paddingTop: 0
  },
  image: {
    width: '100%',
    height: 'auto'
  },
  flexer: {
    display: 'flex',
    alignItems: 'center'
  },
  delete: {
    marginLeft: 'auto'
  }
});

class Entry extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper>
        <div className={classes.header}>
          <div className={classes.flexer}>
            <Typography type="title" color="inherit">
              Title of the note
            </Typography>
            <IconButton className={classes.delete} aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </div>
          <Typography type="body1" color="inherit" className={classes.caption}>
            10.09.2017
          </Typography>
        </div>
        <div className={classes.content}>
          <Typography type="body1" color="inherit">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </div>
        <div className={classes.media}>
          <img src="https://picsum.photos/600/400" className={classes.image} />
        </div>
      </Paper>
    );
  }
}

Entry.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Entry);
