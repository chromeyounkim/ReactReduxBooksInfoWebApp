import React from 'react';
import Controls from './controls.js';
import Books from './books.js';

const titleStyle = {
  fontFamily: 'tahoma',
  fontSize: '24px',
  textAlign: 'center',
};

const Title = () => (
  <div style={titleStyle}>
    Book Search
  </div>
);

export default () => (
  <div>
    <Title />
    <hr />
    <Controls />
    <Books/>
  </div>
);