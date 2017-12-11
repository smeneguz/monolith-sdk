/*
*  Name :   ListDb.js
*  Location : /lib/Bubbles/ListBub/ListDb.js
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: {ListDb}
*/


import BubbleDatabase from '../../database/BubbleDatabase';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Promise from 'bluebird';

export const ListDb = new BubbleDatabase('list');

/*
export const BubbleCheckList = new Mongo.Collection('BubbleCheckList');
export const aBubbleCheckList = Promise.promisifyAll(BubbleCheckList);
*/
