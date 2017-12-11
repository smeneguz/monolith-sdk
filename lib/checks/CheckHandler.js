/**
 * Created by nick on 31/07/17.
 */

// import { Meteor } from 'meteor/meteor';
import Check from './Check.js';

export const CheckHandler = {
	checkMap : {},
	registerCheck(check) {
		if (check instanceof Check) {
			this.checkMap[check.checkName] = check;
		} else {
			throw Error('CheckHandler.registerCheck needs a Check derivate type as argument.');
		}
	},
	execCheck(checkName, dataObj) {
		if (this.checkMap && this.checkMap[checkName]) {
			return this.checkMap[checkName].validate(dataObj);
		} else {
			throw Error(`${ checkName } has not been registered using registerCheck.`);
		}
	}
};


/*
import Check from "./Check.js";

class CheckHandlerClass {
    constructor(){
        this.checkMap = {};
    }
    registerCheck(check){
        console.log("esecuzione di registerCheck");
        if(check instanceof Check){
            this.checkMap = {[check.checkName]: check};
        }
        else{
            throw Error("CheckHandler.registerCheck needs a Check derivate type as argument.");
        }
    }
    execCheck(checkName,dataObj) {
        if (this.checkMap && this.checkMap[checkName]) {
            return this.checkMap[checkName].validate(dataObj);
        }
        else {
            throw Error(checkName + " has not been registered using registerCheck.");
        }
    }
    execCheckOne(checkName,key,value){
        if(this.checkMap && this.checkMap[checkName]){
            return this.checkMap[checkName].validateUpdate(key,value);
        }
        else{
            throw Error(checkName + " has not been registered using registerCheckOne.");
        }
    }
}


export const  CheckHandler = new CheckHandlerClass();
 */
