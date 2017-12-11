/*
*  Name :   RandBubbleCreationButton.jsx
*  Location : /lib/Bubbles/RandBub/RandBubbleCreationButton.jsx
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: class RandBubbleCreationButton 
*/

import AbsButton from '../../../lib/uiConstruction/AbsButton';

export default class RandBubbleCreationButton extends AbsButton {
	constructor(props) {
		super(props);
	}

	bubbleButtonName() {
		return 'Random Bubble';
	}

	bubbleName() {
		return 'random';
	}

}


/*
How to use:
<RandBubbleCreationButton generate={this."function name"}/>

*/
