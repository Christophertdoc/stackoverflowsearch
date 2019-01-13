import React from 'react';
import {fetchQuestionsByTagUrl} from '../JsonFetch'


class SearchBox extends React.Component {

	constructor(props){
		super(props);
		this.state = {value : ""};
		this._handleChange = this._handleChange.bind(this);
		this._onSubmit = this._onSubmit.bind(this);
	}

	_handleChange(e){
		this.setState({
			value : e.target.value
		});
	}

	_onSubmit(e){
		e.preventDefault();
		this.props.handleSubmit(fetchQuestionsByTagUrl(this.state.value));
	}

	render(){
		return (
			<form className="SearchBox" onSubmit={this._onSubmit}>
				<input type="text" value={this.state.value} onChange={this._handleChange} />
				<input type="submit" value="Search"/> 
			</form>
		);
	}
}

export default SearchBox;
