import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
	// constructor(){
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// }

	goToStore(event) {
		event.preventDefault();	
		const storeID = this.storeInput.value;
		console.log(`Going to ${storeID}`)
		this.context.router.transitionTo(`/store/${storeID}`);
	}
	render(){
		return (
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
				<h2>Please Enter a Store</h2>
				<input type="text" required placeholder="Store Name" 
				defaultValue={getFunName()}
				ref={(input) => {this.storeInput = input}} />
				<button type="submit">Visit Store</button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;