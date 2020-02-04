import React from 'react';

const ResultsDisplay = ({ results }) => {
	return (
		<div>
			<p>{results ? results.map(book => book.title) : 'Results Go Here'}</p>
		</div>
	);
};

export default ResultsDisplay;
