import React from "react";

import SearchBar from "./components/search-bar/search-bar.component";

import "./styles.css";

export default function App() {
	return (
		<div className="App">
			<h1>Bookle</h1>
			<h2>Search by Book Title</h2>
			<SearchBar />
		</div>
	);
}
