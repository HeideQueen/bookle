import React, { createContext, useReducer } from 'react';

const initialState = {
  input: '',
  searchType: 'title',
  results: null,
  currentPage: 'landingPage',
  currentBook: null
};

export const Store = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE_INPUT':
      return { ...state, input: action.payload };
    case 'HANDLE_SELECT':
      return { ...state, searchType: action.payload };
    case 'CLEAR_INPUT':
      return { ...state, input: '' };
    case 'GET_RESULTS':
      return { ...state, results: action.payload };
    case 'GO_TO_PAGE':
      return { ...state, currentPage: action.payload };
    case 'SET_CURRENT_BOOK':
      return { ...state, currentBook: action.payload };
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
