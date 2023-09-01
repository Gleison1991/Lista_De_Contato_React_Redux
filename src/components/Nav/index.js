import React from 'react';
import { FaHome, FaPhone, FaUser } from 'react-icons/fa';
import {Link} from 'react-router-dom';

import { NavBar } from './styled';

export default function Nav() {

	return (
		<NavBar>
			<a href="/">React Contact List App</a>
		</NavBar>
	);
}
