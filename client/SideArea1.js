/*
*  Name :  SideArea1.js
*  Location : /client/SideArea1.js
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: SideArea1
*/


import { Template } from 'meteor/templating';
import './templateSideArea1.html';

// import {BubbleCollection} from '../lib/database/databaseInitialization';

import Sidearea1Container from '../lib/Sidearea1/SideArea1.jsx';



Template.templateSideArea1.helpers({
	Sidearea1Container() {
		return Sidearea1Container;
	}/*,
	bubbles() {
		return BubbleCollection.find({}).fetch();
	}*/
});
