/*
*  Name :   PoolMethod.js
*  Location : /lib/Bubbles/PollBub/PoolMethod.js
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: BubblePollUpdate
*/


import {Meteor} from 'meteor/meteor';
import {aBubbleCollection} from '../../database/databaseInitialization.js';



Meteor.methods({
	BubblePollUpdate(bubbleId, data) {
		const pr = aBubbleCollection.updateAsync({_id: bubbleId, 'options.id': data.id_ans}, {$inc: {'options.$.votes': 1}});
		pr.then(
			(a) => { console.log('correct update'); },
			(a) => { console.log('incorrect update'); throw new Meteor.Error('poll-update', 'Vote update failed part 1.'); }
		);
		const pr1 = aBubbleCollection.updateAsync({_id: bubbleId }, {$push: {'voted': data.user}});
		pr1.then(
			(a) => { console.log('correct update'); },
			(a) => { console.log('incorrect update'); throw new Meteor.Error('poll-update', 'Vote update failed part 2.'); }
		);
	}
});
