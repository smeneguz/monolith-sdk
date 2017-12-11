/*
*  Name :  HelloCheck.js
*  Location : /lib/Bubbles/HelloBubble/HelloCheck.js
*  Author: Emanuele Crespan
*  Creation Data: 2017-09-05
*  Description: helloSchema 
*/


import Check from '../../checks/Check';
import {CheckHandler} from '../../checks/CheckHandler.js';

const helloSchema = {
	value:{
		type: String
	}
};




export const HelloCheck = new Check('hello', helloSchema);
CheckHandler.registerCheck(HelloCheck);
