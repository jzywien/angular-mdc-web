function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{iDXl:function(t,e,o){"use strict";o.r(e);var n,b,c,i,d,a=o("d2mR"),s=o("tyNb"),l=o("leug"),r=o("fXoL"),u=o("5l+6"),m=o("LuDt"),R=o("9UYg"),Q=o("dkiD"),x=o("o085"),h=((b=function t(){_classCallCheck(this,t)}).\u0275fac=function(t){return new(t||b)},b.\u0275cmp=r.Fb({type:b,selectors:[["ng-component"]],decls:74,vars:0,consts:[[1,"docs-api"],["mdcHeadline6",""],[1,"markdown-code"],["mdcSubtitle2",""]],template:function(t,e){1&t&&(r.Rb(0,"div",0),r.Rb(1,"h3",1),r.xc(2,"MdcButton"),r.Qb(),r.Rb(3,"p"),r.xc(4," Selector: "),r.Rb(5,"span",2),r.xc(6,"button[mdc-button]"),r.Qb(),r.Rb(7,"span",2),r.xc(8,"a[mdc-button]"),r.Qb(),r.Qb(),r.xc(9," Exported as: "),r.Rb(10,"span",2),r.xc(11,"mdcButton"),r.Qb(),r.Rb(12,"h4",3),r.xc(13,"Properties"),r.Qb(),r.Rb(14,"table"),r.Rb(15,"thead"),r.Rb(16,"tr"),r.Rb(17,"th"),r.xc(18,"Name"),r.Qb(),r.Rb(19,"th"),r.xc(20,"Description"),r.Qb(),r.Qb(),r.Qb(),r.Rb(21,"tbody"),r.Rb(22,"tr"),r.Rb(23,"td"),r.xc(24,"raised: boolean"),r.Qb(),r.Rb(25,"td"),r.xc(26,"A contained button that is elevated upon the surface."),r.Qb(),r.Qb(),r.Rb(27,"tr"),r.Rb(28,"td"),r.xc(29,"unelevated: boolean"),r.Qb(),r.Rb(30,"td"),r.xc(31,"A contained button that is flush with the surface."),r.Qb(),r.Qb(),r.Rb(32,"tr"),r.Rb(33,"td"),r.xc(34,"outlined: boolean"),r.Qb(),r.Rb(35,"td"),r.xc(36,"A contained button that is flush with the surface and has a visible border."),r.Qb(),r.Qb(),r.Rb(37,"tr"),r.Rb(38,"td"),r.xc(39,"disabled: boolean"),r.Qb(),r.Rb(40,"td"),r.xc(41,"Disables the button."),r.Qb(),r.Qb(),r.Rb(42,"tr"),r.Rb(43,"td"),r.xc(44,"label: string"),r.Qb(),r.Rb(45,"td"),r.xc(46,"Indicates the element containing the button's text label."),r.Qb(),r.Qb(),r.Rb(47,"tr"),r.Rb(48,"td"),r.xc(49,"touch: boolean"),r.Qb(),r.Rb(50,"td"),r.xc(51,"Set the component touch target to 48 x 48 px."),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(52,"h4",3),r.xc(53,"Methods"),r.Qb(),r.Rb(54,"table"),r.Rb(55,"tbody"),r.Rb(56,"tr"),r.Rb(57,"td"),r.xc(58,"focus()"),r.Qb(),r.Rb(59,"td"),r.xc(60,"Focuses the button."),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(61,"div",0),r.Rb(62,"h3",1),r.xc(63,"MdcButtonLabel"),r.Qb(),r.xc(64," Optional. Required for the trailing icon to be styled appropriately. "),r.Rb(65,"p"),r.xc(66," Selector: "),r.Rb(67,"span",2),r.xc(68,"mdc-button-label"),r.Qb(),r.Rb(69,"span",2),r.xc(70,"[mdcButtonLabel]"),r.Qb(),r.Qb(),r.xc(71," Exported as: "),r.Rb(72,"span",2),r.xc(73,"mdcButtonLabel"),r.Qb(),r.Qb())},directives:[u.i,u.l],encapsulation:2}),b),p=((n=function t(){_classCallCheck(this,t)}).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=r.Fb({type:n,selectors:[["ng-component"]],decls:151,vars:0,consts:[[1,"docs-api"],["mdcSubtitle2",""]],template:function(t,e){1&t&&(r.Rb(0,"div",0),r.Rb(1,"h4",1),r.xc(2,"Basic Sass Mixins"),r.Qb(),r.Rb(3,"p"),r.xc(4,"These mixins will override the color of the container, ink, outline or ripple. It is up to you to ensure your button meets accessibility standards."),r.Qb(),r.Rb(5,"table"),r.Rb(6,"thead"),r.Rb(7,"tr"),r.Rb(8,"th"),r.xc(9,"Mixin"),r.Qb(),r.Rb(10,"th"),r.xc(11,"Description"),r.Qb(),r.Qb(),r.Qb(),r.Rb(12,"tbody"),r.Rb(13,"tr"),r.Rb(14,"td"),r.Rb(15,"code"),r.xc(16,"filled-accessible($container-fill-color)"),r.Qb(),r.Qb(),r.Rb(17,"td"),r.xc(18,"Sets the container fill color for a contained ("),r.Rb(19,"em"),r.xc(20,"raised"),r.Qb(),r.xc(21," or "),r.Rb(22,"em"),r.xc(23,"unelevated"),r.Qb(),r.xc(24,") button, and updates the button's ink, icon, and ripple colors to meet accessibility standards"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(25,"h4",1),r.xc(26,"Advanced Sass Mixins"),r.Qb(),r.Rb(27,"p"),r.xc(28,"These mixins will override the color of the container, ink, outline or ripple. It is up to you to ensure your button meets accessibility standards."),r.Qb(),r.Rb(29,"table"),r.Rb(30,"thead"),r.Rb(31,"tr"),r.Rb(32,"th"),r.xc(33,"Mixin"),r.Qb(),r.Rb(34,"th"),r.xc(35,"Description"),r.Qb(),r.Qb(),r.Qb(),r.Rb(36,"tbody"),r.Rb(37,"tr"),r.Rb(38,"td"),r.Rb(39,"code"),r.xc(40,"container-fill-color($color)"),r.Qb(),r.Qb(),r.Rb(41,"td"),r.xc(42,"Sets the container fill color to the given color for an enabled button."),r.Qb(),r.Qb(),r.Rb(43,"tr"),r.Rb(44,"td"),r.Rb(45,"code"),r.xc(46,"disabled-container-fill-color($color)"),r.Qb(),r.Qb(),r.Rb(47,"td"),r.xc(48,"Sets the container fill color to the given color for a disabled button."),r.Qb(),r.Qb(),r.Rb(49,"tr"),r.Rb(50,"td"),r.Rb(51,"code"),r.xc(52,"icon-color($color)"),r.Qb(),r.Qb(),r.Rb(53,"td"),r.xc(54,"Sets the icon color to the given color for an enabled button."),r.Qb(),r.Qb(),r.Rb(55,"tr"),r.Rb(56,"td"),r.Rb(57,"code"),r.xc(58,"disabled-icon-color($color)"),r.Qb(),r.Qb(),r.Rb(59,"td"),r.xc(60,"Sets the icon color to the given color for a disabled button."),r.Qb(),r.Qb(),r.Rb(61,"tr"),r.Rb(62,"td"),r.Rb(63,"code"),r.xc(64,"ink-color($color)"),r.Qb(),r.Qb(),r.Rb(65,"td"),r.xc(66,"Sets the ink color to the given color for an enabled button, and sets the icon color to the given color unless "),r.Rb(67,"code"),r.xc(68,"icon-color"),r.Qb(),r.xc(69," is also used."),r.Qb(),r.Qb(),r.Rb(70,"tr"),r.Rb(71,"td"),r.Rb(72,"code"),r.xc(73,"disabled-ink-color($color)"),r.Qb(),r.Qb(),r.Rb(74,"td"),r.xc(75,"Sets the ink color to the given color for a disabled button, and sets the icon color to the given color unless "),r.Rb(76,"code"),r.xc(77,"icon-color"),r.Qb(),r.xc(78," is also used."),r.Qb(),r.Qb(),r.Rb(79,"tr"),r.Rb(80,"td"),r.Rb(81,"code"),r.xc(82,"density($density-scale)"),r.Qb(),r.Qb(),r.Rb(83,"td"),r.xc(84,"Sets density scale for button. Supported density scale values ("),r.Rb(85,"code"),r.xc(86,"-3"),r.Qb(),r.xc(87,", "),r.Rb(88,"code"),r.xc(89,"-2"),r.Qb(),r.xc(90,", "),r.Rb(91,"code"),r.xc(92,"-1"),r.Qb(),r.xc(93,", "),r.Rb(94,"code"),r.xc(95,"0"),r.Qb(),r.xc(96,"). "),r.Qb(),r.Qb(),r.Rb(97,"tr"),r.Rb(98,"td"),r.Rb(99,"code"),r.xc(100,"height($height)"),r.Qb(),r.Qb(),r.Rb(101,"td"),r.xc(102,"Sets custom height for button."),r.Qb(),r.Qb(),r.Rb(103,"tr"),r.Rb(104,"td"),r.Rb(105,"code"),r.xc(106,"shape-radius($radius, $density-scale, $rtl-reflexive)"),r.Qb(),r.Qb(),r.Rb(107,"td"),r.xc(108,"Sets rounded shape to button with given radius size. "),r.Rb(109,"code"),r.xc(110,"$density-scale"),r.Qb(),r.xc(111," is only required when "),r.Rb(112,"code"),r.xc(113,"$radius"),r.Qb(),r.xc(114," value is in percentage unit, defaults to "),r.Rb(115,"code"),r.xc(116,"$density-default-scale"),r.Qb(),r.xc(117,". Set "),r.Rb(118,"code"),r.xc(119,"$rtl-reflexive"),r.Qb(),r.xc(120," to true to flip radius values in RTL context, defaults to false."),r.Qb(),r.Qb(),r.Rb(121,"tr"),r.Rb(122,"td"),r.Rb(123,"code"),r.xc(124,"horizontal-padding($padding)"),r.Qb(),r.Qb(),r.Rb(125,"td"),r.xc(126,"Sets horizontal padding to the given number."),r.Qb(),r.Qb(),r.Rb(127,"tr"),r.Rb(128,"td"),r.Rb(129,"code"),r.xc(130,"outline-color($color)"),r.Qb(),r.Qb(),r.Rb(131,"td"),r.xc(132,"Sets the outline color to the given color for an enabled button. "),r.Qb(),r.Qb(),r.Rb(133,"tr"),r.Rb(134,"td"),r.Rb(135,"code"),r.xc(136,"disabled-outline-color($color)"),r.Qb(),r.Qb(),r.Rb(137,"td"),r.xc(138,"Sets the outline color to the given color for a disabled button. "),r.Qb(),r.Qb(),r.Rb(139,"tr"),r.Rb(140,"td"),r.Rb(141,"code"),r.xc(142,"outline-width($width, $padding)"),r.Qb(),r.Qb(),r.Rb(143,"td"),r.xc(144,"Sets the outline width to the given number (defaults to 2px) and adjusts padding accordingly. "),r.Rb(145,"code"),r.xc(146,"$padding"),r.Qb(),r.xc(147," is only required in cases where "),r.Rb(148,"code"),r.xc(149,"horizontal-padding"),r.Qb(),r.xc(150," is also included with a custom value."),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb())},directives:[u.l],encapsulation:2}),n),v=[{path:"",component:(i=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){this._componentViewer.template={title:"Button",description:"Buttons allow users to take actions, and make choices, with a single tap.",references:[{name:"Material Design guidelines: Buttons",url:"https://material.io/design/components/buttons.html"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-button/README.md"}],code:"import {MdcButtonModule} from '@angular-mdc/web';",sass:"@use '@material/button/mdc-button';\n@use '@material/button';"}}}]),t}(),i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=r.Fb({type:i,selectors:[["ng-component"]],viewQuery:function(t,e){var o;1&t&&r.tc(l.a,!0),2&t&&r.nc(o=r.ac())&&(e._componentViewer=o.first)},decls:1,vars:0,template:function(t,e){1&t&&r.Mb(0,"component-viewer")},directives:[m.a],encapsulation:2}),i),children:[{path:"",redirectTo:"api"},{path:"api",component:h},{path:"sass",component:p},{path:"examples",component:(c=function t(){_classCallCheck(this,t),this.exampleDefault={html:'<button mdc-button>Default</button>\n\n<a mdc-button href="#/button-demo/examples">Href link</a>\n\n<a mdc-button raised href="#/button-demo/examples">Href link</a>\n\n<button mdc-button raised>Raised</button>\n\n<button mdc-button unelevated>Unelevated</button>\n\n<button mdc-button outlined>Outlined</button>\n\n<button mdc-button outlined class="demo-thick-outline-button">Thick Outlined</button>\n\n<button mdc-button disabled>Disabled</button>\n\n<button mdc-button class="demo-button-primary">Primary Color</button>\n\n<button mdc-button class="demo-button-secondary">Secondary Color</button>',sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_button.scss"},this.exampleDensity={html:'<button mdc-button class="demo-density-button">Density (-3)</button>\n\n<button mdc-button raised class="demo-density-button">Density (-3)</button>\n\n<button mdc-button outlined class="demo-density-button">Density (-3)</button>',sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_button.scss"},this.exampleIcon={html:'<button mdc-button>\n  <mdc-icon>favorite</mdc-icon>Icon\n</button>\n\n<button mdc-button outlined>\n  <mdc-icon>favorite</mdc-icon>Icon\n</button>\n\n<button mdc-button raised class="demo-button-primary">\n  <mdc-icon>favorite</mdc-icon>Icon\n</button>\n\n<button mdc-button raised class="demo-button-secondary">\n  <mdc-icon>favorite</mdc-icon>Icon\n</button>',sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_button.scss"},this.svgExample={html:'<button mdc-button raised>\n  <mdc-icon>\n    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">\n      <path fill="none" d="M0 0h24v24H0z" />\n      <path d="M23 12c0-6.07-4.93-11-11-11S1 5.93 1 12s4.93 11 11 11 11-4.93 11-11zM5 17.64C3.75 16.1 3\n       14.14 3 12c0-2.13.76-4.08 2-5.63v11.27zM17.64 5H6.36C7.9 3.75 9.86 3 12 3s4.1.75 5.64 2zM12 14.53L8.24\n       7h7.53L12 14.53zM17 9v8h-4l4-8zm-6 8H7V9l4 8zm6.64 2c-1.55 1.25-3.51 2-5.64 2s-4.1-.75-5.64-2h11.28zM21\n       12c0 2.14-.75 4.1-2 5.64V6.37c1.24 1.55 2 3.5 2 5.63z" />\n    </svg>\n  </mdc-icon>\n  SVG Icon\n</button>'},this.inkExample={html:'<button mdc-button unelevated class="demo-button-ink-color">\n  <mdc-icon>favorite</mdc-icon>Ink Color\n</button>\n\n<button mdc-button outlined class="demo-button-icon-color">\n  <mdc-icon>favorite</mdc-icon>Icon Color\n</button>',sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_button.scss"},this.shapedExample={html:'<button mdc-button unelevated class="big-round-shape-button">Corner Radius</button>\n\n<button mdc-button raised class="big-round-shape-button">\n  <mdc-icon>favorite</mdc-icon>Icon\n</button>',sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_button.scss"},this.trailingIconExample={html:'<button mdc-button>\n  <span mdcButtonLabel>Trailing Icon</span>\n  <mdc-icon>favorite</mdc-icon>\n</button>\n\n<button mdc-button raised class="demo-button-primary">\n  <mdc-button-label>Trailing Icon</mdc-button-label>\n  <mdc-icon>favorite</mdc-icon>\n</button>\n\n<button mdc-button outlined label="Trailing Icon">\n  <mdc-icon>favorite</mdc-icon>\n</button>',sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_button.scss"},this.exampleAccessibility={html:'<div class="mdc-touch-target-wrapper">\n  <button mdc-button touch>My Accessible Button</button>\n</div>'}},c.\u0275fac=function(t){return new(t||c)},c.\u0275cmp=r.Fb({type:c,selectors:[["ng-component"]],decls:146,vars:8,consts:[[1,"demo-content"],[1,"demo-layout__row"],[1,"demo-container"],["mdc-button",""],["mdc-button","","href","#/button-demo/examples"],["mdc-button","","raised","","href","#/button-demo/examples"],["mdc-button","","raised",""],["mdc-button","","unelevated",""],["mdc-button","","outlined",""],["mdc-button","","outlined","",1,"demo-thick-outline-button"],["mdc-button","","disabled",""],["mdc-button","",1,"demo-button-primary"],["mdc-button","",1,"demo-button-secondary"],[3,"example"],["mdc-button","",1,"demo-density-button"],["mdc-button","","raised","",1,"demo-density-button"],["mdc-button","","outlined","",1,"demo-density-button"],["mdc-button","","raised","",1,"demo-button-primary"],["mdc-button","","raised","",1,"demo-button-secondary"],[1,"demo-content__headline"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","#000000"],["fill","none","d","M0 0h24v24H0z"],["d","M23 12c0-6.07-4.93-11-11-11S1 5.93 1 12s4.93 11 11 11 11-4.93 11-11zM5 17.64C3.75 16.1 3 14.14 3 12c0-2.13.76-4.08 2-5.63v11.27zM17.64 5H6.36C7.9 3.75 9.86 3 12 3s4.1.75 5.64 2zM12 14.53L8.24 7h7.53L12 14.53zM17 9v8h-4l4-8zm-6 8H7V9l4 8zm6.64 2c-1.55 1.25-3.51 2-5.64 2s-4.1-.75-5.64-2h11.28zM21 12c0 2.14-.75 4.1-2 5.64V6.37c1.24 1.55 2 3.5 2 5.63z"],["mdc-button","","unelevated","",1,"demo-button-ink-color"],["mdc-button","","outlined","",1,"demo-button-icon-color"],["mdc-button","","unelevated","",1,"big-round-shape-button"],["mdc-button","","raised","",1,"big-round-shape-button"],["mdcButtonLabel",""],["mdc-button","","outlined","","label","Trailing Icon"],[1,"mdc-touch-target-wrapper"],["mdc-button","","touch",""]],template:function(t,e){1&t&&(r.Rb(0,"div",0),r.Rb(1,"div",1),r.Rb(2,"div",2),r.Rb(3,"button",3),r.xc(4,"Default"),r.Qb(),r.Qb(),r.Rb(5,"div",2),r.Rb(6,"a",4),r.xc(7,"Href link"),r.Qb(),r.Qb(),r.Rb(8,"div",2),r.Rb(9,"a",5),r.xc(10,"Href link"),r.Qb(),r.Qb(),r.Rb(11,"div",2),r.Rb(12,"button",6),r.xc(13,"Raised"),r.Qb(),r.Qb(),r.Rb(14,"div",2),r.Rb(15,"button",7),r.xc(16,"Unelevated"),r.Qb(),r.Qb(),r.Rb(17,"div",2),r.Rb(18,"button",8),r.xc(19,"Outlined"),r.Qb(),r.Qb(),r.Rb(20,"div",2),r.Rb(21,"button",9),r.xc(22,"Thick Outlined"),r.Qb(),r.Qb(),r.Rb(23,"div",2),r.Rb(24,"button",10),r.xc(25,"Disabled"),r.Qb(),r.Qb(),r.Rb(26,"div",2),r.Rb(27,"button",11),r.xc(28,"Primary Color"),r.Qb(),r.Qb(),r.Rb(29,"div",2),r.Rb(30,"button",12),r.xc(31,"Secondary Color"),r.Qb(),r.Qb(),r.Qb(),r.Mb(32,"example-viewer",13),r.Qb(),r.Rb(33,"div",0),r.Rb(34,"div",1),r.Rb(35,"div",2),r.Rb(36,"button",14),r.xc(37,"Density (-3)"),r.Qb(),r.Qb(),r.Rb(38,"div",2),r.Rb(39,"button",15),r.xc(40,"Density (-3)"),r.Qb(),r.Qb(),r.Rb(41,"div",2),r.Rb(42,"button",16),r.xc(43,"Density (-3)"),r.Qb(),r.Qb(),r.Qb(),r.Mb(44,"example-viewer",13),r.Qb(),r.Rb(45,"div",0),r.Rb(46,"div",1),r.Rb(47,"div",2),r.Rb(48,"button",3),r.Rb(49,"mdc-icon"),r.xc(50,"favorite"),r.Qb(),r.xc(51,"Icon "),r.Qb(),r.Qb(),r.Rb(52,"div",2),r.Rb(53,"button",8),r.Rb(54,"mdc-icon"),r.xc(55,"favorite"),r.Qb(),r.xc(56,"Icon "),r.Qb(),r.Qb(),r.Rb(57,"div",2),r.Rb(58,"button",17),r.Rb(59,"mdc-icon"),r.xc(60,"favorite"),r.Qb(),r.xc(61,"Icon "),r.Qb(),r.Qb(),r.Rb(62,"div",2),r.Rb(63,"button",18),r.Rb(64,"mdc-icon"),r.xc(65,"favorite"),r.Qb(),r.xc(66,"Icon "),r.Qb(),r.Qb(),r.Qb(),r.Mb(67,"example-viewer",13),r.Qb(),r.Rb(68,"div",0),r.Rb(69,"h3",19),r.xc(70,"SVG Icon"),r.Qb(),r.Rb(71,"button",6),r.Rb(72,"mdc-icon"),r.cc(),r.Rb(73,"svg",20),r.Mb(74,"path",21),r.Mb(75,"path",22),r.Qb(),r.Qb(),r.xc(76," SVG Icon "),r.Qb(),r.bc(),r.Mb(77,"example-viewer",13),r.Qb(),r.Rb(78,"div",0),r.Rb(79,"h3",19),r.xc(80,"Theme"),r.Qb(),r.Rb(81,"div",1),r.Rb(82,"div",2),r.Rb(83,"button",23),r.Rb(84,"mdc-icon"),r.xc(85,"favorite"),r.Qb(),r.xc(86,"Ink Color "),r.Qb(),r.Qb(),r.Rb(87,"div",2),r.Rb(88,"button",24),r.Rb(89,"mdc-icon"),r.xc(90,"favorite"),r.Qb(),r.xc(91,"Icon Color "),r.Qb(),r.Qb(),r.Qb(),r.Mb(92,"example-viewer",13),r.Qb(),r.Rb(93,"div",0),r.Rb(94,"h3",19),r.xc(95,"Shaped"),r.Qb(),r.Rb(96,"div",1),r.Rb(97,"div",2),r.Rb(98,"button",25),r.xc(99,"Corner Radius"),r.Qb(),r.Qb(),r.Rb(100,"div",2),r.Rb(101,"button",26),r.Rb(102,"mdc-icon"),r.xc(103,"favorite"),r.Qb(),r.xc(104,"Icon "),r.Qb(),r.Qb(),r.Qb(),r.Mb(105,"example-viewer",13),r.Qb(),r.Rb(106,"div",0),r.Rb(107,"h3",19),r.xc(108,"Trailing icon"),r.Qb(),r.Rb(109,"p"),r.xc(110," Certain icons make more sense to appear after the button's text label rather than before. This can be accomplished by putting the icon markup "),r.Rb(111,"i"),r.xc(112,"after"),r.Qb(),r.xc(113," the mdcButtonLabel element. "),r.Qb(),r.Rb(114,"p"),r.xc(115," NOTE: The mdc-button-label element is required in order for the trailing icon to be styled appropriately. "),r.Qb(),r.Rb(116,"div",1),r.Rb(117,"div",2),r.Rb(118,"button",3),r.Rb(119,"span",27),r.xc(120,"Trailing Icon"),r.Qb(),r.Rb(121,"mdc-icon"),r.xc(122,"favorite"),r.Qb(),r.Qb(),r.Qb(),r.Rb(123,"div",2),r.Rb(124,"button",18),r.Rb(125,"mdc-button-label"),r.xc(126,"Trailing Icon"),r.Qb(),r.Rb(127,"mdc-icon"),r.xc(128,"favorite"),r.Qb(),r.Qb(),r.Qb(),r.Rb(129,"div",2),r.Rb(130,"button",28),r.Rb(131,"mdc-icon"),r.xc(132,"favorite"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Mb(133,"example-viewer",13),r.Qb(),r.Rb(134,"div",0),r.Rb(135,"h3",19),r.xc(136,"Accessibility"),r.Qb(),r.Rb(137,"p"),r.xc(138," Material Design spec advises that touch targets should be at least 48 x 48 px. To meet this requirement, add the `touch` property. "),r.Qb(),r.Rb(139,"p"),r.xc(140," Note that the outer mdc-touch-target-wrapper element is only necessary if you want to avoid potentially overlapping touch targets on adjacent elements (due to collapsing margins). "),r.Qb(),r.Rb(141,"div",1),r.Rb(142,"div",29),r.Rb(143,"button",30),r.xc(144,"My Accessible Button"),r.Qb(),r.Qb(),r.Qb(),r.Mb(145,"example-viewer",13),r.Qb()),2&t&&(r.Bb(32),r.ic("example",e.exampleDefault),r.Bb(12),r.ic("example",e.exampleDensity),r.Bb(23),r.ic("example",e.exampleIcon),r.Bb(10),r.ic("example",e.svgExample),r.Bb(15),r.ic("example",e.inkExample),r.Bb(13),r.ic("example",e.shapedExample),r.Bb(28),r.ic("example",e.trailingIconExample),r.Bb(12),r.ic("example",e.exampleAccessibility))},directives:[R.a,Q.a,x.b,R.b],encapsulation:2}),c)}]}],f=((d=function t(){_classCallCheck(this,t)}).\u0275mod=r.Jb({type:d}),d.\u0275inj=r.Ib({factory:function(t){return new(t||d)},imports:[[s.e.forChild(v)],s.e]}),d);o.d(e,"ButtonModule",(function(){return y}));var g,y=((g=function t(){_classCallCheck(this,t)}).\u0275mod=r.Jb({type:g}),g.\u0275inj=r.Ib({factory:function(t){return new(t||g)},imports:[[a.a,f]]}),g)}}]);