/*
*  Name :   BubbleCreator.jsx
*  Location : /lib/uiConstruction/BubbleCreator.jsx
*  Author: Nicolò Rigato
*  Creation Data: 2017-07-18
*  Description: Abstract class of generic Creation Bubble
*  ----------------------------------------------
*/



export default class BubbleCreator {
	constructor(bubbleName) {
		if (this.constructor === BubbleCreator) {
			throw new TypeError('Bubble creator cannot be istantiated');
		}
		this.bubbleName = bubbleName;
	}
	doMakeBubbleSender(props) {
		if (this.doMakeBubbleSender === BubbleCreator.prototype.doMakeBubbleSender) {
			throw new TypeError('Please override doMakeBubbleSender in BubbleCreator');
		}
	}
	doMakeBubbleReceiver(props) {
		if (this.doMakeBubbleReceiver === BubbleCreator.prototype.doMakeBubbleReceiver) {
			throw new TypeError('Please override doMakeBubbleReceiver in BubbleCreator');
		}
	}
	doMakeConfigurationMenu() {
		if (this.doMakeConfigurationMenu === BubbleCreator.prototype.doMakeConfigurationMenu) {
			throw new TypeError('Please override doMakeConfigurationMenu in BubbleCreator');
		}
	}
	doMakeButton() {
		if (this.doMakeButton === BubbleCreator.prototype.doMakeButton) {
			throw new TypeError('Please override doMakeButton in BubbleCreator');
		}
	}
}

/*

override each method as

return (<bubbletype data=props />);

or

return React.createElement(type,props,children)

 */
