/*
*  Name :  SideArea2.js
*  Location : /client/SideArea2.js
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: SideArea2
*/


import { Template } from 'meteor/templating';
import './templateSideArea2.html';

import Sidearea2Container from '../lib/Sidearea2/SideArea2.jsx';


Template.templateSideArea2.helpers({
	Sidearea2Container() {
		return Sidearea2Container;
	}
});
