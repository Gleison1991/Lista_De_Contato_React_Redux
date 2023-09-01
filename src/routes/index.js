import React from 'react';
import { Switch, Route} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import Error from '../pages/Error';
import AddContact from '../pages/AddContact';
import EditContact from '../pages/EditContact';

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/add" component={AddContact} />
			<Route path="/edit/:id"> 
				<EditContact />
			</Route>
			<Route path="*" component={Error} />
		</Switch>
	);
}
