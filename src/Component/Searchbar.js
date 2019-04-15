import React from 'react';

class SearchBar extends React.Component{
	state = { term: '' };

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onTermSubmit(this.state.term);
	}
		
	render(){
		return(
			<React.Fragment>
				<div className="search-bar ui segment container" style={{ marginTop: '20px' }}>
					<form className="ui form" onSubmit={ this.onFormSubmit }>
						<div className="field">
							<label style={{ textAlign: 'center' }}>Search YouTube videos here</label>
							<input value={ this.state.term } type="text" onChange={ e => this.setState({ term: e.target.value }) } />
						</div>
					</form>
				</div>
			</React.Fragment>
		);
	}
}

export default SearchBar;