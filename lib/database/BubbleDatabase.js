/*
 *  Name :   BubbleDatabase.js
 *  Location : /lib/database/BubbleDatabase.js
 *  Author: Nicolò Rigato
 *  Creation Data: 2017-07-31
 *  Description: operation server side on bubbles
 *  ----------------------------------------------
 */





// import {aBubbleCollection} from './databaseInitialization.js';
import {aMeteor} from '../callerInitialization.js';

export default class BubbleDatabase {
	constructor(bubbleType) {
		this.bubbleType = bubbleType;
		// BINDING:
		// this.insert = this.insert.bind(this);
		this.insertSuccess = this.insertSuccess.bind(this);
		this.insertFailure = this.insertFailure.bind(this);
		//this.update = this.update.bind(this);
		this.updateSuccess = this.updateSuccess.bind(this);
		this.updateFailure = this.updateFailure.bind(this);
		//this.remove = this.remove.bind(this);
		//this.removeSuccess = this.removeSuccess.bind(this);
		//this.removeFailure = this.removeFailure.bind(this);
	}
	insert(data, serverSideOps, serverSideOpsArgs) {
		const insPromise = aMeteor.callAsync('insertBubble', this.bubbleType, Session.get('openedRoom'), data, serverSideOps, serverSideOpsArgs);
		insPromise.then(
			(Success) => { this.insertSuccess(Success); },
			(Error) => { this.insertFailure(Error); }
		);
		return insPromise;
	}
	update(bubbleId, serverSideOps, serverSideOpsArgs) {
		const upPromise = aMeteor.callAsync('updateBubble', bubbleId, serverSideOps, serverSideOpsArgs);
		upPromise.then(
			(Success) => { this.updateSuccess(Success); },
			(Error) => { this.updateFailure(Error); }
		);
		return upPromise;
	}
	static remove(bubbleId) {
		const remPromise = aMeteor.callAsync('removeBubble', bubbleId);
		/*remPromise.then(
			(Success) => { this.removeSuccess(Success); },
			(Error) => { this.removeFailure(Error); }
		);*/
		return remPromise;
	}

	insertSuccess(result) {
		console.log(result);
	}
	insertFailure(errormsg) {
		console.log(errormsg);
	}
	updateSuccess(result) {
		console.log(result);
	}
	updateFailure(errormsg) {
		console.log(errormsg);
	}
	/*
	removeSuccess(result) {
		console.log(result);
	}
	removeFailure(errormsg) {
		console.log(errormsg);
	}*/
}

/*
SIMPLE SCHEMA:
https://github.com/aldeed/node-simple-schema

ERRORS THAT CAN BE RETURNED
reason
0 :{name: "bubbleType", type: "required"}

[ { name: 't2',
 value: 132,
 type: 'expectedType',
 dataType: 'String' },
{ name: 't3', type: 'keyNotInSchema', value: 9 }

 */
