/*
*  Name :  CurrencyBubbleCreationButton.jsx
*  Location : /lib/Bubbles/CurrencyBub/CurrencyBubbleCreationButton.jsx
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: class CurrencyBubbleCreationButton
*/





import AbsButton from '../../../lib/uiConstruction/AbsButton.jsx';


export default class CurrencyBubbleCreationButton extends AbsButton {
	constructor(props) {
		super(props);
	}

	bubbleName() {
		return 'currency';
	}

	bubbleButtonName() {
		return 'Currency Bubble';
	}

}
