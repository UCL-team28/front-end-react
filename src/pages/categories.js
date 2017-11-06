/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Divider from 'material-ui/Divider';

import Category from '../components/category';
import CategoryAdder from '../components/categoryAdder';

import { getCategories } from '../actions';

const styles = theme => ({
  mainContainer: {}
});

class Categories extends Component {
  state = {
    spacing: 24,
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

    this.context.store.dispatch(getCategories());
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  openDeleteDialog = (id, name) => () => {
    this.setState({
      deleteId: id,
      deleteName: name
    });

    this.toggleDrawer('deleteDialogOpen', true)();
  };

  render() {
    const { classes } = this.props;
    const { spacing, categories } = this.state;
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
            <CategoryAdder />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          {categories.map(category => (
            <Grid key={category.id} item xs={12}>
              <Category id={category.id} name={category.name} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  }
}

Categories.propTypes = {
  classes: PropTypes.object.isRequired
};

Categories.contextTypes = { store: PropTypes.object };

export default withStyles(styles, { withTheme: true })(Categories);
