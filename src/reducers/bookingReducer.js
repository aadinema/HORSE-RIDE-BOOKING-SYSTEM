// src/reducers/bookingReducer.js
const initialState = null;

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOK_HORSE':
      return action.payload;
    default:
      return state;
  }
};

export default bookingReducer;
