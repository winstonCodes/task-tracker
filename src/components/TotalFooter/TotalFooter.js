import React, {useState, useEffect} from 'react';
import './TotalFooter.sass'

const TotalFooter = props => {

	const {aetArray, updateAetTotal, resetArray} = props;

	
	const totalInitialState = 0;
	const [total, setTotal] = useState(totalInitialState);
	
	// const aetTotal = aetArray.length > 1 ? aetArray.reduce((sum, current) => (parseInt(sum) + parseInt(current.aet))) : "";
	
	// const aetTotal = 3;

	const hours = total ? parseInt(total / 60) : 0 ;
	const minutes = total ? Math.round((total % 60)*100)/100 : 0;

	useEffect(() => {
			const numArray = aetArray.length > 0 ? (aetArray.map(obj => obj.aet)) : [];
			setTotal(updateAetTotal(numArray));
	})

	return (
		< div className = "total-input-wrapper" >
			<p className = "active time-total" id = "total" > Total: {hours}hrs {minutes}min
				<input className = "submit-input" type = "button" value = "reset" id = "resetButton" onClick={resetArray} />
			</p>
		</div>
	)
}

export default TotalFooter;