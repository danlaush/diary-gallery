var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;
var year1940 = require('../data/1940');

// class PlayerInput extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			username: ''
// 		}

// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}
// 	handleChange(event) {
// 		var value = event.target.value;
// 		this.setState(function() {
// 			return {
// 				username: value
// 			}
// 		})
// 	}
// 	handleSubmit(event) {
// 		event.preventDefault();

// 		this.props.onSubmit(
// 			this.props.id,
// 			this.state.username	
// 		)
// 	}
// 	render() {
// 		return (
// 			<form className='column' onSubmit={this.handleSubmit}>
// 				<label className='header' htmlFor='username'>
// 					{this.props.label}
// 				</label>
// 				<input 
// 					id='username'
// 					placeholder='github username'
// 					type='text'
// 					autoComplete='off'
// 					value={this.state.username}
// 					onChange={this.handleChange}
// 					/>
// 				<button
// 					className='button'
// 					type='submit'
// 					disabled={!this.state.username}
// 				>
// 					Submit 
// 				</button>
// 			</form>
// 		)
// 	}
// }

// PlayerInput.propTypes = {
// 	id: PropTypes.string.isRequired,
// 	label: PropTypes.string.isRequired,
// 	onSubmit: PropTypes.func.isRequired
// };

class Diary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playerOneName: '',
			playerTwoName: '',
			playerOneImage: null,
			playerTwoImage: null
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	handleSubmit(id, username) {

		this.setState(function() {
			var newState = {};
			newState[id + 'Name'] = username;
			newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
			return newState;
		});
	}

	handleReset(id) {
		this.setState(function() {
			var newState = {};
			newState[id + 'Name'] = '';
			newState[id + 'Image'] = null;
			return newState;
		});
	}

	render() {
		var year1940obj = JSON.parse(year1940);
		return(
			<div>

				<div className='row'>
					Diary component
				</div>
				{JSON.stringify(year1940, null, 2)}
				{year1940obj.map((month) => {
					return(
						// <p>{JSON.stringify(a, null, 2)}</p>
						{month}
					);
				})}
			</div>
		)
	}
}

module.exports = Diary;