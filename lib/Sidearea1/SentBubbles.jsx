/*
*  Name :   SentBubbles.jsx
*  Location : /lib/Sidearea1/SentBubbles.jsx
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: send bubble button


*  ----------------------------------------------

*/

import React, {Component} from 'react';
import {BubbleDiscriminator} from '../uiConstruction/BubbleDiscriminator.jsx';
import PushButton from '../ui/SingleComponents/PushButton/PushButton.jsx';
import BubbleDatabase from '../database/BubbleDatabase.js';

export default class SentBubbles extends React.Component {
    constructor(props) {
        super(props);
    }

    static removeBubble (id){
        return BubbleDatabase.remove(id);
    }

    render() {
        if(this.props.bubbles.length) {
            return (
                <div id="sent_bubble_menu">
                    {this.props.bubbles.map((bubble) => {
                        return (
                            <div key={bubble._id} className="sent-bubble bubbleborder">
                                <PushButton argument={bubble._id} classes="btn btn-danger btn-xs deletebutton" buttonName="&times;" handleClick={SentBubbles.removeBubble} />
                                {BubbleDiscriminator.useDoMakeBubbleSender(bubble.bubbleType, bubble)}
                            </div>
                        );
                    })}
                </div>
            );
        }
        else{
            return (
                <div id="bubble_button_menu">
                    <p>You haven't sent any bubble yet.</p>
                </div>
            );
        }
    }
}


/*
createConfigArea function to create config menu
 */
