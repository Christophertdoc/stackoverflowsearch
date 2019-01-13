import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Answers = (props) => {

    var answers = [];
    if(props.answer_count > 0) {
        props.answers.map((answer,i) => {
            const answer_body = answer.body;
            let pr = {accepted : answer.is_accepted};
            let accepted = "";
            if (answer.is_accepted) {
                accepted = "accepted";
            }
            answers.push(
                <div className={`AnswerCard ${accepted}`} {...pr} key={i}>
                    <p>{ReactHtmlParser(answer_body)}</p>
                </div>
            );
            return 1;
        }
    )}
    
    return(
        <div className="Answers">
            <h3>Answers</h3>
            {answers.length > 0 ? answers : <h3>No answers yet</h3>}
        </div>
    )

}

export default Answers;