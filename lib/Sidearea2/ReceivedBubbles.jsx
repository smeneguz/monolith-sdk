/*
*  Name :   ReceivedBubbles.jsx
*  Location : /lib/SideArea2/ReceivedBubbles.jsx
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: class react that shows the bubbles received
*  ----------------------------------------------

*/


import React from 'react';
import {BubbleDiscriminator} from '../uiConstruction/BubbleDiscriminator.jsx';
import '../ui/CSS/styles.css';

export default class ReceivedBubble extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.bubbles.length) {
        return (
            <div id="received_bubble">
                {this.props.bubbles.map((bubble) => {
                    return (
                        <div key={bubble._id} className="bubbleborder received-bubble">
                            {BubbleDiscriminator.useDoMakeBubbleReceiver(bubble.bubbleType, bubble)}
                        </div>
                    );
                })}
            </div>
        );
    }
    else{
        return (
            <div id="received_bubble">
                <p>You haven't received any bubble yet.</p>
            </div>
        );
    }
  }
}
