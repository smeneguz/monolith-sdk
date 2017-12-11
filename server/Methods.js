/*
*  Name :  Method.js
*  Location : /server/Method.js
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: method server side
*/

import {Meteor} from 'meteor/meteor';
import {BubbleCollection, aBubbleCollection} from '../lib/database/databaseInitialization.js';
import {CheckHandler} from '../lib/checks/CheckHandler.js';
//import Check from "../imports/lib/checks/Check";


// throw new Meteor.Error("logged-out", "The user must be logged in to post a comment.");

Meteor.methods({
	insertBubble(bubbleType, roomId, data, funDataEdit, funDataEditArgs) {
		if (funDataEdit) {
			data = Meteor.call(funDataEdit, data, funDataEditArgs);
		}
		data.bubbleType = bubbleType;
		data.userId = this.userId;
		data.roomId = roomId;
		data.createdAt = new Date();
		data.lastEdited = new Date();
		const validation = CheckHandler.execCheck(bubbleType, data);
		if (!validation.result) {
			console.log(validation.errors);
			let errmsg = '';
			errmsg = validation.errors;
			throw new Meteor.Error('validation failed', errmsg);
		}
		//write to db
		const insPromise = aBubbleCollection.insertAsync(data);
		insPromise.then(
			(result) => { console.log(`Insertion of ${ result } succeded`); },
			(error) => { throw new Meteor.Error('insertion failed', error); }
		);
		return true;
	},
	updateBubble(bubbleId, funDataEdit, funDataEditArgs) { 
		const edit1 = Meteor.call(funDataEdit, bubbleId, funDataEditArgs);
		/*
		if (modifier.$set !== undefined) {
			let verify = 0;
			const bId = BubbleCollection.findOne({'_id' : bubbleId});
			verify = CheckHandler.execCheckUpdate(bId.bubbleType, modifier);
			//console.log(verify);
			if (!verify.result) {
				throw new Meteor.Error('update-invalid', `data does not validate in update of ${ bubbleId }`);
			}
		}
		console.log(modifier);
		const edit1Promise = aBubbleCollection.updateAsync(bubbleId, modifier);*/
		if (!edit1) {
			throw new Meteor.Error('update-error', `Update of bubble ${ bubbleId } failed.`);
		}
		const edit2Promise = aBubbleCollection.updateAsync(bubbleId, {$set :{lastEdited : new Date()}});
		edit2Promise.then(
			(result) => { console.log('last edit updated successfully'); },
			(error) => { throw new Meteor.Error('update-error', `Update of lastedit of bubble ${ bubbleId } failed.${ error }`); }
		);
		return true;
	},
	removeBubble(bubbleId) {
		const removePromise = aBubbleCollection.removeAsync(bubbleId);
		removePromise.then(
			(result) => { console.log(`Removal of ${ result } succeded`); },
			(errormsg) => {
				throw new Meteor.Error('remove-error', 'Remove of bubble from database failed.');
			});
		return true;
	}
});



/*import { Meteor } from "meteor/meteor";
import {aBubbleCollection} from "../imports/lib/database/databaseInitialization.js";
import {CheckHandler} from "../imports/lib/CheckHandler/CheckHandler.js";

// probabilmente è opportuno cambiare il secondo membro di tutti i meteor error in error senza nessuna frase

Meteor.Meteor.methods({
  insertBubble:function(bubbleType, data){
    let checkRes = CheckHandler.execCheck(bubbleType,data);
    if(!checkRes.result){
      throw new Meteor.Error("validation-failed-ins","Validation failed " + checkRes.errors);
    }
    else{
      data = {
        userId: Meteor.userId(),
        createdAt :  new Date(),
        lastEdited: new Date()
      };
      let insPromise = aBubbleCollection.insertAsync(data);
      insPromise.then(
        (result) => {console.log("Successfull insertion of " + result + ".")},
        (error) => {throw new Meteor.Error("insert-failed", "Database insertion failed: " + error);}
      );
    }
  },
  updateBubble:function(bubbleId, modifier){
    let checkRes = CheckHandler.execCheck(bubbleId, modifier);
    if(!checkRes.result){
      throw new Meteor.Error("validation-failed-upd","Validation failed: " + checkRes.errors);
    }
    else{
      let upPromise = aBubbleCollection.updateAsync(data);
      upPromise.then(
        (result) => {console.log("Successfull update of " + result + ".");},
        (error) => {throw new Meteor.Error("update-failed", "Database update failed: " + error);}
      ).
      then((result) => {
        let upDateProm = aBubbleCollection.updateAsync(result, {$set: {lastEdited: new Date()}});
        upDateProm.catch((error) => {throw new Meteor.Error("time-up-error","Failed update of last edit of bubble.")});
      });
    }
  },
  removeBubble:function(bubbleId){
    let remPromise = aBubbleCollection.removeAsync(bubbleId);
    remPromise.then(
      (success) => {console.log("Bubble " + success + "successfully removed.")},
      (error) => {throw new Meteor.Error("remove-failed", "Failed to remove bubble." + error);}
    );
  }
});
*/
