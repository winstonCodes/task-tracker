import React from 'react';

const List = props => {
	// import array from props
	const {aetArray} = props;

	// create an array of li
	const aetLiArray = aetArray.map((value, index) => (
		<li className="list-item" key={index}>
			<span className="li-time">{value.submitTime}</span>
			<span className="li-aet">{value.aet}</span>
		</li>
	));


	return (
		<div className="list-wrapper">
			<ul className="list active js-list-ul" id="listUl">{aetLiArray}</ul>
		</div>
	)
}

export default List;