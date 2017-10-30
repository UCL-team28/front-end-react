// src/routes.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRoot from '../components/withRoot';

import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';

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

import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import NoteAddIcon from 'material-ui-icons/NoteAdd';
import StarsIcon from 'material-ui-icons/Stars';
import InfoOutlineIcon from 'material-ui-icons/InfoOutline';

import TextField from 'material-ui/TextField';

import JssProvider from 'react-jss/lib/JssProvider';
import { withStyles, MuiThemeProvider } from 'material-ui/styles';
import createContext from '../styles/createContext';

	const styles = theme => ({
		'@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      width: '100%',
      height: '100%',
    },
    body: {
      margin: 0,
      width: '100%',
      height: '100%',
    },
    '::-webkit-scrollbar': {
        width: 0,
        background: 'transparent', /* make scrollbar transparent */
    }
  },
	  root: {
	    width: '100%',
	    height: '100%',
	  },
	  flex: {
	    flex: 1,
	  },
	  menuButton: {
	    marginLeft: -12,
	    marginRight: 20,
	  },
	  list: {
	    width: 250,
	  },
	  drawerHeader: theme.mixins.toolbar,
	  mainArea: {
	    padding: 24,
	    paddingTop: 92,
	    height: 'calc(100% - 142px)'
	  },
	  containerForm: {
	    display: 'flex',
	    flexWrap: 'wrap',
	  },
	  textField: {
	    width: '100%',
	  },
	  textLink: {
	  	textDecoration: 'none !important'
	  },
	  active: {
	  	backgroundColor: theme.palette.secondary[50]
	  }
	});

const routes = [
	{
		path: "/",
     	name: "",
     	exact: true,
 	 	component: Index
 	},
	{
		path: "/about",
     	name: "",
     	exact: false,
 	 	component: About
 	},
 	{
		path: "/categories",
     	name: "",
     	exact: false,
 	 	component: Categories
 	}
];

class Routes extends Component {
  state = {
  	drawerOpen: false,
  	addDialogOpen: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  matchPath = (path) => {
  	if(path === "") {
  		return "My presentations";
  	}
  	let route = routes.find(r => (r.path === path));
  	return route ? route.name : "Not Found";
  };

	componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

  render() {
    const { classes, theme } = this.props;
    const { drawerOpen, addDialogOpen } = this.state;

    const context = createContext();

	const sideList = (
      <div className={classes.list}>
        <List>
          <NavLink to="/" exact activeStyle={{ backgroundColor: theme.palette.primary[50], display: 'block' }} onClick={this.toggleDrawer('drawerOpen', false)} style={{ textDecoration: 'none' }}>
			<ListItem>
	            <ListItemIcon>
	              <NoteAddIcon />
	            </ListItemIcon>
	            <ListItemText primary="My notebook" />
          	</ListItem>
          </NavLink>
          <NavLink to="/categories" activeStyle={{ backgroundColor: theme.palette.primary[50], display: 'block' }} onClick={this.toggleDrawer('drawerOpen', false)} style={{ textDecoration: 'none' }}>
	          <ListItem>
	            <ListItemIcon>
	              <StarsIcon />
	            </ListItemIcon>
	            <ListItemText primary="Categories" />
	          </ListItem>
          </NavLink>
          <NavLink to="/about" activeStyle={{ backgroundColor: theme.palette.primary[50], display: 'block' }} onClick={this.toggleDrawer('drawerOpen', false)} style={{ textDecoration: 'none' }}>
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

    return(
		<JssProvider registry={context.sheetsRegistry} jss={context.jss}>
          <MuiThemeProvider theme={context.theme} sheetsManager={context.sheetsManager}>
	    	<BrowserRouter>
				<div className={classes.root}>
				    <AppBar>
				      <Toolbar>
				        <IconButton className={classes.menuButton} color="contrast" aria-label="Menu" onClick={this.toggleDrawer('drawerOpen', true)} >
				          <MenuIcon />
				        </IconButton>
				        <Typography type="title" color="inherit" className={classes.flex}>
				          My notebook
				        </Typography>
				      </Toolbar>
				    </AppBar>
				    <Drawer open={drawerOpen} onRequestClose={this.toggleDrawer('drawerOpen', false)}>
			          <div className={classes.drawerHeader} />
			          <Divider />
			          {sideList}
			        </Drawer>
			        <main className={classes.mainArea}>
			        	<Switch>
						  	{
						  		routes.map(r => (
								  r.exact ? (
							        <Route path={r.path} component={r.component} exact />
							      ) : (
							        <Route path={r.path} component={r.component} />
							      )
						  		))
						  	}
						  	<Route component={NotFound} />
					  	</Switch>
					</main>
				</div>
			</BrowserRouter>
          </MuiThemeProvider>
        </JssProvider>
    );
  }
}

Routes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Routes);
