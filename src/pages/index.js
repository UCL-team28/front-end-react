/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Divider from 'material-ui/Divider';

import Entry from '../components/entry';
import Adder from '../components/adder';

import {
  getNotes
} from '../actions';

const styles = theme => ({
  mainContainer: {}
});

class Index extends Component {
  state = {
    spacing: 24,
    notes: []
  };

  componentDidMount() {
    this.setState({
      notes: this.context.store.getState().notes
    });

    this.context.store.subscribe(() => {
      this.setState({
        notes: this.context.store.getState().notes
      });
    });

    this.context.store.dispatch(getNotes(1))
  }

  render() {
    const { classes } = this.props;
    const { spacing, notes } = this.state;

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
          {notes.map(note => (
            <Grid key={note.id} item xs={12}>
              <Entry
                id={note.id}
                created={note.date}
                name={note.name}
                content={note.content}
                category={note.category}
                media={note.media}
                mediaType={note.media_type}
              />
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

Index.contextTypes = { store: PropTypes.object };

export default withStyles(styles, { withTheme: true })(Index);
