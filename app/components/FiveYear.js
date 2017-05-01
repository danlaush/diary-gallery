var React = require('react');

function FiveYear(props) {
	return(
		<div className='five-year container'>
			<div className='five-year__image'>
				<img src='assets/jpg/01/02/20.jpg' />
			</div>
			<div className='five-year__text'>
				<div>
					<h1>The 5-Year Diary</h1>
					<p>One of the challenges of working with these diaries is that each page contains entries from 5 different years.</p>
				</div>
			</div>
		</div>
	)
}

module.exports = FiveYear;