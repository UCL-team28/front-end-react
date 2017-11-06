/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import Paper from 'material-ui/Paper';

import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

import { deleteCategory } from '../actions';

const styles = theme => ({
  header: {
    padding: 12
  },
  flexer: {
    display: 'flex',
    alignItems: 'center'
  },
  delete: {
    marginLeft: 'auto'
  }
});

class Category extends Component {
  deleteCategory = id => () => {
    this.context.store.dispatch(deleteCategory(id));
  };

  render() {
    const { classes, name, id } = this.props;

    return (
      <Paper>
        <div className={classes.header}>
          <div className={classes.flexer}>
            <Typography type="subheading" color="inherit">
              {name}
            </Typography>
            <IconButton
              className={classes.delete}
              onClick={this.deleteCategory(id)}
              aria-label="Delete"
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </Paper>
    );
  }
}

Category.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

Category.contextTypes = { store: PropTypes.object };

export default withStyles(styles, { withTheme: true })(Category);
