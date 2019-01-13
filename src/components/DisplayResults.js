import React from 'react';
import DisplayCardType from './DisplayCardType';

const DisplayResults = (props) => { 

	let resultItems = [];
	props.items.map((item,i) => 
		resultItems.push(
			<li><DisplayCardType key={i} item={item}/></li>
		)
	)

	return (
		<ul className="DisplayResults"> 
			{resultItems}
		</ul>
	);
	
}

export default DisplayResults;