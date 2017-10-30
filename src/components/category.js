/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';

import Paper from 'material-ui/Paper';

import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

const styles = theme => ({
	header: {
		padding: 24
	},
	flexer: {
		display: 'flex',
		alignItems: 'center',
	},
	delete: {
		marginLeft: 'auto',
	}
});

class Category extends Component {
  render() {
    const { classes, theme } = this.props;

    return (
      <Paper>
      	<div className={classes.header}>
      	  <div className={classes.flexer}>
			  <Typography type="title" color="inherit">
		        Category
		      </Typography>
			  <IconButton className={classes.delete} aria-label="Delete">
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
};

export default withRoot(withStyles(styles, { withTheme: true })(Category));
