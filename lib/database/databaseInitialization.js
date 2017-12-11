/*
 *  Name :   BubbleDatabase.js
 *  Location : /lib/database/BubbleDatabase.js
 *  Author: Nicolò Rigato
 *  Creation Data: 2017-07-31
 *  Description: initialization database
 *  ----------------------------------------------
 */




import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Promise from 'bluebird';

export const BubbleCollection = new Mongo.Collection('BubbleCollection');
export const aBubbleCollection = Promise.promisifyAll(BubbleCollection);

/*
if (Meteor.isServer) {
	console.log('Publishing...\n\n');
	Meteor.publish(
		'BubblesPublication',
		function BubblesPublication() {
			return BubbleCollection.find({});
		}
	);
	console.log('Published...\n\n');
}
*/
if (Meteor.isServer) {
	Meteor.publish(
		'bubbles',
		function BubblesPublication(roomId) {
			return BubbleCollection.find({roomId: {$eq: roomId}});
		});
}

/*
if (Meteor.isClient) {
	Meteor.subscribe('bubbles', Session.get('openedRoom'));
}
*/
