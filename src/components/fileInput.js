/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';

import Button from 'material-ui/Button';

const styles = theme => ({
  fileInput: {
    display: 'none'
  },
  fileLabel: {
    display: 'inline-block'
  }
});

class FileInput extends Component {
  handleChange = files => {};

  handleClick = () => {
    this.fileLabel.click();
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <label
          for="file-upload"
          className={classes.fileLabel}
          ref={label => (this.fileLabel = label)}
        >
          <Button
            raised
            color="primary"
            className={classes.button}
            onClick={this.handleClick}
          >
            Add note
          </Button>
        </label>
        <input
          id="file-upload"
          className={classes.fileInput}
          type="file"
          onChange={e => this.handleChange(e.target.files)}
        />
      </div>
    );
  }
}

FileInput.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles, { withTheme: true })(FileInput));
