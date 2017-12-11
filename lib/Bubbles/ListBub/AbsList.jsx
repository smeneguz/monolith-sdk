/*
*  Name : AbsList.jsx
*  Location : /lib/Bubbles/ListBub/AbsList.jsx
*  Author: Emanuele Crespan
*  Creation Data: 2017-06-27
*  Description: class AbsList
*/


import React, { Component } from 'react';
import AbsBubbleConfig from '../../../lib/uiConstruction/AbsBubbleConfig';
import LineEdit from '../../ui/SingleComponents/LineEdit/LineEdit.jsx';
import PushButton from '../../ui/SingleComponents/PushButton/PushButton.jsx';



export default class AbsList extends AbsBubbleConfig {
	constructor(props) {
		super(props);
		this.state={ops:[], title:''};
		this.addOpt=this.addOpt.bind(this);
		this.delOpt=this.delOpt.bind(this);
		this.titleChange=this.titleChange.bind(this);
		this.optChange=this.optChange.bind(this);
	}


	addOpt(element) {
		const newOptions=this.state.ops;
		const newEl = element ? element : '';
		newOptions.push(newEl);
		this.setState({ops: newOptions});
		/*
		const id=`lopt${ this.state.op.length+1 }`;
		const m={id, value:'', check:false};
		const v=this.state.op;
		v.push(m);
		this.setState({op:v});
		this.optChange('', id);*/
	}

	delOpt(id) {
		const newOptions = this.state.ops;
		newOptions.splice(id, 1);
		this.setState({ops: newOptions});
	}

	titleChange(txt) {
		this.setState({title:txt});
	}


	optChange(text, id) {
		const newOptions = this.state.ops;
		newOptions[id] = text;
		this.setState({ops:newOptions});
	}
}
