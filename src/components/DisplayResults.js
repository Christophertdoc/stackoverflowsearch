import React from 'react';
import DisplayCardType from './DisplayCardType';
import glamorous from  'glamorous';

const Div = glamorous.div({
	padding : '10px',
	display : 'flex',
	flexFlow : 'row wrap',
	justifyContent : 'center'
})

const DisplayResults = (props) => {

	let resultItems = [];
	props.items.map((item,i) => 
		resultItems.push(
			<DisplayCardType key={i} item={item}/>
		)
	)

	return (
		<Div className="displayresults">
			{resultItems}
		</Div>
	);
	
}

export default DisplayResults;