import React from 'react';

const SearchBar = ({ handleSearch }) => {
	return (
		<div>
			<input type="text" />
			<button onClick={handleSearch}>Search</button>
		</div>
	);
};

export default SearchBar;
