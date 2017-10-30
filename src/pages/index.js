/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import SlideshowIcon from 'material-ui-icons/Slideshow';
import InfoOutlineIcon from 'material-ui-icons/InfoOutline';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';

import TextField from 'material-ui/TextField';

import { Link } from 'react-router-dom';

import Entry from '../components/entry';
import Adder from '../components/adder';

const styles = theme => ({
  mainContainer: {}
});

class Index extends Component {
  state = {
    deleteDialogOpen: false,
    addDialogOpen: false,

    spacing: 24,
    deleteId: 0,
    deleteName: ''
  };

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
    const { classes, theme } = this.props;
    const { deleteDialogOpen, deleteName, spacing } = this.state;
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
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
            <Grid key={value} item xs={12}>
              <Entry />
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

export default withRoot(withStyles(styles, { withTheme: true })(Index));
