import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';
import VideoDetail from './components/video_details';



// downwards data flow - only parent of all components should be responsible for fetching data
const API_KEY = "AIzaSyAp0jnsyXxdbC1o9QZDg6m3B2d6fxWEFvQ";


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

		this.state = { 
			videos: [],
			selectedVideo: null
		};
		// need selected video so adding it to state
		// going to be an object and always passed into <Videodetail>
		//  in render function.  To update video, we'll pass a callback from 
		// App into <VideoList>.  Then from VideoList into VideoListItem.





		// // move this search into constructor function  (this is initial placement -> we move this function into the callback)
		// YTSearch({ key: API_KEY, term: 'football'}, (videos) => {
		// 	// this.setState({videos: videos });

		// 	this.setState({
		// 		videos: videos,
		// 		selectedVideo: videos[0]
		// 	});
		// 	// console.log(videos);
		// });


		// INSIDE CONSTRUCTOR, WILL NEED TO PUT IN INITIAL SEARCH.

		this.videoSearch('ballet');

	}

	// this method can now be passed to SearchBar.
	videoSearch(term) {
		YTSearch({ key: API_KEY, term: term}, (videos) => {
			// this.setState({videos: videos });

			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
			// console.log(videos);
		});
	}

	render() {

		// App is parent of VideoList.  We need to get access to videos in App's state.We need to pass info
		// from parent to child (or App to VideoList).  Declare a property on child. Passing data is referred to as
		// pass props.  The props will pass as an argument to VideoList (see file)

		// in class-based component, props is available in any method as this.props

		// Callback is going to be a function that is passed through App to VideoList to VideoListItem
		// We're going to pass another function to VideoList so that someone can click on a new item and have it be the one shown.
		// onVideoSelect updates App's state with a new video.  We're passing a function that manipulates another component


		// In order for new videos to be searched, we are going to place a callback in the searchbar component.
		//  need to define a callback

		// So that the search function doesn't fire so disjointedly, we're using lodash library to make it fire when we want it to. 
		// debounce is in lodash library; this is now Google Search works!

		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo}/>
		
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={ this.state.videos }/>

			</div>
		);
	}

}

				// formerly <SearchBar onSearchTermChange={term => this.videoSearch(term)}/> this is now in variable videoSearch

				// formerly <VideoDetail videos={this.state.videos[0]}/>		
				// <VideoDetail videos={this.state.selectedVideo}/>
// Take this component's generated HTML and put it on the page. (in the DOM)
// App is a class NOT an instance.  we need to make an instance and THEN pass it to the DOM
//  The < /> creates an instance and passes it to the DOM.  The second argument tells React where to place it on the page.

			// ES6 syntax below - if key and property are same variable
			// this.setState({videos});





ReactDOM.render(<App/>, document.querySelector('.container'));








