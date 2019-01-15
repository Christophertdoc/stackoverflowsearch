import React from 'react';
import DisplayCardType from './DisplayCardType';

const Results = (props) => { 

	let resultItems = [];
	props.items.map((item,i) => 
		resultItems.push(
			<li>
				<DisplayCardType key={i} item={item}/>
			</li>
		)
	)

	return (
		<ul className="Results"> 
			{resultItems}
		</ul>
	);
	
}

export default Results;