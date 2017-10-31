/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';

import TextField from 'material-ui/TextField';

import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

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

class Adder extends Component {
  state = {
    name: '',
    content: '',
    category: '',
    file: '',

    categories: []
  };

  componentDidMount() {
    this.setState({
      categories: this.context.store.getState().categories
    });

    this.context.store.subscribe(() => {
      this.setState({
        categories: this.context.store.getState().categories
      });
    });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  addNote = () => {};

  canAddNote = () => {
    return this.state.name === '' || this.state.content === '';
  };

  render() {
    const { classes } = this.props;
    const { categories } = this.state;

    return (
      <Paper>
        <form className={classes.content} noValidate autoComplete="off">
          <Typography type="title" color="inherit">
            Add new note
          </Typography>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Category</InputLabel>
            <Select
              value={this.state.category}
              onChange={this.handleChange('category')}
              input={<Input id="category-chooser" />}
            >
              <MenuItem value="-1">
                <em>None</em>
              </MenuItem>
              {categories.map(category => (
                <MenuItem value={category.id}>{category.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="multiline-static"
            label="Text"
            multiline
            rows="8"
            className={classes.textField}
            onChange={this.handleChange('content')}
            margin="normal"
          />
          <input
            accept="jpg,jpeg,JPG,JPEG"
            className={classes.input}
            id="file"
            multiple
            type="file"
          />
          <label htmlFor="file">
            <Button raised component="span" className={classes.button}>
              Add media
            </Button>
          </label>
          <Button
            raised
            color="primary"
            className={classes.button}
            disabled={this.canAddNote()}
            onClick={this.addNote}
          >
            Add note
          </Button>
        </form>
      </Paper>
    );
  }
}

Adder.propTypes = {
  classes: PropTypes.object.isRequired
};

Adder.contextTypes = { store: PropTypes.object };

export default withStyles(styles, { withTheme: true })(Adder);
