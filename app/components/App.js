var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Diary = require('./Diary');
var FiveYear = require('./FiveYear');

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Nav />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/diary' component={Diary} />
						<Route path='/5-year' component={FiveYear} />
						<Route render={function() {
							return <p>Not Found</p>
						}} />
					</Switch>
				</div>
			</Router>
		)
	}
}

module.exports = App;