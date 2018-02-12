import React, {Component} from 'react'


class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textValue: '', 
			selectValue: 'GET', 
			displayValue: 'Waiting for Input...',
			submitToggle: false 
		};
	}

	handleTextChange = (event) => {
	  this.setState({textValue: event.target.value});
	}

	handleSelectChange = (event) => {
	  this.setState({selectValue: event.target.value});
	}

	handleSubmit = (event) => {
	  this.setState({displayValue: this.state.selectValue + ' -> ' + this.state.textValue})
	  event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<textarea rows="4" cols="50" value={this.state.displayValue}/>
				<select value={this.state.selectValue} onChange={this.handleSelectChange}>
				  <option value="GET">GET</option>
				  <option value="POST">POST</option>
				</select>
				<input type="text" value={this.state.textValue} onChange={this.handleTextChange}></input>
				<input type="submit" value="Test" />
			</form>
		);
	}
}

export default Form;