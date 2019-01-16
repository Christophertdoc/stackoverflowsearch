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
			<form className="SearchBox" onSubmit={this.onSubmit}>
				<input type="text" value={this.state.value} onChange={this.handleChange} />
				<input type="submit" value="Search"/> 
			</form>
		);
	}
}

export default SearchBox;
