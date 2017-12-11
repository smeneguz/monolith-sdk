/*
*  Name :   CurrencyCheck.js
*  Location : /lib/Bubbles/CurrencyBub/CurrencyCheck.js
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: currSchem
*/




import Check from '../../checks/Check';
import {CheckHandler} from '../../checks/CheckHandler.js';


const currSchema = {
	curr_in:{
		label: 'Currency of input',
		type: String
	},
	curr_out:{
		label: 'Currency of output',
		type: String
	},
	value_in:{
		type: Number,
		label: 'Value to be converted'
	},
	value_out:{
		type: Number,
		label: 'Value converted'
	}
};




export const CurrencyCheck = new Check('currency', currSchema);
CheckHandler.registerCheck(CurrencyCheck);
