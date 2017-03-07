import React from 'react';
import Book from './book.js';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Books = ({books, displayMode, currentStatus}) => {
   const styles = {
    container: {
      width: '100%',
    },

    spinner: {
      textAlign: 'center',
      width: '100%',
    },
  };

  const Spinner = () => (
    <div style={styles.spinner}>
      <img src="../images/spinner.gif"
        role="presentation" />
    </div>
  );
  
  const bookMarkup = () => {
    let components = null;
    let bookItems = (<span>No items</span>);
    if (books.length > 0) {
      components = books.map(item => {
          if (item.volumeInfo.imageLinks) {
             bookItems = (
                <Book item={item}
                  displayMode={displayMode}
                  key={item.id} />
              );
            }
            return bookItems;
        });
    }
    return components;
  }
  
  return (
    <div>
      {currentStatus !== 'Fetching...' ?  null : <Spinner />}
      <div style={styles.container}>
          {bookMarkup()}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  books: state.books,
  topic: state.topic,
  currentStatus: state.currentStatus
});

export default connect(mapStateToProps, null)(Books);