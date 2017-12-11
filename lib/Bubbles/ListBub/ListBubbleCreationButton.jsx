/*
*  Name :   ListBubbleCreationButton.jsx
*  Location : /lib/Bubbles/ListBub/ListBubbleCreationButton.jsx
*  Author: Emanuele Crespan
*  Creation Data: 2017-06-27
*  Description: class ListBubbleCreationButton
*/


import AbsButton from '../../../lib/uiConstruction/AbsButton';
import {BubbleDiscriminator} from '../../uiConstruction/BubbleDiscriminator';


export default class ListBubbleCreationButton extends AbsButton {
	constructor(props) {
		super(props);
		this.handleSecondButton = this.handleSecondButton.bind(this);
	}

	bubbleButtonName() {
		return 'List Bubble';
	}

	bubbleName() {
		return 'list';
	}

	secondAreaName() {
	    return 'checklist';
	}

}


/*
how to use:

<ListBubbleCreationButton generate={this."function name"}/>
*/
