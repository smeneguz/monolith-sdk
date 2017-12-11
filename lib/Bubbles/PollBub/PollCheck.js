/*
*  Name :   PoolCheck.js
*  Location : /lib/Bubbles/PollBub/PoolCheck.js
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: pollSchema
*/

import Check from '../../checks/Check';
import {CheckHandler} from '../../checks/CheckHandler.js';


const pollSchema = {
	title: {
		type: String,
		label: 'Title of poll'
	},
	options: {
		type: Array,
		label: 'List of options with vote result',
		minCount: 2
	},
	'options.$': {
		type: Object
	},
	'options.$.id': {
		type: Number
	},
	'options.$.val': {
		type: String
	},
	'options.$.votes': {
		type: Number
	},
	voted:{
		type: Array
	},
	'voted.$': {
		type: String
	}
};




export const PollCheck = new Check('poll', pollSchema);
CheckHandler.registerCheck(PollCheck);
