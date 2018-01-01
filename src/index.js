import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';



// downwards data flow - only parent of all components should be responsible for fetching data
const API_KEY = "AIzaSyC6RjEy6hMaS5Y0Pux_1FouZCCZFXzXKzU";


// React is a javascript library that is used to show html in a web browser.
// When we write React code, we are writing components or views.
// Components are snippets of html (a collection of javascript components that produce html)
//  We nest components inside of one another to make complex applications really simple.

// Create a new component.  This component should produce HTML.

// const App = function() {
// 	return <div>Hi, there!</div>; //jsx looks like html, but is javascript.  allows us to write it within javascript
// }

// new ES6 syntax
// const App = () => {
// 	return (  //the div or ( must  be on same line as return or else you will get an error
// 		<div>
// 			<SearchBar />

// 		</div>

// 	);
// }



// CHANGED TO CLASS-BASED COMPONENT

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };
		// move this search into constructor function so 
		YTSearch({ key: API_KEY, term: 'ballet'}, (videos) => {
			// this.setState({videos: videos });
			// ES6 syntax below - if key and property are same variable
			this.setState({videos});
			console.log(videos);
		});

	}

	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}

}

// Take this component's generated HTML and put it on the page. (in the DOM)
// App is a class NOT an instance.  we need to make an instance and THEN pass it to the DOM
//  The < /> creates an instance and passes it to the DOM.  The second argument tells React where to place it on the page.
ReactDOM.render(<App/>, document.querySelector('.container'));








