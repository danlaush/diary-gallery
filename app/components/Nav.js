var React = require('react');
var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;

function Nav () {
	return(
		<div className='container'>
			<ul className='nav'>
				<li>
					<NavLink
						exact
						activeClassName='active'
						to='/'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						activeClassName='active'
						to='/diary'>
						Diary
					</NavLink>
				</li>
				<li>
					<NavLink
						activeClassName='active'
						to='/5-year'>
						5-year Diary
					</NavLink>
				</li>
			</ul>
		</div>
	)
}

module.exports = Nav;