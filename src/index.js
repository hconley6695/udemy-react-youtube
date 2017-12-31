import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';


const API_KEY = "AIzaSyBCG9X1x00HjzjuJMFUZH_GJngBqv-V0ls";



// React is a javascript library that is used to show html in a web browser.
// When we write React code, we are writing components or views.
// Components are snippets of html (a collection of javascript components that produce html)
//  We nest components inside of one another to make complex applications really simple.

// Create a new component.  This component should produce HTML.

// const App = function() {
// 	return <div>Hi, there!</div>; //jsx looks like html, but is javascript.  allows us to write it within javascript
// }

// new ES6 syntax
const App = () => {
	return (  //the div or ( must  be on same line as return or else you will get an error
		<div>
			<SearchBar />

		</div>

	);
}

// Take this component's generated HTML and put it on the page. (in the DOM)
// App is a class NOT an instance.  we need to make an instance and THEN pass it to the DOM
//  The < /> creates an instance and passes it to the DOM.  The second argument tells React where to place it on the page.
ReactDOM.render(<App/>, document.querySelector('.container'));
