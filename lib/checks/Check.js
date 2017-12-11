/*
 *  Name :   BubbleDatabase.js
 *  Location : /lib/database/BubbleDatabase.js
 *  Author: Nicolò Rigato
 *  Creation Data: 2017-07-31
 *  Description: checks control made on bubble configuration 
 *  ----------------------------------------------
 */



import SimpleSchema from 'simpl-schema';



const fixed = {
	createdAt:{
		type: Date,
		label: 'Creation date'
	},
	lastEdited:{
		type: Date,
		label: 'Last edit date'
	},
	bubbleType: {
		type: String,
		label: 'Type of bubble'
	},
	roomId: {
		type: String,
		label: 'Room\'s Id'
	},
	userId:{
		type: String,
		label: 'User\'s Id'
	}
};

export default class Check {
	constructor(checkName, schema) {
		if (checkName === undefined || schema === undefined) {
			throw Error('checkName or schema are not optional argument of Check.constructor.');
		}
		this.checkName = checkName;
		const fixed2 = Object.assign({}, fixed);
		this.schema = new SimpleSchema(Object.assign(fixed2, schema));
		this.context = this.schema.namedContext('myContext');
	}

	validate(dataObj) {
		dataObj = Object.assign(dataObj);
		if (this.schema && this.context) {
			const validation = this.context.validate(dataObj);
			return {
				result: validation,
				errors: this.context.validationErrors()
			};
		} else {
			throw Error('Check.validate needs a schema to have been set. Check schema definition in constructor.');
		}
	}
}


/*
let fixedMochUp = {
    userId:'exampleid',
    roomId :'exampleid',
    bubbleType : 'exampleType',
    createdAt :  new Date(),
    lastEdited: new Date()
};
*/
