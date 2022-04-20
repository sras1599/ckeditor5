/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import FileRepository from '@ckeditor/ckeditor5-upload/src/filerepository';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';

export default class InlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
InlineEditor.builtinPlugins = [
	Alignment,
	Autoformat,
	Base64UploadAdapter,
	BlockQuote,
	Bold,
	CKFinder,
	CloudServices,
	EasyImage,
	Essentials,
	FileRepository,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	Heading,
	Highlight,
	HorizontalLine,
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Italic,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableCellProperties,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Underline,
	UploadAdapter,
];

// Editor configuration.
InlineEditor.defaultConfig = {
	fontFamily: {
		options: [
			'Helvetica',
			'Arial',
			'Courier-New',
			'Georgia',
			'Lucinda-Sans-Unicode',
			'Tahoma',
			'Times-New-Roman',
			'Verdana',
			'Tangerine',
			'Langar',
			'AlloyInk',
			'ProPixie',
			'Excluded',
			'Excluded-Italic',
			'Antara',
			'AttackGraffiti',
			'Neoneon',
			'Azonix',
			'Spongeboy',
			'OldeEnglish',
			'Rondal',
			'AssassinNinja',
			'Mandalorian',
			'Sundiary',
			'AntiCorona',
			'Facon',
			'WaltDisney',
			'Hacked',
			'Raleway',
			'Edition',
			'GreatVibes',
			'Chomsky',
			'Adistro',
			'RobotoSlab',
			'Fontania',
			'AmneSans',
			'Trench',
			'Goudy',
			'Desyrel',
			'QarmicSans',
			'CabinSketch',
			'StarJedi',
			'Amali',
			'Hangyaku',
			'GoldenRanger',
			'PrintClearly',
			'Oswald',
			'Oswald-Stencil',
			'Oswald-Bold',
			'Sofia',
			'Enigma',
			'Pecita',
			'Capsuula',
			'spinCycle',
			'spinCycle3D',
		],
	},
	fontSize: {
		options: [
			'8',
			'9',
			'10',
			'11',
			'12',
			'14',
			'16',
			'18',
			'20',
			'22',
			'24',
			'26',
			'28',
			'36',
			'48',
			'60',
		],
		supportAllValues: true,
	},
	image: {
		styles: ['alignLeft', 'alignCenter', 'alignRight'],
		resizeOptions: [
			{
				name: 'imageResize:original',
				label: 'Original',
				value: null,
			},
			{
				name: 'imageResize:50',
				label: '50%',
				value: '50',
			},
			{
				name: 'imageResize:75',
				label: '75%',
				value: '75',
			},
		],
		toolbar: [
			'imageStyle:alignLeft',
			'imageStyle:alignCenter',
			'imageStyle:alignRight',
			'|',
			'imageResize',
			'|',
			'imageTextAlternative',
		],
	},
	list: {
		properties: {
			reversed: false,
			startIndex: true,
			styles: false,
		},
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableCellProperties',
			'tableProperties',
		],
	},
	toolbar: {
		items: [
			'bold',
			'|',
			'heading',
			'|',
			'alignment',
			'|',
			'italic',
			'blockQuote',
			'imageUpload',
			'indent',
			'outdent',
			'link',
			'numberedList',
			'bulletedList',
			'insertTable',
			'fontBackgroundColor',
			'fontColor',
			'fontSize',
			'fontFamily',
			'highlight',
			'horizontalLine',
			'underline',
		],
	},
	ui: {
		viewportOffset: {
			top: 65,
		},
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en',
};

InlineEditor.coverPageConfig = {
	fontFamily: InlineEditor.defaultConfig.fontFamily,
	fontSize: InlineEditor.defaultConfig.fontSize,
	language: InlineEditor.defaultConfig.language,
	plugins: [
		Alignment,
		Autoformat,
		Bold,
		Essentials,
		FontBackgroundColor,
		FontColor,
		FontFamily,
		FontSize,
		Heading,
		Highlight,
		Paragraph,
		Underline,
	],
	toolbar: {
		items: [
			'bold',
			'|',
			'heading',
			'|',
			'alignment',
			'|',
			'fontBackgroundColor',
			'fontColor',
			'fontSize',
			'fontFamily',
			'highlight',
			'underline',
		],
	},
	ui: InlineEditor.defaultConfig.ui,
};
