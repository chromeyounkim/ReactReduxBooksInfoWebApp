import {combineReducers} from 'redux';

 const defaults = {
   STATUS: 'Starting the application',
   TOPIC: 'javascript',
   STATE: [],
   DISPLAY_MODE: 'THUMBNAIL'
 };

const fetchReducer = (state = defaults.STATE, action) => {
  switch(action.type) {
    case 'FETCH_STARTED':
      return [];
    case 'FETCH_FAILED':
      return [];
    case 'FETCH_COMPLETE':
      return action.json.items;
    default:
      return state;
  }
};

const statusReducer = (state = defaults.STATUS, action) => {
  switch (action.type) {
    case 'FETCH_STARTED':
      return 'Fetching...';
    case 'FETCH_COMPLETE':
      return 'Fetch complete';
    case 'FETCH_FAILED':
      return 'Fetch failed ' + (action.error ? action.error : '');
    case 'SET_TOPIC':
      return 'Set topic to ' + action.topic;
    case 'SET_DISPLAY_MODE':
      return 'Set display mode to ' + action.displayMode;
    default:
      return state;
  }
};

const topicReducer = (state=defaults.TOPIC, action) => {
  switch(action.type) {
    case 'SET_TOPIC': 
      return action.topic;
    default:
      return state;
  }
};

const bookDisplayReducer = (state = defaults.DISPLAY_MODE, action) => {
  switch (action.type) {
    case 'SET_DISPLAY_MODE':
      return action.displayMode;

    default:
      return state;
  }
};

export default combineReducers({
  books: fetchReducer,
  topic: topicReducer,
  currentStatus: statusReducer,
  displayMode:   bookDisplayReducer
});