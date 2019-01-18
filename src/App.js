import React, { Component } from 'react';
import './index.scss';
import SearchBox from './components/SearchBox';
import Results from './components/Results'

class App extends Component {
	constructor(props){
		super(props);
		this.state= {
			sfoJson : null 
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateJsonState = this.updateJsonState.bind(this);
	}

	updateJsonState(json){
		this.setState({sfoJson : json}); 
	}

	handleSubmit(url){
		fetch(url).then(response => response.json()).then(json => this.updateJsonState(json));
	}

	render() {
		const {sfoJson} = this.state;
		return (
			<div className="App">
				<div className="left">
					<SearchBox handleSubmit={this.handleSubmit}/>
				</div>
				<div className="right">
					<h2>Results:</h2>
					<div className="dividerLine" />
					<div className="scrollDiv">
						{this.state.sfoJson && 
							<Results handleCardClick={this.handleCardClick} items={sfoJson.items} />
						}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
