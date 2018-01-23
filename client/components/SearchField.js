import React from 'react';
import { debounce } from 'throttle-debounce';

class SearchField extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: this.props.bindValue
		}
    this.handleInputChange = this.handleInputChange.bind(this);
		this.dispatchInputChange = debounce(200, this.dispatchInputChange.bind(this));
    this.handleSuggestClicked = this.handleSuggestClicked.bind(this);
	}

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
    	inputValue: target.value
    })
    this.dispatchInputChange(value);
  }

  dispatchInputChange(value) {
    this.props.valueChanged(value);
  }

  handleSuggestClicked(value) {
  	this.props.suggestClicked(value);
    this.setState({
    	inputValue: value
    })
  }

  createSuggestItem(i) {
		return (
			<div 
				key={i} 
				className="field__suggest-item" 
				onClick={() => this.handleSuggestClicked(this.props.bindSuggests[i].text)}>
				{ this.props.bindSuggests[i].text }
			</div>
		)  	
  }

  createSuggestsList() {
  	if(this.props.bindSuggests.length > 0 && this.props.bindSuggests.filter((item) => item.text != this.state.inputValue).length > 0) {
  		return ( 
				<div className="field__suggests">
	  			{ this.props.bindSuggests.map((suggest, i) => 
							this.createSuggestItem(i)
						)}
				</div>
			)
  	}
  }

	render() {
		return (
			<div className="field">
				<label className="field__label">
					Search query
				</label>
				<input 
					type="text" 
					name="text"
					className="field__input field__input--text" 
					value={this.state.inputValue}
					onChange={this.handleInputChange}
					/>
				{ this.createSuggestsList() }
			</div>
		)
	}
}

export default SearchField;