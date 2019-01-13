import React,{Component} from 'react';
import QuestionCard from './QuestionCard';
import FullCard from './FullCard';
import glamorous from 'glamorous';

const Div = glamorous.div({
    backgroundColor : '#fff',
    margin : '5px',
    ':hover' : {
        backgroundColor : '#eeeeee'
    }
})

class Card extends Component{
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
            <Div>
                {this.state.display === 'question' ?
                    <QuestionCard handleCardClick={this.handleCardClick} {...this.props.item}/> 
                :
                    <FullCard handleCardClick={this.handleCardClick} {...this.props.item}/>
                }
            </Div>
        )
    }

}

export default Card;