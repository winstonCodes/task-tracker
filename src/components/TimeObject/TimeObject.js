import React from 'react';

// const TimeObject = time => {
// 	this
// }

class TimeObject {
	constructor (){
		this.date = "Today";
		this.aetArray = [];
	}
	addToArray(aet){
		const taskObject = {
			"time": "3:00",
			aet
		}
		this.aetArray.push(taskObject);
	}
}

export default TimeObject;