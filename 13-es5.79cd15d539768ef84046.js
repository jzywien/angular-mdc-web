function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"0V7W":function(e,t,o){"use strict";o.r(t);var n=o("d2mR"),i=o("tyNb"),c=o("3Pt+"),a=o("d9jQ"),l=o("53lh"),d=o("leug"),r=o("fXoL"),b=o("5l+6"),s=o("OtPg"),m=o("9UYg"),u=o("LuDt"),p=o("mpsM"),g=o("dkiD"),f=o("MxWb"),h=o("M9Bb"),R=o("roy6"),x=o("o085"),Q=o("ofXK"),D=o("CBIf"),C=o("4G1d"),v=o("6D23"),y=o("OA+s");function A(e,t){if(1&e&&(r.Rb(0,"p"),r.xc(1),r.Qb()),2&e){var o=t.$implicit;r.Bb(1),r.yc(o)}}var w,k,M,F,S,_,B,I,O,T,L,q=((T=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||T)},T.\u0275cmp=r.Fb({type:T,selectors:[["ng-component"]],decls:72,vars:0,consts:[[1,"demo-content"],[1,"demo-content__headline"],["mdcBody2",""],[1,"docs-markdown-code"],["highlight","@NgModule({\n  imports: [\n    // ...\n    MdcDialogModule\n  ],\n  declarations: [\n    AppComponent,\n    ExampleDialogComponent\n  ],\n  entryComponents: [\n    ExampleDialogComponent\n  ],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}"],["highlight","let dialogRef = dialog.open(UserProfileComponent, {\n  clickOutsideToClose: true,\n  escapeToClose: true,\n});"],["highlight","dialogRef.afterClosed().subscribe(result => {\n  console.log(`Dialog result: ${result}`);\n});\n\ndialogRef.close('Pizza!');"],["highlight","@Component({/* ... */})\nexport class YourDialog {\n  constructor(\n    dialogRef: MdcDialogRef<YourDialog>) { }\n\n  closeDialog() {\n    this.dialogRef.close('Pizza!');\n  }\n}"],["highlight",'<mdc-dialog-actions>\n  <button mdcDialogButton mdcDialogAction="close">Decline</button>\n  <button mdcDialogButton mdcDialogAction="accept" cdkFocusInitial>Accept</button>\n</mdc-dialog-actions>'],["mdc-button","","href","https://material.angular.io/cdk/a11y/overview#example","target","_blank","rel","noopener"],["highlight","let dialogRef = dialog.open(YourDialog, {\n  data: {name: this.name, animal: this.animal}\n});"],["highlight","import { Component, Inject } from '@angular/core';\nimport {\n  MdcDialogRef,\n  MDC_DIALOG_DATA\n} from '@angular-mdc/web';\n\n@Component({\n  // ...\n})\nexport class YourDialog {\n  constructor(\n    public dialogRef: MdcDialogRef<YourDialog>,\n    @Inject(MDC_DIALOG_DATA) public data: DialogData) {\n    userName: string = data.name;\n  }\n}"]],template:function(e,t){1&e&&(r.Rb(0,"div",0),r.Rb(1,"h3",1),r.xc(2,"Configuring Dialog via entryComponents"),r.Qb(),r.Rb(3,"p",2),r.xc(4,"Because "),r.Rb(5,"code",3),r.xc(6,"MdcDialog"),r.Qb(),r.xc(7," instantiates components at run-time, the Angular compiler needs extra information to create the necessary ComponentFactory for your dialog content component."),r.Qb(),r.Rb(8,"p",2),r.xc(9,"For any component loaded into a dialog, you must include your component class in the list of "),r.Rb(10,"code",3),r.xc(11,"entryComponents"),r.Qb(),r.xc(12," in your NgModule definition so that the Angular compiler knows to create the ComponentFactory."),r.Qb(),r.Rb(13,"pre"),r.Mb(14,"code",4),r.Qb(),r.Rb(15,"h3",1),r.xc(16,"Usage"),r.Qb(),r.xc(17," A dialog is opened by calling the "),r.Rb(18,"code",3),r.xc(19,"open"),r.Qb(),r.xc(20," method with a component to be loaded and an optional config object. The "),r.Rb(21,"code",3),r.xc(22,"open"),r.Qb(),r.xc(23," method will return an instance of "),r.Rb(24,"code",3),r.xc(25,"MdcDialogRef"),r.Qb(),r.xc(26,": "),r.Rb(27,"pre"),r.Mb(28,"code",5),r.Qb(),r.xc(29," The "),r.Rb(30,"code",3),r.xc(31,"MdcDialogRef"),r.Qb(),r.xc(32," provides a handle on the opened dialog. It can be used to close the dialog and to receive notification when the dialog has been closed. "),r.Rb(33,"pre"),r.Mb(34,"code",6),r.Qb(),r.Rb(35,"p"),r.xc(36,"Components created via "),r.Rb(37,"code",3),r.xc(38,"MdcDialog"),r.Qb(),r.xc(39," can inject "),r.Rb(40,"code",3),r.xc(41,"MdcDialogRef"),r.Qb(),r.xc(42," and use it to close the dialog in which they are contained. When closing, an optional result value can be provided. This result value is forwarded as the result of the "),r.Rb(43,"code",3),r.xc(44,"afterClosed"),r.Qb(),r.xc(45," promise."),r.Qb(),r.Rb(46,"pre"),r.Mb(47,"code",7),r.Qb(),r.Rb(48,"h3",1),r.xc(49,"Focus Management"),r.Qb(),r.Rb(50,"p"),r.xc(51,"By default, the first tabbable element within the dialog will receive focus upon open. This can be configured by setting the "),r.Rb(52,"code",3),r.xc(53,"cdkFocusInitial"),r.Qb(),r.xc(54," attribute on another focusable element."),r.Qb(),r.Rb(55,"p"),r.xc(56,"Tabbing through the elements of the dialog will keep focus inside of the dialog element, wrapping back to the first tabbable element when reaching the end of the tab sequence."),r.Qb(),r.Rb(57,"pre"),r.Mb(58,"code",8),r.Qb(),r.Rb(59,"a",9),r.xc(60,"Focus Trap - Read more"),r.Qb(),r.Rb(61,"h3",1),r.xc(62,"Sharing data with the Dialog component"),r.Qb(),r.xc(63," If you want to share data with your dialog, you can use the "),r.Rb(64,"code",3),r.xc(65,"data"),r.Qb(),r.xc(66," option to pass information to the dialog component. "),r.Rb(67,"pre"),r.Mb(68,"code",10),r.Qb(),r.xc(69," To access the data in your dialog component. "),r.Rb(70,"pre"),r.Mb(71,"code",11),r.Qb(),r.Qb())},directives:[b.b,s.b,m.a],encapsulation:2}),T),G=((O=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||O)},O.\u0275cmp=r.Fb({type:O,selectors:[["ng-component"]],decls:229,vars:0,consts:[[1,"docs-api"],["mdcHeadline6",""],["mdcSubtitle2",""],[1,"markdown-code"]],template:function(e,t){1&e&&(r.Rb(0,"div",0),r.Rb(1,"h2",1),r.xc(2,"Service"),r.Qb(),r.Rb(3,"h3",1),r.xc(4,"MdcDialog"),r.Qb(),r.xc(5," Service to open MDC dialogs. "),r.Rb(6,"h4",2),r.xc(7,"Properties"),r.Qb(),r.Rb(8,"table"),r.Rb(9,"thead"),r.Rb(10,"tr"),r.Rb(11,"th"),r.xc(12,"Name"),r.Qb(),r.Rb(13,"th"),r.xc(14,"Description"),r.Qb(),r.Qb(),r.Qb(),r.Rb(15,"tbody"),r.Rb(16,"tr"),r.Rb(17,"td"),r.xc(18,"afterOpened: Observable "),r.Rb(19,"pre"),r.xc(20,"void"),r.Qb(),r.Qb(),r.Rb(21,"td"),r.xc(22,"Gets an observable that is notified when the dialog is finished opening."),r.Qb(),r.Qb(),r.Rb(23,"tr"),r.Rb(24,"td"),r.xc(25,"afterClosed: Observable "),r.Rb(26,"pre"),r.xc(27,"R | undefined"),r.Qb(),r.Qb(),r.Rb(28,"td"),r.xc(29,"Gets an observable that is notified when the dialog is finished closing."),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(30,"h4",2),r.xc(31,"Methods"),r.Qb(),r.Rb(32,"table"),r.Rb(33,"tbody"),r.Rb(34,"tr"),r.Rb(35,"td"),r.xc(36,"close(dialogResult?: any)"),r.Qb(),r.Rb(37,"td"),r.xc(38,"Closes the dialog with optional returned result."),r.Qb(),r.Qb(),r.Rb(39,"tr"),r.Rb(40,"td"),r.xc(41,"open(component, config?: MdcDialogConfig)"),r.Qb(),r.Rb(42,"td"),r.xc(43,"Opens the dialog with optional configuration."),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(44,"h4",2),r.xc(45,"MdcDialogConfig"),r.Qb(),r.Rb(46,"table"),r.Rb(47,"tbody"),r.Rb(48,"tr"),r.Rb(49,"td"),r.xc(50,"id: string"),r.Qb(),r.Rb(51,"td"),r.xc(52,"ID for the dialog. If omitted, a unique one will be generated."),r.Qb(),r.Qb(),r.Rb(53,"tr"),r.Rb(54,"td"),r.xc(55,"ariaLabel: string"),r.Qb(),r.Rb(56,"td"),r.xc(57,"Aria label to assign to the dialog element."),r.Qb(),r.Qb(),r.Rb(58,"tr"),r.Rb(59,"td"),r.xc(60,"ariaDescribedBy: string"),r.Qb(),r.Rb(61,"td"),r.xc(62,"ID of the element that describes the dialog."),r.Qb(),r.Qb(),r.Rb(63,"tr"),r.Rb(64,"td"),r.xc(65,"clickOutsideToClose: boolean"),r.Qb(),r.Rb(66,"td"),r.xc(67,"Close the dialog if user clicks on the backdrop. (Default: true) "),r.Qb(),r.Qb(),r.Rb(68,"tr"),r.Rb(69,"td"),r.xc(70,"escapeToClose: boolean"),r.Qb(),r.Rb(71,"td"),r.xc(72,"Enable or disable close on escape key (Default: true)."),r.Qb(),r.Qb(),r.Rb(73,"tr"),r.Rb(74,"td"),r.xc(75,"scrollable: boolean"),r.Qb(),r.Rb(76,"td"),r.xc(77,"Applied automatically when the dialog has overflowing content to warrant scrolling."),r.Qb(),r.Qb(),r.Rb(78,"tr"),r.Rb(79,"td"),r.xc(80,"buttonsStacked: boolean"),r.Qb(),r.Rb(81,"td"),r.xc(82,"Enable or disable the stacking of action buttons, if they can't fit on a single line."),r.Qb(),r.Qb(),r.Rb(83,"tr"),r.Rb(84,"td"),r.xc(85,"autoFocus: boolean"),r.Qb(),r.Rb(86,"td"),r.xc(87,"Whether the dialog should focus the first focusable element on open. (Default: true)"),r.Qb(),r.Qb(),r.Rb(88,"tr"),r.Rb(89,"td"),r.xc(90,"restoreFocus: boolean"),r.Qb(),r.Rb(91,"td"),r.xc(92,"Whether the dialog should restore focus to the previously-focused element, after it's closed. (Default: true)"),r.Qb(),r.Qb(),r.Rb(93,"tr"),r.Rb(94,"td"),r.xc(95,"componentFactoryResolver?: ComponentFactoryResolver"),r.Qb(),r.Rb(96,"td"),r.xc(97,"Allows for a different `ComponentFactoryResolver` to be passed in when creating a dialog."),r.Qb(),r.Qb(),r.Rb(98,"tr"),r.Rb(99,"td"),r.xc(100,"data: any"),r.Qb(),r.Rb(101,"td"),r.xc(102,"Data that can be assigned inside child component."),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(103,"div",0),r.Rb(104,"h2",1),r.xc(105,"Directives"),r.Qb(),r.Rb(106,"h3",1),r.xc(107,"MdcDialog"),r.Qb(),r.xc(108," Mandatory. The root DOM element containing the surface and the container. "),r.Rb(109,"p"),r.xc(110," Selector: "),r.Rb(111,"span",3),r.xc(112,"mdc-dialog"),r.Qb(),r.Qb(),r.xc(113," Exported as: "),r.Rb(114,"span",3),r.xc(115,"mdcDialog"),r.Qb(),r.Rb(116,"h4",2),r.xc(117,"Methods"),r.Qb(),r.Rb(118,"table"),r.Rb(119,"tbody"),r.Rb(120,"tr"),r.Rb(121,"td"),r.xc(122,"layout(): void"),r.Qb(),r.Rb(123,"td"),r.xc(124,"Recalculates layout and automatically adds/removes modifier classes like --scrollable."),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(125,"div",0),r.Rb(126,"h3",1),r.xc(127,"MdcDialogContainer"),r.Qb(),r.xc(128," Mandatory. Wrapper element needed to ensure flexbox behavior in IE 11. "),r.Rb(129,"p"),r.xc(130," Selector: "),r.Rb(131,"span",3),r.xc(132,"mdc-dialog-container"),r.Qb(),r.Qb(),r.xc(133," Exported as: "),r.Rb(134,"span",3),r.xc(135,"mdcDialogContainer"),r.Qb(),r.Qb(),r.Rb(136,"div",0),r.Rb(137,"h3",1),r.xc(138,"MdcDialogSurface"),r.Qb(),r.xc(139," Mandatory. The bounding box for the dialog's content. "),r.Rb(140,"p"),r.xc(141," Selector: "),r.Rb(142,"span",3),r.xc(143,"mdc-dialog-surface"),r.Qb(),r.Qb(),r.xc(144," Exported as: "),r.Rb(145,"span",3),r.xc(146,"mdcDialogSurface"),r.Qb(),r.Qb(),r.Rb(147,"div",0),r.Rb(148,"h3",1),r.xc(149,"MdcDialogTitle"),r.Qb(),r.xc(150," Mandatory. The bounding box for the dialog's content. "),r.Rb(151,"p"),r.xc(152," Selector: "),r.Rb(153,"span",3),r.xc(154,"mdc-dialog-title"),r.Qb(),r.Rb(155,"span",3),r.xc(156,"mdcDialogTitle"),r.Qb(),r.Qb(),r.xc(157," Exported as: "),r.Rb(158,"span",3),r.xc(159,"mdcDialogTitle"),r.Qb(),r.Qb(),r.Rb(160,"div",0),r.Rb(161,"h3",1),r.xc(162,"MdcDialogContent"),r.Qb(),r.xc(163," Optional. Primary content area. May contain a list, a form, or prose. "),r.Rb(164,"p"),r.xc(165," Selector: "),r.Rb(166,"span",3),r.xc(167,"mdc-dialog-content"),r.Qb(),r.Rb(168,"span",3),r.xc(169,"mdcDialogContent"),r.Qb(),r.Qb(),r.xc(170," Exported as: "),r.Rb(171,"span",3),r.xc(172,"mdcDialogContent"),r.Qb(),r.Qb(),r.Rb(173,"div",0),r.Rb(174,"h3",1),r.xc(175,"MdcDialogActions"),r.Qb(),r.xc(176," Optional. Footer area containing the dialog's action buttons. "),r.Rb(177,"p"),r.xc(178," Selector: "),r.Rb(179,"span",3),r.xc(180,"mdc-dialog-actions"),r.Qb(),r.Rb(181,"span",3),r.xc(182,"mdcDialogActions"),r.Qb(),r.Qb(),r.xc(183," Exported as: "),r.Rb(184,"span",3),r.xc(185,"mdcDialogActions"),r.Qb(),r.Qb(),r.Rb(186,"div",0),r.Rb(187,"h3",1),r.xc(188,"MdcDialogButton"),r.Qb(),r.Rb(189,"p"),r.xc(190," Selector: "),r.Rb(191,"span",3),r.xc(192,"button[mdcDialogButton]"),r.Qb(),r.Rb(193,"span",3),r.xc(194,"a[mdcDialogButton]"),r.Qb(),r.Qb(),r.xc(195," Exported as: "),r.Rb(196,"span",3),r.xc(197,"mdcDialogButton"),r.Qb(),r.Rb(198,"h4",2),r.xc(199,"Properties"),r.Qb(),r.Rb(200,"table"),r.Rb(201,"thead"),r.Rb(202,"tr"),r.Rb(203,"th"),r.xc(204,"Name"),r.Qb(),r.Rb(205,"th"),r.xc(206,"Description"),r.Qb(),r.Qb(),r.Qb(),r.Rb(207,"tbody"),r.Rb(208,"tr"),r.Rb(209,"td"),r.xc(210,"default: boolean"),r.Qb(),r.Rb(211,"td"),r.xc(212,"Indicates that this action button represents the default action. "),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(213,"div",0),r.Rb(214,"h3",1),r.xc(215,"MdcDialogAction"),r.Qb(),r.xc(216," Optional. Any element within a dialog may include the"),r.Rb(217,"span",3),r.xc(218,"mdcDialogAction"),r.Qb(),r.xc(219," directive. "),r.Rb(220,"p"),r.xc(221," Selector: "),r.Rb(222,"span",3),r.xc(223,'mdcDialogAction="close"'),r.Qb(),r.Rb(224,"span",3),r.xc(225,'mdcDialogAction="accept"'),r.Qb(),r.Qb(),r.xc(226," Exported as: "),r.Rb(227,"span",3),r.xc(228,"mdcDialogAction"),r.Qb(),r.Qb())},directives:[b.i,b.l],encapsulation:2}),O),E=((I=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||I)},I.\u0275cmp=r.Fb({type:I,selectors:[["ng-component"]],decls:68,vars:0,consts:[[1,"docs-api"],["mdcSubtitle2",""]],template:function(e,t){1&e&&(r.Rb(0,"div",0),r.Rb(1,"h4",1),r.xc(2,"Sass Mixins"),r.Qb(),r.Rb(3,"table"),r.Rb(4,"thead"),r.Rb(5,"tr"),r.Rb(6,"th"),r.xc(7,"Mixin"),r.Qb(),r.Rb(8,"th"),r.xc(9,"Description"),r.Qb(),r.Qb(),r.Qb(),r.Rb(10,"tbody"),r.Rb(11,"tr"),r.Rb(12,"td"),r.Rb(13,"code"),r.xc(14,"container-fill-color($color)"),r.Qb(),r.Qb(),r.Rb(15,"td"),r.xc(16,"Sets the fill color of the dialog."),r.Qb(),r.Qb(),r.Rb(17,"tr"),r.Rb(18,"td"),r.Rb(19,"code"),r.xc(20,"scrim-color($color, $opacity)"),r.Qb(),r.Qb(),r.Rb(21,"td"),r.xc(22,"Sets the color of the scrim behind the dialog."),r.Qb(),r.Qb(),r.Rb(23,"tr"),r.Rb(24,"td"),r.Rb(25,"code"),r.xc(26,"title-ink-color($color, $opacity)"),r.Qb(),r.Qb(),r.Rb(27,"td"),r.xc(28,"Sets the color of the dialog's title text."),r.Qb(),r.Qb(),r.Rb(29,"tr"),r.Rb(30,"td"),r.Rb(31,"code"),r.xc(32,"content-ink-color($color, $opacity)"),r.Qb(),r.Qb(),r.Rb(33,"td"),r.xc(34,"Sets the color of the dialog's content text."),r.Qb(),r.Qb(),r.Rb(35,"tr"),r.Rb(36,"td"),r.Rb(37,"code"),r.xc(38,"scroll-divider-color($color, $opacity)"),r.Qb(),r.Qb(),r.Rb(39,"td"),r.xc(40,"Sets the color of the dividers which display around scrollable content."),r.Qb(),r.Qb(),r.Rb(41,"tr"),r.Rb(42,"td"),r.Rb(43,"code"),r.xc(44,"shape-radius($radius, $rtl-reflexive)"),r.Qb(),r.Qb(),r.Rb(45,"td"),r.xc(46,"Sets the rounded shape to dialog surface with given radius size. Set "),r.Rb(47,"code"),r.xc(48,"$rtl-reflexive"),r.Qb(),r.xc(49," to true to flip radius values in RTL context, defaults to false."),r.Qb(),r.Qb(),r.Rb(50,"tr"),r.Rb(51,"td"),r.Rb(52,"code"),r.xc(53,"min-width($min-width)"),r.Qb(),r.Qb(),r.Rb(54,"td"),r.xc(55,"Sets the minimum width of the dialog (defaults to 280px)."),r.Qb(),r.Qb(),r.Rb(56,"tr"),r.Rb(57,"td"),r.Rb(58,"code"),r.xc(59,"max-width($max-width, $margin)"),r.Qb(),r.Qb(),r.Rb(60,"td"),r.xc(61,"Sets the maximum width of the dialog (defaults to 560px max width and 16px margins)."),r.Qb(),r.Qb(),r.Rb(62,"tr"),r.Rb(63,"td"),r.Rb(64,"code"),r.xc(65,"max-height($max-height, $margin)"),r.Qb(),r.Qb(),r.Rb(66,"td"),r.xc(67,"Sets the maximum height of the dialog (defaults to no max height and 16px margins)."),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb())},directives:[b.l],encapsulation:2}),I),$=((B=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this._componentViewer.template={title:"Dialog",description:"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.",references:[{name:"Material Design guidelines: Dialog",url:"https://material.io/guidelines/components/dialogs.html"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-dialog/README.md"}],code:"import {MdcDialogModule} from '@angular-mdc/web';",sass:"@use '@material/dialog/mdc-dialog';\n@use '@material/dialog';",tabs:[{label:"Usage",route:"./usage"}].concat(_toConsumableArray(this._componentViewer.defaultTabs))}}}]),e}()).\u0275fac=function(e){return new(e||B)},B.\u0275cmp=r.Fb({type:B,selectors:[["ng-component"]],viewQuery:function(e,t){var o;1&e&&r.tc(d.a,!0),2&e&&r.nc(o=r.ac())&&(t._componentViewer=o.first)},decls:1,vars:0,template:function(e,t){1&e&&r.Mb(0,"component-viewer")},directives:[u.a],encapsulation:2}),B),N=((_=function(){function e(t){_classCallCheck(this,e),this.dialog=t,this.exampleTS="import { MdcDialog, MdcDialogRef, MDC_DIALOG_DATA } from '@angular-mdc/web';\n\n@Component({ templateUrl: './examples.html' })\nexport class Examples {\n  constructor(public dialog: MdcDialog) { }",this.exampleAlert={html:'<button mdc-button (click)="openAlert()">Alert</button>',ts:"".concat(this.exampleTS,"\n\n  openAlert() {\n    const dialogRef = this.dialog.open(DialogAlert, {\n      escapeToClose: false,\n      clickOutsideToClose: false,\n      buttonsStacked: false,\n      id: 'my-dialog'\n    });\n\n    dialogRef.afterClosed().subscribe(result => {\n      console.log(result);\n    });\n  }\n}"),"Dialog-Alert.html":'<mdc-dialog>\n  <mdc-dialog-container>\n    <mdc-dialog-surface>\n      <mdc-dialog-title>Discard draft?</mdc-dialog-title>\n      <mdc-dialog-actions>\n        <button mdcDialogButton mdcDialogAction="close">Cancel</button>\n        <button mdcDialogButton mdcDialogAction="accept">Discard</button>\n      </mdc-dialog-actions>\n    </mdc-dialog-surface>\n  </mdc-dialog-container>\n</mdc-dialog>',"dialog-alert.ts":"@Component({\n  templateUrl: 'dialog-alert.html',\n})\nexport class DialogAlert {\n  constructor(public dialogRef: MdcDialogRef<DialogAlert>) { }\n}"},this.exampleSimple={html:'<button mdc-button (click)="openSimple()">Simple</button>',ts:"".concat(this.exampleTS,"\n\n  openSimple() {\n    const dialogRef = this.dialog.open(DialogSimple);\n\n    dialogRef.afterClosed().subscribe(result => {\n      console.log(result);\n    });\n  }\n}"),"dialog-simple.html":'<mdc-dialog>\n  <mdc-dialog-container>\n    <mdc-dialog-surface>\n      <mdc-dialog-title>Select an account</mdc-dialog-title>\n      <mdc-dialog-content>\n        <mdc-list avatar>\n          <mdc-list-item (click)="closeDialog()" cdkInitialFocus>\n            <mdc-icon mdcListItemGraphic>person</mdc-icon>username@gmail.com\n          </mdc-list-item>\n          <mdc-list-item (click)="closeDialog()">\n            <mdc-icon mdcListItemGraphic>person</mdc-icon>user02@gmail.com\n          </mdc-list-item>\n          <mdc-list-item (click)="closeDialog()">\n            <mdc-icon mdcListItemGraphic>add</mdc-icon>add account\n          </mdc-list-item>\n        </mdc-list>\n      </mdc-dialog-content>\n    </mdc-dialog-surface>\n  </mdc-dialog-container>\n</mdc-dialog>',"dialog-simple.ts":"@Component({\n  templateUrl: 'dialog-simple.html',\n})\nexport class DialogSimple {\n  constructor(public dialogRef: MdcDialogRef<DialogSimple>) { }\n\n  closeDialog(): void {\n    this.dialogRef.close('Pizza');\n  }\n}"},this.exampleAutoFocus={html:'<button mdc-button (click)="openAutoFocus(true)">Open focused initial element</button>\n<button mdc-button (click)="openAutoFocus(false)">Open no focused element</button>',ts:"".concat(this.exampleTS,"\n\n  openAutoFocus(autoFocus: boolean) {\n    const dialogRef = this.dialog.open(DialogAlert, {\n      autoFocus: autoFocus\n    });\n\n    dialogRef.afterClosed().subscribe(result => {\n      console.log(result);\n    });\n  }\n}"),"dialog-alert.html":this.exampleAlert["Dialog-Alert.html"],"dialog-alert.ts":this.exampleAlert["dialog-alert.ts"]},this.exampleConfirmation={html:'<button mdc-button (click)="openConfirmation()">Open Confirmation</button>',ts:"".concat(this.exampleTS,"\n\n  openConfirmation() {\n    const dialogRef = this.dialog.open(DialogConfirmation);\n\n    dialogRef.afterClosed().subscribe(result => {\n      console.log(result);\n    });\n  }\n}"),"dialog-confirmation.html":'<mdc-dialog>\n  <mdc-dialog-container>\n    <mdc-dialog-surface>\n      <mdc-dialog-title>Phone ringtone</mdc-dialog-title>\n      <mdc-dialog-content>\n        <mdc-list>\n          <mdc-list-item>\n            <mdc-radio mdcListItemGraphic name="demo-radio-set" checked></mdc-radio>\n            Never Gonna Give You Up\n          </mdc-list-item>\n          <mdc-list-item>\n            <mdc-radio mdcListItemGraphic name="demo-radio-set"></mdc-radio>\n            Hot Cross Buns\n          </mdc-list-item>\n          <mdc-list-item>\n            <mdc-radio mdcListItemGraphic name="demo-radio-set"></mdc-radio>\n            None\n          </mdc-list-item>\n        </mdc-list>\n      </mdc-dialog-content>\n      <mdc-dialog-actions>\n        <button mdcDialogButton mdcDialogAction="close">Cancel</button>\n        <button mdcDialogButton default mdcDialogAction="accept">Ok</button>\n      </mdc-dialog-actions>\n    </mdc-dialog-surface>\n  </mdc-dialog-container>\n</mdc-dialog>',"dialog-confirmation.ts":"@Component({\n  templateUrl: 'dialog-confirmation.html',\n})\nexport class DialogConfirmation {\n  constructor(public dialogRef: MdcDialogRef<DialogConfirmation>,\n    @Inject(MDC_DIALOG_DATA) public data: DialogData) { }\n}"},this.exampleScrollable={html:'<button mdc-button (click)="openScrollable()">Open Scrollable</button>',ts:"".concat(this.exampleTS,"\n\n  openScrollable() {\n    const dialogRef = this.dialog.open(DialogScrollable, {\n      scrollable: scrollable\n    });\n  }\n}"),"dialog-scrollable.html":'<mdc-dialog>\n  <mdc-dialog-container>\n    <mdc-dialog-surface>\n      <mdc-dialog-title>Read my novel?</mdc-dialog-title>\n      <mdc-dialog-content>\n        <p *ngFor="let lorem of lorems">{{lorem}}</p>\n      </mdc-dialog-content>\n      <mdc-dialog-actions>\n        <button mdcDialogButton mdcDialogAction="close">Decline</button>\n        <button mdcDialogButton mdcDialogAction="accept">Accept</button>\n      </mdc-dialog-actions>\n    </mdc-dialog-surface>\n  </mdc-dialog-container>\n</mdc-dialog>',"dialog-scrollable.ts":"@Component({\n  templateUrl: 'dialog-scrollable.html',\n})\nexport class DialogScrollable {\n  text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, incidunt. Debitis,\n  repudiandae dignissimos et quam velit autem mollitia tenetur,\n  eligendi rerum repellendus, explicabo ad aperiam vel ipsam! Exercitationem, voluptates molestiae.\n  Iusto reiciendis mollitia ab commodi. Animi maiores nesciunt officia enim corrupti officiis consequuntur vel,\n  consectetur eveniet ad dolorum reprehenderit similique qui deleniti ut sed explicabo id error at. Laudantium,\n  excepturi!`;\n  lorems = Array(5).fill(this.text);\n\n  constructor(public dialogRef: MdcDialogRef<DialogScrollable>) { }\n}"},this.exampleDialogForm={html:'<button mdc-button (click)="openForm()">Open Form</button>',ts:"".concat(this.exampleTS,"\n\n  openForm() {\n    const dialogRef = this.dialog.open(DialogForm);\n\n    dialogRef.afterClosed().subscribe(result => {\n      console.log(result);\n    });\n  }\n}"),"dialog-form.html":'<mdc-dialog>\n  <mdc-dialog-container>\n    <mdc-dialog-surface>\n      <mdc-dialog-title>Create profile</mdc-dialog-title>\n      <mdc-dialog-content>\n        <form [formGroup]="profileForm" id="profileForm" (ngSubmit)="submit()" autocomplete="off">\n          <mdc-form-field fluid>\n            <mdc-text-field formControlName="first" label="First name" outlined></mdc-text-field>\n            <mdc-helper-text persistent validation>*Required</mdc-helper-text>\n          </mdc-form-field>\n          <mdc-form-field fluid>\n            <mdc-text-field formControlName="last" label="Last name" outlined></mdc-text-field>\n            <mdc-helper-text persistent validation>*Required</mdc-helper-text>\n          </mdc-form-field>\n          <mdc-form-field fluid>\n            <mdc-text-field type="email" formControlName="email" label="Email" maxlength="254"\n             outlined></mdc-text-field>\n            <mdc-helper-text validation>*Required</mdc-helper-text>\n          </mdc-form-field>\n        </form>\n      </mdc-dialog-content>\n      <mdc-dialog-actions>\n        <button mdcDialogButton mdcDialogAction="close">Cancel</button>\n        <button mdcDialogButton form="profileForm">Create</button>\n      </mdc-dialog-actions>\n    </mdc-dialog-surface>\n  </mdc-dialog-container>\n</mdc-dialog>',"dialog-form.ts":"@Component({\n  templateUrl: 'dialog-form.html',\n})\nexport class DialogForm {\n  constructor(public dialogRef: MdcDialogRef<DialogConfirmation>,\n    @Inject(MDC_DIALOG_DATA) public data: DialogData) { }\n\n  profileForm = new FormGroup({\n    first: new FormControl('', Validators.required),\n    last: new FormControl('', Validators.required),\n    email: new FormControl('', [Validators.required, Validators.email])\n  });\n\n  submit(): void {\n    if (this.profileForm.invalid) {\n      return;\n    }\n\n    this.dialogRef.close();\n  }\n}"}}return _createClass(e,[{key:"openAlert",value:function(){this.dialog.open(P,{escapeToClose:!1,clickOutsideToClose:!1,buttonsStacked:!1,id:"my-dialog"}).afterClosed().subscribe((function(e){console.log("Dialog result: ".concat(e))}))}},{key:"openAutoFocus",value:function(e){this.dialog.open(P,{autoFocus:e}).afterClosed().subscribe((function(e){console.log("Dialog result: ".concat(e))}))}},{key:"openSimple",value:function(){this.dialog.open(j).afterClosed().subscribe((function(e){console.log("Dialog result: ".concat(e))}))}},{key:"openConfirmation",value:function(){var e=this.dialog.open(Z);e.afterOpened().subscribe((function(){e.componentInstance.dialogComponent.layout(),console.log("Dialog opened")})),e.afterClosed().subscribe((function(e){console.log("Dialog result: ".concat(e))}))}},{key:"openScrollable",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.dialog.open(U,{scrollable:e}).afterClosed().subscribe((function(e){console.log("Dialog result: ".concat(e))}))}},{key:"openForm",value:function(){this.dialog.open(z).afterClosed().subscribe((function(e){console.log("Dialog result: ".concat(e))}))}}]),e}()).\u0275fac=function(e){return new(e||_)(r.Lb(a.b))},_.\u0275cmp=r.Fb({type:_,selectors:[["ng-component"]],decls:38,vars:6,consts:[[1,"demo-content"],[1,"demo-content__headline"],["mdc-button","",3,"click"],[3,"example"]],template:function(e,t){1&e&&(r.Rb(0,"div",0),r.Rb(1,"h3",1),r.xc(2,"Alert"),r.Qb(),r.Rb(3,"button",2),r.Zb("click",(function(e){return t.openAlert()})),r.xc(4,"Open Alert"),r.Qb(),r.Mb(5,"example-viewer",3),r.Qb(),r.Rb(6,"div",0),r.Rb(7,"h3",1),r.xc(8,"Simple"),r.Qb(),r.Rb(9,"button",2),r.Zb("click",(function(e){return t.openSimple()})),r.xc(10,"Open Simple"),r.Qb(),r.Mb(11,"example-viewer",3),r.Qb(),r.Rb(12,"div",0),r.Rb(13,"h3",1),r.xc(14,"Confirmation"),r.Qb(),r.Rb(15,"button",2),r.Zb("click",(function(e){return t.openConfirmation()})),r.xc(16,"Open Confirmation"),r.Qb(),r.Mb(17,"example-viewer",3),r.Qb(),r.Rb(18,"div",0),r.Rb(19,"h3",1),r.xc(20,"Auto Focus"),r.Qb(),r.Rb(21,"button",2),r.Zb("click",(function(e){return t.openAutoFocus(!0)})),r.xc(22,"Open focused initial element"),r.Qb(),r.Rb(23,"button",2),r.Zb("click",(function(e){return t.openAutoFocus(!1)})),r.xc(24,"Open no focused element"),r.Qb(),r.Mb(25,"example-viewer",3),r.Qb(),r.Rb(26,"div",0),r.Rb(27,"h3",1),r.xc(28,"Scrollable"),r.Qb(),r.Rb(29,"button",2),r.Zb("click",(function(e){return t.openScrollable()})),r.xc(30,"Open Scrollable"),r.Qb(),r.Mb(31,"example-viewer",3),r.Qb(),r.Rb(32,"div",0),r.Rb(33,"h3",1),r.xc(34,"Form"),r.Qb(),r.Rb(35,"button",2),r.Zb("click",(function(e){return t.openForm()})),r.xc(36,"Open Form"),r.Qb(),r.Mb(37,"example-viewer",3),r.Qb()),2&e&&(r.Bb(5),r.ic("example",t.exampleAlert),r.Bb(6),r.ic("example",t.exampleSimple),r.Bb(6),r.ic("example",t.exampleConfirmation),r.Bb(8),r.ic("example",t.exampleAutoFocus),r.Bb(6),r.ic("example",t.exampleScrollable),r.Bb(6),r.ic("example",t.exampleDialogForm))},directives:[m.a,g.a],encapsulation:2}),_),P=((S=function e(t){_classCallCheck(this,e),this.dialogRef=t}).\u0275fac=function(e){return new(e||S)(r.Lb(p.a))},S.\u0275cmp=r.Fb({type:S,selectors:[["ng-component"]],decls:10,vars:0,consts:[["mdcDialogButton","","mdcDialogAction","close"],["mdcDialogButton","","mdcDialogAction","accept"]],template:function(e,t){1&e&&(r.Rb(0,"mdc-dialog"),r.Rb(1,"mdc-dialog-container"),r.Rb(2,"mdc-dialog-surface"),r.Rb(3,"mdc-dialog-title"),r.xc(4,"Discard draft?"),r.Qb(),r.Rb(5,"mdc-dialog-actions"),r.Rb(6,"button",0),r.xc(7,"Cancel"),r.Qb(),r.Rb(8,"button",1),r.xc(9,"Discard"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb())},directives:[l.a,f.d,f.g,f.h,f.b,f.c,f.a],encapsulation:2}),S),j=((F=function(){function e(t){_classCallCheck(this,e),this.dialogRef=t}return _createClass(e,[{key:"closeDialog",value:function(){this.dialogRef.close("Pizza")}}]),e}()).\u0275fac=function(e){return new(e||F)(r.Lb(p.a))},F.\u0275cmp=r.Fb({type:F,selectors:[["ng-component"]],decls:19,vars:0,consts:[["avatar",""],["cdkFocusInitial","",3,"click"],["mdcListItemGraphic",""],[3,"click"]],template:function(e,t){1&e&&(r.Rb(0,"mdc-dialog"),r.Rb(1,"mdc-dialog-container"),r.Rb(2,"mdc-dialog-surface"),r.Rb(3,"mdc-dialog-title"),r.xc(4,"Select an account"),r.Qb(),r.Rb(5,"mdc-dialog-content"),r.Rb(6,"mdc-list",0),r.Rb(7,"mdc-list-item",1),r.Zb("click",(function(e){return t.closeDialog()})),r.Rb(8,"mdc-icon",2),r.xc(9,"person"),r.Qb(),r.xc(10,"username@gmail.com "),r.Qb(),r.Rb(11,"mdc-list-item",3),r.Zb("click",(function(e){return t.closeDialog()})),r.Rb(12,"mdc-icon",2),r.xc(13,"person"),r.Qb(),r.xc(14,"user02@gmail.com "),r.Qb(),r.Rb(15,"mdc-list-item",3),r.Zb("click",(function(e){return t.closeDialog()})),r.Rb(16,"mdc-icon",2),r.xc(17,"add"),r.Qb(),r.xc(18,"add account "),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb())},directives:[l.a,f.d,f.g,f.h,f.e,h.a,R.b,x.b,R.c],encapsulation:2}),F),U=((M=function e(t){_classCallCheck(this,e),this.dialogRef=t,this.text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, incidunt. Debitis,\n  repudiandae dignissimos et quam velit autem mollitia tenetur,\n  eligendi rerum repellendus, explicabo ad aperiam vel ipsam! Exercitationem, voluptates molestiae.\n  Iusto reiciendis mollitia ab commodi. Animi maiores nesciunt officia enim corrupti officiis consequuntur vel,\n  consectetur eveniet ad dolorum reprehenderit similique qui deleniti ut sed explicabo id error at. Laudantium,\n  excepturi!",this.lorems=Array(5).fill(this.text)}).\u0275fac=function(e){return new(e||M)(r.Lb(p.a))},M.\u0275cmp=r.Fb({type:M,selectors:[["ng-component"]],decls:12,vars:1,consts:[[4,"ngFor","ngForOf"],["mdcDialogButton","","mdcDialogAction","close"],["mdcDialogButton","","mdcDialogAction","accept","cdkFocusInitial",""]],template:function(e,t){1&e&&(r.Rb(0,"mdc-dialog"),r.Rb(1,"mdc-dialog-container"),r.Rb(2,"mdc-dialog-surface"),r.Rb(3,"mdc-dialog-title"),r.xc(4,"Read my novel?"),r.Qb(),r.Rb(5,"mdc-dialog-content"),r.vc(6,A,2,1,"p",0),r.Qb(),r.Rb(7,"mdc-dialog-actions"),r.Rb(8,"button",1),r.xc(9,"Decline"),r.Qb(),r.Rb(10,"button",2),r.xc(11,"Accept"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb()),2&e&&(r.Bb(6),r.ic("ngForOf",t.lorems))},directives:[l.a,f.d,f.g,f.h,f.e,Q.j,f.b,f.c,f.a],encapsulation:2}),M),Z=((k=function e(t,o){_classCallCheck(this,e),this.dialogRef=t,this.data=o}).\u0275fac=function(e){return new(e||k)(r.Lb(p.a),r.Lb(a.a))},k.\u0275cmp=r.Fb({type:k,selectors:[["ng-component"]],viewQuery:function(e,t){var o;1&e&&r.Bc(l.a,!0),2&e&&r.nc(o=r.ac())&&(t.dialogComponent=o.first)},decls:21,vars:0,consts:[["mdcListItemGraphic","","name","demo-radio-set","checked",""],["mdcListItemGraphic","","name","demo-radio-set"],["mdcDialogButton","","mdcDialogAction","close"],["mdcDialogButton","","default","","mdcDialogAction","accept"]],template:function(e,t){1&e&&(r.Rb(0,"mdc-dialog"),r.Rb(1,"mdc-dialog-container"),r.Rb(2,"mdc-dialog-surface"),r.Rb(3,"mdc-dialog-title"),r.xc(4,"Phone ringtone"),r.Qb(),r.Rb(5,"mdc-dialog-content"),r.Rb(6,"mdc-list"),r.Rb(7,"mdc-list-item"),r.Mb(8,"mdc-radio",0),r.xc(9," Never Gonna Give You Up "),r.Qb(),r.Rb(10,"mdc-list-item"),r.Mb(11,"mdc-radio",1),r.xc(12," Hot Cross Buns "),r.Qb(),r.Rb(13,"mdc-list-item"),r.Mb(14,"mdc-radio",1),r.xc(15," None "),r.Qb(),r.Qb(),r.Qb(),r.Rb(16,"mdc-dialog-actions"),r.Rb(17,"button",2),r.xc(18,"Cancel"),r.Qb(),r.Rb(19,"button",3),r.xc(20,"Ok"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb())},directives:[l.a,f.d,f.g,f.h,f.e,h.a,R.b,D.b,R.c,f.b,f.c,f.a],encapsulation:2}),k),z=((w=function(){function e(t,o){_classCallCheck(this,e),this.dialogRef=t,this.data=o,this.profileForm=new c.e({first:new c.b("",c.q.required),last:new c.b("",c.q.required),email:new c.b("",[c.q.required,c.q.email])})}return _createClass(e,[{key:"submit",value:function(){this.profileForm.invalid||this.dialogRef.close()}}]),e}()).\u0275fac=function(e){return new(e||w)(r.Lb(p.a),r.Lb(a.a))},w.\u0275cmp=r.Fb({type:w,selectors:[["ng-component"]],decls:24,vars:1,consts:[["id","profileForm","autocomplete","off",2,"margin-top","5px",3,"formGroup","ngSubmit"],["fluid",""],["formControlName","first","label","First name","outlined",""],["persistent","","validation",""],["formControlName","last","label","Last name","outlined",""],["type","email","formControlName","email","label","Email","maxlength","254","outlined",""],["validation",""],["mdcDialogButton","","mdcDialogAction","close"],["mdcDialogButton","","form","profileForm"]],template:function(e,t){1&e&&(r.Rb(0,"mdc-dialog"),r.Rb(1,"mdc-dialog-container"),r.Rb(2,"mdc-dialog-surface"),r.Rb(3,"mdc-dialog-title"),r.xc(4,"Create profile"),r.Qb(),r.Rb(5,"mdc-dialog-content"),r.Rb(6,"form",0),r.Zb("ngSubmit",(function(e){return t.submit()})),r.Rb(7,"mdc-form-field",1),r.Mb(8,"mdc-text-field",2),r.Rb(9,"mdc-helper-text",3),r.xc(10,"*Required"),r.Qb(),r.Qb(),r.Rb(11,"mdc-form-field",1),r.Mb(12,"mdc-text-field",4),r.Rb(13,"mdc-helper-text",3),r.xc(14,"*Required"),r.Qb(),r.Qb(),r.Rb(15,"mdc-form-field",1),r.Mb(16,"mdc-text-field",5),r.Rb(17,"mdc-helper-text",6),r.xc(18,"*Required"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(19,"mdc-dialog-actions"),r.Rb(20,"button",7),r.xc(21,"Cancel"),r.Qb(),r.Rb(22,"button",8),r.xc(23,"Create"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb()),2&e&&(r.Bb(6),r.ic("formGroup",t.profileForm))},directives:[l.a,f.d,f.g,f.h,f.e,c.r,c.l,c.f,C.a,v.a,c.k,c.d,y.a,c.h,f.b,f.c,f.a],encapsulation:2}),w),W=[{path:"",component:$,children:[{path:"",redirectTo:"usage"},{path:"usage",component:q},{path:"api",component:G},{path:"sass",component:E},{path:"examples",component:N}]}],V=((L=function e(){_classCallCheck(this,e)}).\u0275mod=r.Jb({type:L}),L.\u0275inj=r.Ib({factory:function(e){return new(e||L)},imports:[[i.e.forChild(W)],i.e]}),L);o.d(t,"DialogModule",(function(){return H}));var Y,H=((Y=function e(){_classCallCheck(this,e)}).\u0275mod=r.Jb({type:Y}),Y.\u0275inj=r.Ib({factory:function(e){return new(e||Y)},imports:[[V,n.a]]}),Y)}}]);