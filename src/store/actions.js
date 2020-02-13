export const handleInput = (value, dispatch) => {
  dispatch({
    type: 'HANDLE_INPUT',
    payload: value
  });
};

export const handleSelect = (value, dispatch) => {
  dispatch({
    type: 'HANDLE_SELECT',
    payload: value
  });
};

export const clearInput = dispatch => {
  dispatch({
    type: 'CLEAR_INPUT'
  });
};

export const getResults = (data, dispatch) => {
  dispatch({
    type: 'GET_RESULTS',
    payload: data
  });
};

export const goToPage = (page, dispatch) => {
  dispatch({
    type: 'GO_TO_PAGE',
    payload: page
  });
};

export const setCurrentBook = (book, dispatch) => {
  dispatch({
    type: 'SET_CURRENT_BOOK',
    payload: book
  });
};
