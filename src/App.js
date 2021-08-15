import React, {Component} from 'react';
import './App.css'
import CardList from './CardList.js';
import {robots} from './robots.js';
import SearchBar from './SearchBar.js';
import Scroll from './Scroll.js';

const state = {

}

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: robots,
			SearchField:' '
		}
	}

	 onSearchChange = (event) => {
	 		this.setState({SearchField: event.target.value});

			
			
		}

	render(){
		const filteredRobot = this.state.robots.filter(robots => {
				return robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase());
			});
		return(

		<div className='tc'>
			<h1 id='title' className='f1' > ROBOFRIENDS </h1>
			<SearchBar searchChange={this.onSearchChange} />
			<Scroll>
				<CardList robots={filteredRobot} />
			</Scroll>
		</div>
		);
	}	

}

export default App;
