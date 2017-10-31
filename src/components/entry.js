/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import Paper from 'material-ui/Paper';

import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

const styles = theme => ({
  header: {
    padding: 24
  },
  caption: {
    color: theme.palette.text.secondary
  },
  content: {
    padding: 24,
    paddingTop: 0
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
  }
});

class Entry extends Component {
  deleteEntry = id => () => {};

  render() {
    const {
      classes,
      name,
      category,
      content,
      media,
      mediaType,
      id,
      created
    } = this.props;

    return (
      <Paper>
        <div className={classes.header}>
          <div className={classes.flexer}>
            <Typography type="title" color="inherit">
              {name}
            </Typography>
            <IconButton
              className={classes.delete}
              aria-label="Delete"
              onClick={this.deleteEntry(id)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
          <Typography type="body1" color="inherit" className={classes.caption}>
            {created}
          </Typography>
        </div>
        <div className={classes.content}>
          <Typography type="body1" color="inherit">
            {content}
          </Typography>
        </div>
        <div className={classes.media}>
          {(() => {
            switch (mediaType) {
              case 'image':
                return <img src={media} className={classes.image} />;
              case 'video':
                return (
                  <video controls>
                    <source src={media} type="video/mp4" />
                  </video>
                );
            }
          })()}
        </div>
      </Paper>
    );
  }
}

Entry.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
  content: PropTypes.string.isRequired,
  media: PropTypes.string,
  mediaType: PropTypes.oneOf(['image', 'video']),
  id: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(Entry);
