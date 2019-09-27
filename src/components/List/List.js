import React from 'react';

const List = props => {
	const {aetArray} = props;
	// const aetLiArray = aetArray.forEach(element => {
		
	// });
	return (
		<div className="list-wrapper">
			<ul className="list active js-list-ul" id="listUl"></ul>
		</div>
	)
}

export default List;