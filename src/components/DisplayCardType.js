import React,{Component} from 'react';
import QuestionCard from './QuestionCard';
import Modal from './Modal';


class DisplayCardType extends Component{

    constructor(props){
        super(props);
        this.state = {
            display : "question"
        };
        this.handleCardClick = this.handleCardClick.bind(this);
    }

    handleCardClick() {
        if (this.state.display === "question") {
            this.setState({display: "answer"})
        } else {
            this.setState({display: "question"})
        }
    }

    render(){
        return(
            <div className="DisplayCardType"> 
                {this.state.display === 'question' ?
                    <QuestionCard handleCardClick={this.handleCardClick} {...this.props.item}/> 
                :
                    <Modal handleCardClick={this.handleCardClick} {...this.props.item}/>
                }
            </div>
        )
    }

}

export default DisplayCardType;