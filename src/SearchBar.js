import React from 'react';

const SearchBar = ({searchChange}) =>
{
	return ( 
	<div className="pa2">
		<input
		 type='search'
		 placeholder='Search Robots'
		 onChange={searchChange} />
	</div>	
	);
}

export default SearchBar;