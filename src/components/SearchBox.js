import React from 'react';
import {fetchQuestionsByTagUrl} from '../JsonFetch'


class SearchBox extends React.Component {

	constructor(props){
		super(props);
		this.state = {value : ""};
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	handleChange(e){
		this.setState({
			value : e.target.value
		});
	}

	onSubmit(e){
		e.preventDefault();
		this.props.handleSubmit(fetchQuestionsByTagUrl(this.state.value));
	}

	render(){
		return (
			<div className="SearchBox"> 
				<h1>Search Stack Overflow</h1>
				<h4>Go ahead! Search for an answer.</h4>
				<form onSubmit={this.onSubmit}> 
					<input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search" />
					<svg onClick={this.onSubmit} focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18"><path fill="#000" fillRule="nonzero" d="M17.896 17.101l-5.995-5.994A6.721 6.721 0 0 0 13.5 6.75a6.75 6.75 0 1 0-6.75 6.75c1.661 0 3.18-.603 4.356-1.598l5.995 5.995.795-.796zM6.75 12.375A5.63 5.63 0 0 1 1.125 6.75 5.63 5.63 0 0 1 6.75 1.125a5.63 5.63 0 0 1 5.625 5.625 5.63 5.63 0 0 1-5.625 5.625z"></path></svg>
				</form>
			</div>
		);
	}
}

export default SearchBox;
