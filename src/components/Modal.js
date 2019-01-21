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
                if (!accepted) {
                    answers.push(
                    <div className={`AnswerCard ${accepted}`} key={i}>
                        <h4>{moment.unix(answer.creation_date).format('MMM Do, YYYY')}</h4>
                        <div className="acceptedAnswer">Accepted Answer</div>
                        <p>{ReactHtmlParser(answer_body)}</p> 
                    </div> 
                    );
                } else {
                    answers.unshift(
                        <div className={`AnswerCard ${accepted}`} key={i}>
                            <h4>{moment.unix(answer.creation_date).format('MMM Do, YYYY')}</h4>
                            <div className="acceptedAnswer">Accepted Answer</div>
                            <p>{ReactHtmlParser(answer_body)}</p> 
                        </div> 
                    );
                }
            }
        )}
        return( 
            <div className="Answers"> 
                <h2>Answers:</h2>
                {answers.length > 0 ? answers : <h3>No answers yet</h3>}
            </div> 
        )
    }

    return ( 
        <div className="Modal">  
            <div className="modal-container"> 
                <h3 className="back" onClick={() => {props.handleCardClick(props.answer_count)}}><div className="chevron" />back</h3>
                <div className="content">
                    <div className="question">
                        <h1>{ ReactHtmlParser(props.title) }</h1> 
                        <h3>{ moment.unix(props.creation_date).format('MMM Do, YYYY') }</h3> 
                        <p>{ ReactHtmlParser(props.body) }</p>  
                    </div>
                    <Answers answer_count={props.answer_count} answers={props.answers}/>
                </div>
            </div>
        </div>
    )
}

export default Modal;