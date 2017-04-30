var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

class Entry extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			year: this.props.year,
			month: this.props.month,
			day: this.props.day,
			text: this.props.text
		}
	}
	render() {
		var year = this.state.year,
			month = this.state.month,
			day = this.state.day,
			text = this.state.text;
		console.log('render Entry');

		return (
			<div className='entry'>
				<p>Date: {year} {month} {day}</p>
				<p>Text: {text}</p>
			</div>
		)
	}
}

Entry.PropTypes = {
	year: PropTypes.number.isRequired,
	month: PropTypes.number.isRequired,
	day: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired
};

Entry.defaultProps = {
	year: 1920,
	month: 2,
	day: 1,
	text: 'Diary entry'
};

module.exports = Entry;