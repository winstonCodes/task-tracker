import React, {useState, useEffect} from 'react';
import './TotalFooter.sass'

const TotalFooter = props => {

	const {aetArray, updateAetTotal} = props;

	
	const totalInitialState = 0;
	const [total, setTotal] = useState(totalInitialState);
	
	// const aetTotal = aetArray.length > 1 ? aetArray.reduce((sum, current) => (parseInt(sum) + parseInt(current.aet))) : "";
	
	// const aetTotal = 3;

	useEffect(() => {
		const numArray = aetArray.map(obj => obj.aet);
		setTotal(updateAetTotal(numArray));
	})

	return (
		< div className = "total-input-wrapper" >
			<p className = "active time-total" id = "total" > Total: {total}
				<input className = "submit-input" type = "button" value = "reset" id = "resetButton" />
			</p>
		</div>
	)
}

export default TotalFooter;