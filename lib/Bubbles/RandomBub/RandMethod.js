/*
*  Name :  RandMethods.js
*  Location : /lib/Bubbles/RandBub/RandMethods.js
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: BubbleRandomInsert
*/


import {Meteor} from 'meteor/meteor';
import {aBubbleCollection} from '../../database/databaseInitialization.js';

Meteor.methods({
	BubbleRandomInsert(data, range) {
		console.log('bubblerandominsert');
		data.range = parseInt(range);
		data.value = Math.round(Math.floor(Math.random() * (range - 1)) + 1);
		return data;
	},
	BubbleRandomUpdate(bubbleId, range) {
		const randNum = Math.round(Math.floor(Math.random() * (range - 1)) + 1);
		console.log(randNum);
		const upProm = aBubbleCollection.updateAsync(bubbleId, {$set:{ value: randNum}});
		return upProm;
	}
});

