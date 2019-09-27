import React from 'react';
import './TotalFooter.sass'

const TotalFooter = props => {
	return (
		< div className = "total-input-wrapper" >
			<p className = "active time-total" id = "total" > Total:
				<input className = "submit-input" type = "button" value = "reset" id = "resetButton" />
			</p>
		</div>
	)
}

export default TotalFooter;