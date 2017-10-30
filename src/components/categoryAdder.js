/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';

import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';

import TextField from 'material-ui/TextField';

import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = theme => ({
	content: {
		padding: 24,
		display: 'flex',
    flexWrap: 'wrap',
	},
	textField: {
	    width: '100%',
	  },
	  button: {
	  	marginTop: 12,
	  	marginLeft: 'auto'
	  },
	  input: {
    display: 'none',
  },
  formControl: {
    minWidth: 120,
    width: '100%',
  },
});

class CategoryAdder extends Component {
	state = {
		age: '',
	};

handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <Paper elevation={4}>
		<form className={classes.content} noValidate autoComplete="off">
		  <Typography type="title" color="inherit">
	        Add new category
	      </Typography>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            margin="normal"
          />
          <Button raised color="primary" className={classes.button}>
	        Add category
	      </Button>
        </form>
      </Paper>
    );
  }
}

CategoryAdder.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles, { withTheme: true })(CategoryAdder));