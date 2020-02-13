import React, { useContext } from 'react';

import { Store } from '../../store/store';
import { clearInput, goToPage } from '../../store/actions';

import SearchBar from '../search-bar/search-bar.component';

const Navbar = () => {
  const { state, dispatch } = useContext(Store);

  const backToHomepage = () => {
    goToPage('landingPage', dispatch);
    clearInput(dispatch);
  };

  return (
    <div>
      <button onClick={backToHomepage}>Bookle</button>
      <SearchBar />
    </div>
  );
};

export default Navbar;
