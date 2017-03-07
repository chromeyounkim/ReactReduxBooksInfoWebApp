import React from 'react';
import TopicSelector from './topicSelector.js';
import DisplayMode from './displayMode.js';
import {connect} from 'react-redux';

const Controls = ({topic, displayMode}) => {
  const styles = {
    controls: {
      padding: '15px',
      marginBottom: '25px',
    },
  };

  return (
    <div style={styles.controls}>
      <TopicSelector topic={topic} />
     <DisplayMode displayMode={displayMode} />
    </div>
  );
};

const mapStateToProps = (state) => ({
    topic: state.topic,
    displayMode: state.displayMode
});

export default connect(mapStateToProps, null)(Controls);