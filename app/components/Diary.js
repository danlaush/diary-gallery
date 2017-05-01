var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;
var api = require('../utils/api.js');
import '../utils/dateExtend';

class Diary extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	playerOneName: '',
		// 	playerTwoName: '',
		// 	playerOneImage: null,
		// 	playerTwoImage: null
		// }
		this.state = { 
			year: 1943,
			yearData: {
				"01": {
					"01": "Lorem ipsum dolor"
				}
			}
		};

		// this.handleSubmit = this.handleSubmit.bind(this);
		// this.handleReset = this.handleReset.bind(this);
	}

	componentDidMount(props) {
		api.getDiaryEntries(this.props.year)
			.then((yearData) => {
				this.setState(function() {
					return {
						yearData: yearData
					}
				})
			});
	}

	handleSubmit(id, username) {

		// this.setState(function() {
		// 	var newState = {};
		// 	newState[id + 'Name'] = username;
		// 	newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
		// 	return newState;
		// });
	}

	handleReset(id) {
		// this.setState(function() {
		// 	var newState = {};
		// 	newState[id + 'Name'] = '';
		// 	newState[id + 'Image'] = null;
		// 	return newState;
		// });
	}

	render() {
		return(
			<div className="container">

				<div className='row'>
					<h1>{this.state.year}</h1>
					<YearSelector />
				</div>
				{Object.keys(this.state.yearData).map((month, index) => {
					return(
						<div key={index}>
							<h2>{Date.prototype.monthNames[parseInt(month)]}</h2>
							
							<div className='year'>
							{Object.keys(this.state.yearData[month]).map((date, index2) => {
									return(
										<div key={index2} className='list__entry'>
											<div className='list__entry-text'><span><strong>{date}:</strong> {this.state.yearData[month][date]}</span></div>
											<div className='list__entry-image'>
												<img src={'/assets/jpg/01/'+month+'/'+date+ '.jpg'} />
											</div>
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		)
	}
}

module.exports = Diary;

function YearSelector(props) {
	return(
		<select>
			{props.years.map((year) => {
				return <option key={year} value={year}>{year}</option>
			})}
		</select>
	)
}

YearSelector.PropTypes = {
	years: PropTypes.array.isRequired
}

YearSelector.defaultProps = {
	years: [1940, 1942, 1943, 1944]
}

// {Object.keys(days).map((text, day) => {
// 									return(
// 										<li key={day}>
// 											{text}
// 										</li>
// 									);
// 								})}

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