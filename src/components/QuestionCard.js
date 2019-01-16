import React from 'react';
import ReactHtmlParser from "react-html-parser";

const QuestionCard = (props) => {
	var tags = [];
	props.tags.map((tag,i) =>
		tags.push(
			<li key={i}>{tag}</li>
		)
	); 

	return (
		<div className="QuestionCard">
			<h2 onClick={() => props.handleCardClick(props.answer_count)}>{ ReactHtmlParser(props.title) }</h2>
			<h3>Score: {props.score}</h3>
			<h3>Answers: {props.answer_count}</h3>
			<h3>Views: {props.view_count}</h3>
			<ul>
				{tags}
			</ul>
		</div>
	);
}

export default QuestionCard;