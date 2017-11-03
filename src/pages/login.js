/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';

import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

import TextField from 'material-ui/TextField';

import {
  login
} from '../actions';

const styles = theme => ({
  mainContainer: {
  },
  card: {
    padding: 24,
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%'
  },
  header: {
    marginBottom: 24
  },
  caption: {
    color: theme.palette.text.secondary
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%'
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
  },
  textField: {
    width: '100%',
  },
  button: {
    marginTop: 24,
    marginLeft: 'auto',
  }
});

class Login extends Component {
  state = {
    spacing: 24,

    email: '',
    password: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  logg = () => {
    this.context.store.dispatch(login(this.state.email, this.state.password));
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
            <form className={classes.content} noValidate autoComplete="off">
              <Typography type="title" color="inherit">
                Login
              </Typography>
              <TextField
                id="name"
                label="Email"
                className={classes.textField}
                onChange={this.handleChange('email')}
                margin="normal"
              />
              <TextField
                id="multiline-static"
                label="Password"
                className={classes.textField}
                onChange={this.handleChange('password')}
                margin="normal"
              />
              <Button
                raised
                color="primary"
                className={classes.button}
                onClick={this.logg}
              >
                Login
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

Login.contextTypes = { store: PropTypes.object, router: PropTypes.object };

export default withStyles(styles, { withTheme: true })(Login);
