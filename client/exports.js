MonolithUI={};

//components

import CheckBoxList from '../lib/ui/SingleComponents/CheckBoxList/CheckBoxList';
import CheckButton from '../lib/ui/SingleComponents/CheckButton/CheckButton';
import ComboBox from '../lib/ui/SingleComponents/ComboBox/ComboBox';
import Image from '../lib/ui/SingleComponents/Image/Image';
import ImageButton from '../lib/ui/SingleComponents/ImageButton/ImageButton';
import LineEdit from '../lib/ui/SingleComponents/LineEdit/LineEdit';
import LineEditComboBox from '../lib/ui/SingleComponents/LineEditComboBox/LineEditComboBox';
import PushButton from '../lib/ui/SingleComponents/PushButton/PushButton';
import RadioButtonGroup from '../lib/ui/SingleComponents/RadioButtonGroup/RadioButtonGroup';
import TextAreaButton from '../lib/ui/SingleComponents/TextAreaButton/TextAreaButton';
import TextAreaComboBox from '../lib/ui/SingleComponents/TextAreaComboBox/TextAreaComboBox';

MonolithUI.components={
	CheckBoxList,
	CheckButton,
	ComboBox,
	Image,
	ImageButton,
	LineEdit,
	LineEditComboBox,
	PushButton,
	RadioButtonGroup,
	TextAreaButton,
	TextAreaComboBox
};

//Layouts

import VerticalLayout from '../lib/ui/Layouts/VerticalLayout';
import HorizontalLayout from '../lib/ui/Layouts/HorizontalLayout';

MonolithUI.layout={
	VerticalLayout,
	HorizontalLayout
};

// UI construction

import AbsBubble from '../lib/uiConstruction/AbsBubble';
import AbsBubbleConfig from '../lib/uiConstruction/AbsBubbleConfig';
import AbsButton from '../lib/uiConstruction/AbsButton';
import BubbleCreator from '../lib/uiConstruction/BubbleCreator';
import BubbleDiscriminator from '../lib/uiConstruction/BubbleDiscriminator';


MonolithUI.uiConstruction = {
	AbsBubble,
	AbsButton,
	AbsBubbleConfig,
	BubbleCreator,
	BubbleDiscriminator
};
