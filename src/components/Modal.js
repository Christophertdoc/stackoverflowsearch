import React from 'react';
import ReactHtmlParser from "react-html-parser";
import moment from 'moment'; 


const Modal = (props) => {

    const Answers = (props) => {
        var answers = [];
        if(props.answer_count > 0) {
            props.answers.map((answer,i) => {
                const answer_body = answer.body;
                let accepted = "";
                if (answer.is_accepted) {
                    accepted = "accepted";
                }
                answers.push(
                    <div className={`AnswerCard ${accepted}`} key={i}>
                        <h4>{moment.unix(answer.creation_date).format('dddd, MMMM Do, YYYY h:mm A')}</h4>
                        <p>{ReactHtmlParser(answer_body)}</p>
                    </div>
                );
            }
        )}
        return(
            <div className="Answers">
                <h3>Answers</h3>
                {answers.length > 0 ? answers : <h3>No answers yet</h3>}
            </div>
        )
    }

    return (
        <div className="Modal"> 
            <h1>{ ReactHtmlParser(props.title) }</h1> 
            <h3>{ moment.unix(props.creation_date).format('dddd, MMMM Do, YYYY h:mm A') }</h3> 
            <button onClick={() => {props.handleCardClick(props.answer_count)}}>X</button>
            <div className="content">
                <p>{ ReactHtmlParser(props.body) }</p>  
                <Answers answer_count={props.answer_count} answers={props.answers}/>
            </div>
        </div>
    )
}

export default Modal;