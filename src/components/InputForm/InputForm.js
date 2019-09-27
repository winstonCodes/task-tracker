import React, {useState} from 'react';
import "./InputForm.sass"

const InputForm = props => {

	const {addAetObject} = props;
	
	// !TODO: rename aetState instances to input
	const initialAetState = { name: ""};

	const [aetObject, setAet] = useState(initialAetState);
	
	const handleInputChange = event => {
			const {name, value} = event.target;
			setAet({[name]: value});
	}

	const handleSubmit = event => {
		event.preventDefault();
		console.log(aetObject)
		addAetObject(aetObject.name);
		setAet(initialAetState);
	}


	return (
		<div className="form-wrapper">
			<form className="main-AET-form" id="mainAETform" onSubmit={handleSubmit}>
				<input 
					className="user-input" 
					id="userInput" 
					type="text" 
					autoComplete="off"
					name="name"
					value={aetObject.name}
					onChange={handleInputChange} />
				<button className="submit-input">Submit</button>
       		 </form>
    	</div>
	)
}

export default InputForm;