var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
	render() {
		return (
			<div className='five-year container'>
				<div className='five-year__image'>
					<Link to='/diary'>
						<img src='/assets/jpg/02/title.jpg' />
					</Link>
				</div>
				<div className='five-year__text'>
					<div>
						<h1>Gram Betts' Diary</h1>
						<p>Read the diaries of Betsy Laush</p>
						<Link className='button' to='/diary'>
							Read
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = Home;