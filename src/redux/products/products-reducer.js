import { items } from '../../data/data';

const INITIAL_STATE = {
  items: items,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
