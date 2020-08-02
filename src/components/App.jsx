import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';

import Home from './Home';
import TIY from './Tiy';
import Illustrations from './Illustrations';
import About from './About';
import Navbar from './Navbar';

const App = () => {
	return(
		<>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/illustration' component={Illustrations} />
				<Route exact path='/illustrations' component={Illustrations} />
				<Route exact path='/diy' component={TIY} />
				<Route exact path='/tryityourself' component={TIY} />
				<Redirect to='/' />
			</Switch>
		</>	
	);
};

export default App;
