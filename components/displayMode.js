import React from 'react';
import { connect } from 'react-redux';
import { setDisplayMode } from '../actions';
require('./book.css');

const DisplayMode = ({
  setListing,
  setThumbnail,
  displayMode
}) => {
  const switchToListing = () => {
    setListing();
  };

  const switchToThumbnail = () => {
    setThumbnail();
  };

  const styles = {
    radio: {
      marginLeft: '10px',
      cursor: 'pointer',
    },

    radiospan: {
      marginLeft: '20px',
      fontFamily: 'tahoma',
      fontSize: '16px',
    },
  };
  
  return (
    <span>
      <span style={styles.radiospan}>
        Thumbnail
      </span>

      <input type="radio"
        name="display"
        style={styles.radio}
        onChange={switchToThumbnail}
        checked={displayMode === 'THUMBNAIL'}
        value="thumbnail" />

      <span style={styles.radiospan}>
        List
      </span>

      <input type="radio"
        name="display"
        style={styles.radio}
        onChange={switchToListing}
        checked={displayMode !== 'THUMBNAIL'}
        value="list" />
    </span>
  );
};

const mapDispatchToProps = dispatch => ({
  setListing: () => {
    dispatch(setDisplayMode('LISTING'));
  },

  setThumbnail: () => {
    dispatch(setDisplayMode('THUMBNAIL'));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(DisplayMode);

