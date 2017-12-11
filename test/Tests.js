/*
*  Name : Test.js
Location : /test/Tests.js
*  Author: Federica Schifano
*  Author: Tomas Mali
*  Creation Date: 2017-07-24
*  Description: Tests
*/


import React from 'react';
import {shallow,mount} from 'enzyme';
import CheckBoxList from '../SingleComponents/CheckBoxList/CheckBoxList';
import CheckButton from '../SingleComponents/CheckButton/CheckButton';
import ComboBox from '../SingleComponents/ComboBox/ComboBox';
import Image from '../SingleComponents/Image/Image';
import ImageButton from '../SingleComponents/ImageButton/ImageButton';
import LineEdit from '../SingleComponents/LineEdit/LineEdit';
import LineEditPushButton from '../SingleComponents/LineEditPushButton/LineEditPushButton';
import PushButton from '../SingleComponents/PushButton/PushButton';
import RadioButtonGroup from '../SingleComponents/RadioButtonGroup/RadioButtonGroup';
import TextAreaButton from '../SingleComponents/TextAreaButton/TextAreaButton';
import CheckBoxList from '../componenti/CheckBoxList';
import ComboBox from '../componenti/ComboBox';
import CheckButton from '../componenti/CheckButton';
import Image from '../componenti/Image';
import ImageButton from '../componenti/ImageButton';
import LineEdit from '../componenti/LineEdit';
import LineEditComboBox from '../componenti/LineEditComboBox';
import LineEditPushButton from '../componenti/LineEditPushButton';
import PushButton from '../componenti/PushButton';
import RadioButtonGroup from '../componenti/RadioButtonGroup';
import TextAreaButton from '../componenti/TextAreaButton';
import TextAreaComboBox from '../componenti/TextAreaComboBox';



it('tests that the number of options present in the CheckBoxList component is set correctly', () => {

    var opt=[{id: 1, value: 'first'},{id: 2, value: 'second'},{id: 3, value: 'third'}];
    const checkboxlist = mount (<CheckBoxList options={opt} />);
    expect(checkboxlist.find('input').length).toEqual(3);
});



let t;

function fun(val){
    t=val[2];

}

it('tests that a CheckButton component is properly changed from "unchecked" to "clicked" and vice versa', () => {
    const checkButton = mount(<CheckButton id="prova" getCheck={fun} value="Prova"/>);

    checkButton.find('input').simulate('change' ,{target: {checked:true}});
    expect(t).toEqual(true);
    checkButton.find('input').simulate('change' ,{target: {checked:false}});
    expect(t).toEqual(false);
});

it('tests that the selected label has been correctly associated with a CheckButton component', () => {

    const checkButton = shallow(<CheckButton id="prova" value="Prova"/>);

    expect(checkButton.text()).toEqual('Prova');

});



it('tests that the options has been correctly set up in the ComoBox component', () => {

    const combo = mount(<ComboBox options={["a","b","c"]}/>);

    expect(combo.text()).toEqual('abc');
});


it('tests that the options has been correctly set up in the ComoBox component', () => {

    let x = '';

    function useComboBoxValue(t) {
        x=t;
    }
    const combo = mount(<ComboBox options={["a","b","c"]} getSelection={useComboBoxValue}/>);

    combo.find('select').simulate('change',{target: {selectedIndex:1}});
    expect(x).toEqual('b');
});



it('tests that an image has been correctly added in an Image component', () => {

    const image = shallow(<Image src="test.png"/>);

    const src = image.find('img').node.props.src;
    expect(src).toEqual('test.png');

});

it('texts that the caption in the Image component has been correctly added', () => {

    const image = shallow(<Image alt="check alt"/>);

    const alt = image.find('img').node.props.alt;
    expect(alt).toEqual('check alt');

});

it('tests that the size of the Image component has been set correctly', () => {

    const image = shallow(<Image width="10" height="5"/>);

    const w = image.find('img').node.props.width;
    const h = image.find('img').node.props.height;
    expect(w).toEqual('10');
    expect(h).toEqual('5');

});




it('tests that an ImageButton component has been added correctly', () => {

    const imagebutton = shallow(<ImageButton src="test.png"/>);

    const src = imagebutton.find('input').node.props.src;
    expect(src).toEqual('test.png');

});

it('tests that the caption has been correctly added to the ImageButton component', () => {

    const imagebutton = shallow(<ImageButton alt="check alt"/>);

    const alt = imagebutton.find('input').node.props.alt;;
    expect(alt).toEqual('check alt');

});

it('tests that the size of the ImageButton component has been set correctly', () => {

    const imagebutton = shallow(<ImageButton width="10" height="5"/>);

    const w = imagebutton.find('input').node.props.width;
    const h = imagebutton.find('input').node.props.height;
    expect(w).toEqual('10');
    expect(h).toEqual('5');

});

it('tests that the events associated to the ImageButtons has been executed at the ImageButtons  click', () =>{
    let x ='NO';
    function fun(value){
        x=value;
    }
    const imagebutton = shallow(<ImageButton id="YES" handleClick={fun}/>);
    imagebutton.find('input').simulate('click');
    expect(x).toEqual('YES');
});





it('tests that the LineEdit component passes to the parent component the text input correctly', () => {

    let x = '';

    function useLineEditValue(t) {
        x=t;
    }
    const lineedit = mount(<LineEdit updateState={useLineEditValue}/>);

    lineedit.find('input').simulate('change', {target: {value:"second"}});

    expect(x).toEqual('second');
});






it('tests that at the PushButtons click (associated to the LineEditPushButton), the LineEdit text has been passed correctly to the patent component', () =>{
    let x ='';
    function fun(value){
        x=value;
    }
    const lineEditpushButton = mount(<LineEditPushButton idle='YES' idpb='YES1' getText={fun} buttonName='ProvaNome'/>);
    lineEditpushButton.find('LineEdit').find('input').simulate('change', {target: {value:"second"}});
    lineEditpushButton.find('PushButton').simulate('click');
    expect(x).toEqual('second');
});





it('tests that the PushButton name is set correctly', () => {

    const pushButton = shallow(<PushButton argument="prova" buttonName='ProvaNome'/>);

    expect(pushButton.text()).toEqual('ProvaNome');

});



it('tests the PushButton component on the clickbutton event', () =>{
    let x ='NO';
    function fun(value){
        x=value;
    }
    const pushButton = shallow(<PushButton argument="YES"  handleClick={fun}  buttonName='ProvaNome'/>);
    pushButton.find('button').simulate('click');
    expect(x).toEqual('YES');
});




it('tests the options number correctness in the RadioButtonGroup component', () => {

    const radiobuttongroup = mount (<RadioButtonGroup options={["a","b","c"]} />);
    expect(radiobuttongroup.find('input').length).toEqual(3);
});

it('tests that the RadioButtonGroup component passes to the parent component the selected option in the correct way', () => {

    let x = '';

    function useRadioButtonValue(t) {
        x=t;
    }
    const radiobuttongroup = mount (<RadioButtonGroup options={["a","b","c"]} getValue={useRadioButtonValue}/>);

    radiobuttongroup.find('input [value="b"]').simulate('click');
    expect(x).toEqual('b');
});



it('tests that the size of the TextAreaButton component has been set correctly', () => {
    const textAreaButton = shallow(<TextAreaButton id="prova" width="45" height="55"/>);

    const w = textAreaButton.find('textarea').node.props.width;
    const h = textAreaButton.find('textarea').node.props.height;
    expect(w).toEqual('45');
    expect(h).toEqual('55');

});

it('Verify that the PushButton associated with the LineEditPushButton component passes to the parent component the correct textarea input', () =>{
    let x ='';
    function fun(value){
        x=value;
    }
    const textareaButton = mount(<TextAreaButton idta='YES' idpb='YES1' getText={fun} width="45" height="55" buttonName='ProvaNome'/>);
    textareaButton.find('textarea').simulate('change', {target: {value:"second"}});
    textareaButton.find('PushButton').simulate('click');
    expect(x).toEqual('second');
});




var expect = require('chai').expect;

describe('CheckBoxList', function () {
    it('tests that the CheckBoxList class has been instantiated correctly', function () {
        expect(
            () => {
                new CheckBoxList();
            }
        ).to.not.throw();
    });
});



var expect = require('chai').expect;

describe('CheckButton', function () {
    it('tests that the CheckButton class has been instantiated correctly', function () {
        expect(
            () => {
                new CheckButton();
            }
        ).to.not.throw();
    });
});




var expect = require('chai').expect;

describe('ComboBox', function () {
    it('tests that the ComboBox class has been instantiated correctly', function () {

        expect(
            () => {
                new ComboBox();
            }
        ).to.not.throw();
    });
});




var expect = require('chai').expect;

describe('Image', function () {
    it('tests that the Image class has been instantiated correctly', function () {

        expect(
            () => {
                new Image();
            }
        ).to.not.throw();
    });
});





var expect = require('chai').expect;

describe('ImageButton', function () {
    it('tests that the ImageButton class has been instantiated correctly', function () {

        expect(
            () => {
                new ImageButton();
            }
        ).to.not.throw();
    });
});


var expect = require('chai').expect;


describe('LineEdit', function () {
    it('tests that the LineEdit class has been instantiated correctly', function () {

        expect(
            () => {
                new LineEdit();
            }
        ).to.not.throw();
    });
});




var expect = require('chai').expect;

describe('LineEditComboBox', function () {
    it('tests that the LineEditComboBox class has been instantiated correctly', function () {

        expect(
            () => {
                new LineEditComboBox();
            }
        ).to.not.throw();
    });
});


var expect = require('chai').expect;

describe('LineEditPushButton', function () {
    it('tests that the LineEditPushButton class has been instantiated correctly', function () {

        expect(
            () => {
                new LineEditPushButton();
            }
        ).to.not.throw();
    });
});



var expect = require('chai').expect;

describe('PushButton', function () {
    it('tests that the PushButton class has been instantiated correctly', function () {

        expect(
            () => {
                new PushButton();
            }
        ).to.not.throw();
    });


});



var expect = require('chai').expect;

describe('RadioButtonGroup', function () {
    it('tests that the RadioButtonGroup class has been instantiated correctly', function () {

        expect(
            () => {
                new RadioButtonGroup();
            }
        ).to.not.throw();
    });
});


var expect = require('chai').expect;

describe('TextAreaButton', function () {
    it('tests that the TextAreaButton class has been instantiated correctly', function () {
        expect(
            () => {
                new TextAreaButton();
            }
        ).to.not.throw();
    });
});




var expect = require('chai').expect;

describe('TextAreaComboBox', function () {
    it('tests that the TextAreaComboBox class has been instantiated correctly', function () {

        expect(
            () => {
                new TextAreaComboBox();
            }
        ).to.not.throw();
    });
});
