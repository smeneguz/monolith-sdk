/*
*  Name :   callerinitialization.js
*  Location : /lib/uiConstruction/callerinitialization.js
*  Author: Nicolò Rigato
*  Creation Data: 2017-07-18
*  Description: defines what type of bubble it is
*  ----------------------------------------------
*/



import Promise from "bluebird";
import { Meteor } from "meteor/meteor";


export const aMeteor = Promise.promisifyAll(Meteor);
