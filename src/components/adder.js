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

class Adder extends Component {
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
	        Add new note
	      </Typography>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            margin="normal"
          />
			<FormControl className={classes.formControl}>
	          <InputLabel htmlFor="age-simple">Category</InputLabel>
	          <Select
	            value={this.state.age}
	            onChange={this.handleChange('age')}
	            input={<Input id="age-simple" />}
	          >
	            <MenuItem value="">
	              <em>None</em>
	            </MenuItem>
	            <MenuItem value={10}>Ten</MenuItem>
	            <MenuItem value={20}>Twenty</MenuItem>
	            <MenuItem value={30}>Thirty</MenuItem>
	          </Select>
	        </FormControl>
          <TextField
            id="multiline-static"
            label="Text"
            multiline
            rows="8"
            className={classes.textField}
            margin="normal"
          />
			<input accept="jpg,jpeg,JPG,JPEG" className={classes.input} id="file" multiple type="file" />
	      <label htmlFor="file">
	        <Button raised component="span" className={classes.button}>
	          Add media
	        </Button>
	      </label>
          <Button raised color="primary" className={classes.button}>
	        Add note
	      </Button>
        </form>
      </Paper>
    );
  }
}

Adder.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles, { withTheme: true })(Adder));
