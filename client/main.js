/*
*  Name :  main.js
*  Location : /client/main.js
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: main
*/

import './sideAreaConfig';
import '../lib/uiConstruction/BubbleDiscriminator';
//import '../lib/Bubbles/WeathBub/WeathCreator';
import '../lib/Bubbles/CurrencyBub/CurrencyCreator';
import '../lib/Bubbles/ListBub/ListCreator';
import '../lib/Bubbles/PollBub/PollCreator';
import '../lib/Bubbles/RandomBub/RandCreator';
import '../lib/Bubbles/ListBub/ListCreator';
import '../lib/Bubbles/ListBub/ChecklistCreator';

import '../lib/Bubbles/HelloBubble/HelloCreator';


//import '../lib/Bubbles/TranslationBub/TranslationCreator';
import '../lib/Bubbles/HelloBubble/HelloCreator';
import './SideArea1';
import './SideArea2';


import '../lib/database/databaseInitialization';
import '../lib/Bubbles/ListBub/CheckListDb.js';

// if u wait it happens
/*
import {BubbleCollection} from '../lib/database/databaseInitialization';
setTimeout(() => {console.log(BubbleCollection.find({}).fetch())}, 10000);
*/


