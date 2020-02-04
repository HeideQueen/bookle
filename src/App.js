import React, { useState } from 'react';

import SearchBar from './components/search-bar/search-bar.component';
import ResultsDisplay from './components/results-display/results-display.component';

import './styles.css';

export default function App() {
	const [results, setResults] = useState([]);

	const handleSearch = () => {
		setResults([
			{
				title: 'lord of the rings',
				author: 'tolkien'
			}
		]);
	};

	return (
		<div className="App">
			<h1>Bookle</h1>
			<h2>Search by Book Title</h2>
			<SearchBar handleSearch={handleSearch} />
			<ResultsDisplay results={results} />
		</div>
	);
}
