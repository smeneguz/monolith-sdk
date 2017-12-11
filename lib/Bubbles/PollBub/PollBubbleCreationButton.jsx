/*
*  Name :   BubbleCreationButton.jsx
*  Location : /lib/Bubbles/PollBub/BubbleCreationButton.jsx
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: Creation Button Poll Bubble
*/


import AbsButton from '../../../lib/uiConstruction/AbsButton';

export default class PollBubbleCreationButton extends AbsButton {
	constructor(props) {
		super(props);
	}

	bubbleButtonName() {
		return 'Poll Bubble';
	}

	bubbleName() {
		return 'poll';
	}

}

/*
how to use:
<PollBubbleCreationButton generate={this."function name"}/>
*/
