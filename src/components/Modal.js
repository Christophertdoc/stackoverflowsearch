import React from 'react';
import Answers from './Answers'
import ReactHtmlParser from 'react-html-parser';


const Modal = (props) => {
    return (
        <div className="Modal"> 
            <h1>{props.title}</h1>
            <button onClick={() => {props.handleCardClick(props.answer_count)}}>X</button>
            <div className="content">
                <p>{ReactHtmlParser(props.body)}</p>
                <Answers answer_count={props.answer_count} answers={props.answers}/>
            </div>
        </div>
    )
}

export default Modal;