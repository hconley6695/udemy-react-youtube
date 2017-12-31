import React, {Component} from 'react';

// Functional Component - this works, but most of the time, you do class-based components
// const SearchBar = () => {
// 		return <input name="searchbar" type="text"/>;
// };
// Class component - used when you want some type of internal record keeping; 

// class SearchBar extends React.Component { -- use ES6 to just write Component

class SearchBar extends Component {
	// state is a plain javascript object which is used to record and react to user events
	// each class-based component has its own state object
	// whenever state is changed, the component and its children immediately rerender
	// must first initialize state; set property state in the constructor method

	// define method on the class - all javascript classes have a constructor
	// the constructor is first only function called automatically whenever new instance of class is created
	constructor(props) {
		// super calls constructor method of parent class - in this case, Component is parent class
		super(props);

		// state is what is always being updated or changed
		// in constructor, is the only time we set state by using this.state; all other times, use this.setState
		this.state = { searchterm: ''};
	}



	// Handling events in React requires two steps - 1. Create eventhandler and 2. We pass eventhandler to section that we want to handle events.
	// event handler - we want to know when input element has its text change
	// usually do "on" or "handle"; name of element (input); and then event itself (change)
	// whenever handler occurs, they are always passed an event object; event describes context about event that occurred
	// we update state in the handler
	// you MUST BIND THE FUNCTION TO THE ONCHANGE in the render method
	 onInputChange(event) {
	// use event to get the value of what was changed
		console.log(event.target.value);

		// pass an object that sets the new state that we want
		// to change state, don't use "=";  always use this.setState

		 this.setState({ searchterm: event.target.value });

	 }

	// define method on the class - must have a render method if class-based!
	 render() {
		// render method must return jsx or else will get error
		// to tap into 
		// whenever you reference a javascript variable, wrap it in curly braces
		 return ( 

			 <div>
				 <input onChange={this.onInputChange.bind(this) } value={this.state.searchterm}/>
				 Value is: {this.state.searchterm}
			 </div>


		 );
	 }



// ES6 would be written this way:
//whenever we change the value of the input element, the onChange function runs and we set the state; causes re-render and push info into DOM
// write a controlled field: a form element that's value is set by the state
// don't need the bind in the ES6 version because you are creating the function within the render function
	// render() {
	// 	return (
	// 		<div>

	// 			<input 
	// 				value={ this.state.searchterm }
	// 				onChange={event => this.setState({ searchterm: event.target.value })} />
	// 			Value is: { this.state.searchterm}
	// 		</div>
	// 	);
	// }


}


export default SearchBar;