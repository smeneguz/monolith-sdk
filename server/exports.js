
Monolith = {};

// Checks

import Check from '../lib/checks/Check';
import {CheckHandler} from '../lib/checks/CheckHandler';

Monolith.Check = {
	Check,
	CheckHandler
};



// DataBase

import BubbleDatabase from '../lib/database/BubbleDatabase';
import {aBubbleCollection} from '../lib/database/databaseInitialization';


Monolith.database = {
	bubbleDb: BubbleDatabase,
	aBubbleCollection
};


