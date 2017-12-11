/*
*  Name :   ListCheck.jsx
*  Location : /lib/Bubbles/ListBub/ListCheck.jsx
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: currSchema
*/


import Check from '../../checks/Check';
import {CheckHandler} from '../../checks/CheckHandler.js';


const currSchema = {
	title:{
		label: 'Title of list',
		type: String
	},
	ops:{
		label: 'Elements of list',
		type: Array
	},
	'ops.$': {
		type: Object
	},
	'ops.$.item':{
		type: String
	},
	'ops.$.check':{
		type: Boolean
	},
	'ops.$.id':{
		type: Number
	}
};




export const ListCheck = new Check('list', currSchema);
CheckHandler.registerCheck(ListCheck);
