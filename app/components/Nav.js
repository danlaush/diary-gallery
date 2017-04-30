var React = require('react');
var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;

function Nav () {
	return(
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
					to='/entry'>
					Entry
				</NavLink>
			</li>
		</ul>
	)
}

module.exports = Nav;