import React from 'react';
import {connect} from 'react-redux';
import { setTopic, fetchBooks } from '../actions';

class TopicSelector extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  componentDidMount() {
    const input = this.refs.input;
    input.focus();
  }
  
  handleChange(event) {
    this.props.setTopic(event.target.value);
  }
  
  handleKeyPress(event) {
    if (event.key == 'Enter') {
      this.props.fetchTopic(event.target.value); 
    }
  }
  
  render() {
    const styles = {
      topic: {
        marginRight: '10px',
        fontFamily: 'tahoma',
        fontSize: '18px',
      },

      input: {
        fontFamily: 'tahoma',
        fontSize: '16px',
        marginRight: '10px',
      },
    };

    const topic = this.props.topic;

    return (
      <span>
        <span style={styles.topic}>
          Topic
        </span>

        <input type="text"
          ref="input"
          style={styles.input}
          value={topic}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </span>
    );
  }  
}



const mapStateToProps = (state) => ({
  topic: state.topic
});

const mapDispatchToProps = (dispatch) => ({
  setTopic: topic => {
    dispatch(setTopic(topic));
  },
  fetchTopic: topic => {
    dispatch(setTopic(topic));
    dispatch(fetchBooks());
  }
});

TopicSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicSelector);

export default TopicSelector;