import React, {Component} from 'react'


class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {textValue: '', selectValue: ''};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
	}

	handleTextChange(event) {
	  this.setState({textValue: event.target.value});
	}

	handleSelectChange(event) {
	  this.setState({selectValue: event.target.value});
	}



	handleSubmit(event) {
	  alert('A name was submitted: ' + this.state.value);
	  event.preventDefault();
	}

	render() {
		return (
			<form>
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