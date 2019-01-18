import React from 'react';
import ReactHtmlParser from "react-html-parser";

const QuestionCard = (props) => {
	var tags = [];
	props.tags.map((tag,i) =>  
		tags.push(
			<li key={i}><h6>{ ReactHtmlParser(tag) }</h6></li>
		)
	); 
 
	return (
		<div className="QuestionCard" onClick={() => props.handleCardClick(props.answer_count)}>
			<h1>{ ReactHtmlParser(props.title) }</h1>
			<h3>Score: {props.score}</h3>
			<h3>Answers: {props.answer_count}</h3>
			<h3>Views: {props.view_count}</h3>
			<ul>
				{tags}
			</ul>
			<h3 className="openModalBtn">View Answers<div className="chevron" /></h3>
		</div>
	);
}

export default QuestionCard;