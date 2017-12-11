/*
*  Name :   HelloBubbleCreationButton.jsx
*  Location : /lib/Bubbles/HelloBubble/HelloBubbleCreationButton.jsx
*  Author: Emanuele Crespan
*  Creation Data: 2017-09-05
*  Description: class HelloBubbleCreationButton 
*/


import AbsButton from '../../../lib/uiConstruction/AbsButton';

export default class RandBubbleCreationButton extends AbsButton {
	constructor(props) {
		super(props);
	}

	bubbleButtonName() {
		return 'Hello Bubble';
	}

	bubbleName() {
		return 'hello';
	}

}


/*
How to use:
<RandBubbleCreationButton generate={this."function name"}/>

*/
