// src/routes.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import Index from '../pages/index';
import Categories from '../pages/categories';
import About from '../pages/about';
import NotFound from '../pages/notFound';
import Login from '../pages/login';

import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import NoteAddIcon from 'material-ui-icons/NoteAdd';
import StarsIcon from 'material-ui-icons/Stars';
import InfoOutlineIcon from 'material-ui-icons/InfoOutline';

import { withStyles, MuiThemeProvider } from 'material-ui/styles';
import createContext from '../styles/createContext';

import { Provider } from 'react-redux';

const styles = theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      width: '100%',
      height: '100%'
    },
    body: {
      margin: 0,
      width: '100%',
      height: '100%'
    },
    '::-webkit-scrollbar': {
      width: 0,
      background: 'transparent' /* make scrollbar transparent */
    }
  },
  root: {
    width: '100%',
    height: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 250
  },
  drawerHeader: theme.mixins.toolbar,
  mainArea: {
    padding: 24,
    paddingTop: 92,
    height: 'calc(100% - 142px)'
  },
  textLink: {
    textDecoration: 'none !important'
  }
});

const routes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    exact: false,
    component: About
  },
  {
    path: '/categories',
    name: 'Categories',
    exact: false,
    component: Categories
  },
  {
    path: '/login',
    name: 'Login',
    exact: false,
    component: Login
  }
];

class Routes extends Component {
  state = {
    drawerOpen: false,
    token: null
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  matchPath = path => {
    if (path === '') {
      return 'My presentations';
    }
    let route = routes.find(r => r.path === path);
    return route ? route.name : 'Not Found';
  };

  componentDidMount() {
    this.setState({
      token: this.props.store.getState().token
    });

    this.props.store.subscribe(() => {
      this.setState({
        token: this.props.store.getState().token
      });
    });
  }

  render() {
    const { classes, theme, store } = this.props;
    const { drawerOpen, token } = this.state;

    const context = createContext();

    const sideList = (
      <div className={classes.list}>
        <List>
          <NavLink
            to="/"
            exact
            activeStyle={{
              backgroundColor: theme.palette.primary[50],
              display: 'block'
            }}
            onClick={this.toggleDrawer('drawerOpen', false)}
            style={{ textDecoration: 'none' }}
          >
            <ListItem>
              <ListItemIcon>
                <NoteAddIcon />
              </ListItemIcon>
              <ListItemText primary="My notebook" />
            </ListItem>
          </NavLink>
          <NavLink
            to="/categories"
            activeStyle={{
              backgroundColor: theme.palette.primary[50],
              display: 'block'
            }}
            onClick={this.toggleDrawer('drawerOpen', false)}
            style={{ textDecoration: 'none' }}
          >
            <ListItem>
              <ListItemIcon>
                <StarsIcon />
              </ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItem>
          </NavLink>
          <NavLink
            to="/about"
            activeStyle={{
              backgroundColor: theme.palette.primary[50],
              display: 'block'
            }}
            onClick={this.toggleDrawer('drawerOpen', false)}
            style={{ textDecoration: 'none' }}
          >
            <ListItem>
              <ListItemIcon>
                <InfoOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </NavLink>
        </List>
      </div>
    );

    return (
      <Provider store={store}>
        <MuiThemeProvider
          theme={context.theme}
          sheetsManager={context.sheetsManager}
        >
          <BrowserRouter>
            <div className={classes.root}>
              <AppBar>
                <Toolbar>
                  {token && (
                    <IconButton
                      className={classes.menuButton}
                      color="contrast"
                      aria-label="Menu"
                      onClick={this.toggleDrawer('drawerOpen', true)}
                    >
                      <MenuIcon />
                    </IconButton>
                  )}
                  <Typography
                    type="title"
                    color="inherit"
                    className={classes.flex}
                  >
                    My notebook
                  </Typography>
                  {token && <Button color="contrast">Log out</Button>}
                </Toolbar>
              </AppBar>
              {token && (
                <Drawer
                  open={drawerOpen}
                  onRequestClose={this.toggleDrawer('drawerOpen', false)}
                >
                  <div className={classes.drawerHeader} />
                  <Divider />
                  {sideList}
                </Drawer>
              )}
              <main className={classes.mainArea}>
                <Switch>
                  {routes.map(
                    (r, i) =>
                      r.exact ? (
                        <Route
                          key={i}
                          path={r.path}
                          component={r.component}
                          exact
                        />
                      ) : (
                        <Route key={i} path={r.path} component={r.component} />
                      )
                  )}
                  <Route component={NotFound} />
                </Switch>
              </main>
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

Routes.propTypes = {
  classes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Routes);
