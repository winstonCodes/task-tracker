import React from 'react';

const List = props => {
	// import array from props
	const {aetArray} = props;

	// create an array of li
	const aetLiArray = aetArray.map((value, index) => (
		<li key={index}>
			<span style={{fontSize: "10px"}}>{value.submitTime}</span>{value.aet}
		</li>
	));


	return (
		<div className="list-wrapper">
			<ul className="list active js-list-ul" id="listUl">{aetLiArray}</ul>
		</div>
	)
}

export default List;