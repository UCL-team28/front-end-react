/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';

import TextField from 'material-ui/TextField';

const styles = theme => ({
  content: {
    padding: 24,
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    width: '100%'
  },
  button: {
    marginTop: 12,
    marginLeft: 'auto'
  },
  input: {
    display: 'none'
  },
  formControl: {
    minWidth: 120,
    width: '100%'
  }
});

class CategoryAdder extends Component {
  state = {
    category: ''
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  canAddCategory = () => {
    return this.state.category === '';
  };

  addCategory = () => {};

  render() {
    const { classes } = this.props;

    return (
      <Paper>
        <form className={classes.content} noValidate autoComplete="off">
          <Typography type="title" color="inherit">
            Add new category
          </Typography>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            onChange={this.handleChange('category')}
            margin="normal"
          />
          <Button
            raised
            color="primary"
            className={classes.button}
            disabled={this.canAddCategory()}
            onClick={this.addCategory}
          >
            Add category
          </Button>
        </form>
      </Paper>
    );
  }
}

CategoryAdder.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(CategoryAdder);
