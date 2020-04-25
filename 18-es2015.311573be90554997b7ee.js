(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{fPXS:function(e,n,c){"use strict";c.r(n),c.d(n,"FormFieldModule",(function(){return x}));var l=c("d2mR"),o=c("tyNb"),t=c("leug"),i=c("fXoL"),a=c("LuDt"),b=c("w0pw"),d=c("9UYg"),m=c("4G1d"),r=c("6D23"),f=c("dkiD"),p=c("uwiL"),s=c("ywDi"),u=c("CBIf");const w=[{path:"",component:(()=>{class e{ngOnInit(){this._componentViewer.template={title:"Form Fields",description:"MDC Form Field aligns an MDC Web form field (for example, a checkbox)\n      with its label and makes it RTL-aware. It also activates a ripple effect\n      upon interacting with the label.",references:[{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-form-field/README.md"}],code:"import {MdcFormFieldModule} from '@angular-mdc/web/form-field';",sass:"@use '@material/form-field/mdc-form-field';\n@use '@material/form-field/_index' as form-field;",tabs:[{label:"Api",route:"./api"},{label:"Examples",route:"./examples"}]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["ng-component"]],viewQuery:function(e,n){var c;1&e&&i.tc(t.b,!0),2&e&&i.nc(c=i.ac())&&(n._componentViewer=c.first)},decls:1,vars:0,template:function(e,n){1&e&&i.Mb(0,"component-viewer")},directives:[a.a],encapsulation:2}),e})(),children:[{path:"",redirectTo:"api"},{path:"api",component:(()=>{class e{ngOnInit(){this._componentApi.docApi={sections:[{header:"MdcFormField",selectors:["mdc-form-field"],exportedAs:"mdcFormField",categories:[{name:"Properties",items:[{name:"fluid: boolean",summary:"Width expands and contracts as the screen size changes."},{name:"alignEnd: boolean",summary:"Position the input after the label."},{name:"nowrap: boolean",summary:"Force label text to stay on a single line and ellipse the overflow text."},{name:"spaceBetween: boolean",summary:"Distributes space between label text and control."}]}]}]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["ng-component"]],viewQuery:function(e,n){var c;1&e&&i.tc(t.a,!0),2&e&&i.nc(c=i.ac())&&(n._componentApi=c.first)},decls:1,vars:0,template:function(e,n){1&e&&i.Mb(0,"component-api")},directives:[b.a],encapsulation:2}),e})()},{path:"examples",component:(()=>{class e{constructor(){this.exampleFluid={html:'<mdc-form-field fluid>\n  <mdc-text-field label="Fluid example"></mdc-text-field>\n</mdc-form-field>'},this.exampleNowrap={html:"<mdc-form-field nowrap>\n  <mdc-checkbox></mdc-checkbox>\n  <label>This some really really really long text</label>\n</mdc-form-field>"},this.exampleSpaceBetween={html:"<mdc-form-field spaceBetween>\n  <mdc-switch></mdc-switch>\n  <label>off/on</label>\n</mdc-form-field>"},this.exampleCheckbox={html:"<mdc-form-field>\n  <mdc-checkbox></mdc-checkbox>\n  <label>Checkbox</label>\n</mdc-form-field>"},this.exampleRadio={html:"<mdc-form-field>\n  <mdc-radio></mdc-radio>\n  <label>Radio</label>\n</mdc-form-field>"},this.exampleSwitch={html:"<mdc-form-field>\n  <mdc-switch></mdc-switch>\n  <label>off/on</label>\n</mdc-form-field>"}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["ng-component"]],decls:73,vars:13,consts:[[1,"demo-content"],[1,"demo-content__headline"],[1,"demo-layout__row"],["mdc-button","",3,"click"],["fluid",""],["demoFluid",""],["label","Fluid example"],[3,"example"],["nowrap","",2,"width","140px"],["demoNowrap",""],["spaceBetween","",2,"width","400px"],["demoSpaceBetween",""],["demofield",""],["formfieldradio",""],["demoradio1",""],["demoformswitch",""]],template:function(e,n){if(1&e){const e=i.Sb();i.Rb(0,"div",0),i.Rb(1,"h3",1),i.wc(2,"Fluid"),i.Qb(),i.Rb(3,"div",2),i.Rb(4,"button",3),i.Zb("click",(function(){i.pc(e);const n=i.oc(7);return n.fluid=!n.fluid})),i.wc(5),i.Qb(),i.Qb(),i.Rb(6,"mdc-form-field",4,5),i.Mb(8,"mdc-text-field",6),i.Qb(),i.Mb(9,"example-viewer",7),i.Qb(),i.Rb(10,"div",0),i.Rb(11,"h3",1),i.wc(12,"Nowrap"),i.Qb(),i.Rb(13,"div",2),i.Rb(14,"button",3),i.Zb("click",(function(){i.pc(e);const n=i.oc(17);return n.nowrap=!n.nowrap})),i.wc(15),i.Qb(),i.Qb(),i.Rb(16,"mdc-form-field",8,9),i.Mb(18,"mdc-checkbox"),i.Rb(19,"label"),i.wc(20,"This some really really really long text"),i.Qb(),i.Qb(),i.Mb(21,"example-viewer",7),i.Qb(),i.Rb(22,"div",0),i.Rb(23,"h3",1),i.wc(24,"Space between"),i.Qb(),i.Rb(25,"div",2),i.Rb(26,"button",3),i.Zb("click",(function(){i.pc(e);const n=i.oc(31);return n.spaceBetween=!n.spaceBetween})),i.wc(27),i.Qb(),i.Rb(28,"button",3),i.Zb("click",(function(){i.pc(e);const n=i.oc(31);return n.alignEnd=!n.alignEnd})),i.wc(29),i.Qb(),i.Qb(),i.Rb(30,"mdc-form-field",10,11),i.Mb(32,"mdc-switch"),i.Rb(33,"label"),i.wc(34,"off/on"),i.Qb(),i.Qb(),i.Mb(35,"example-viewer",7),i.Qb(),i.Rb(36,"div",0),i.Rb(37,"h3",1),i.wc(38,"Checkbox"),i.Qb(),i.Rb(39,"div",2),i.Rb(40,"button",3),i.Zb("click",(function(){i.pc(e);const n=i.oc(43);return n.alignEnd=!n.alignEnd})),i.wc(41),i.Qb(),i.Qb(),i.Rb(42,"mdc-form-field",null,12),i.Mb(44,"mdc-checkbox"),i.Rb(45,"label"),i.wc(46,"Checkbox"),i.Qb(),i.Qb(),i.Mb(47,"example-viewer",7),i.Qb(),i.Rb(48,"div",0),i.Rb(49,"h3",1),i.wc(50,"Radio"),i.Qb(),i.Rb(51,"div",2),i.Rb(52,"button",3),i.Zb("click",(function(){i.pc(e);const n=i.oc(55);return n.alignEnd=!n.alignEnd})),i.wc(53),i.Qb(),i.Qb(),i.Rb(54,"mdc-form-field",null,13),i.Mb(56,"mdc-radio",null,14),i.Rb(58,"label"),i.wc(59,"Radio"),i.Qb(),i.Qb(),i.Mb(60,"example-viewer",7),i.Qb(),i.Rb(61,"div",0),i.Rb(62,"h3",1),i.wc(63,"Switch"),i.Qb(),i.Rb(64,"div",2),i.Rb(65,"button",3),i.Zb("click",(function(){i.pc(e);const n=i.oc(68);return n.alignEnd=!n.alignEnd})),i.wc(66),i.Qb(),i.Qb(),i.Rb(67,"mdc-form-field",null,15),i.Mb(69,"mdc-switch"),i.Rb(70,"label"),i.wc(71,"off/on"),i.Qb(),i.Qb(),i.Mb(72,"example-viewer",7),i.Qb()}if(2&e){const e=i.oc(7),c=i.oc(17),l=i.oc(31),o=i.oc(43),t=i.oc(55),a=i.oc(68);i.Bb(5),i.yc("Fluid: ",e.fluid?"On":"Off",""),i.Bb(4),i.ic("example",n.exampleFluid),i.Bb(6),i.yc("Nowrap: ",c.nowrap?"On":"Off",""),i.Bb(6),i.ic("example",n.exampleNowrap),i.Bb(6),i.yc("Space between: ",l.spaceBetween?"On":"Off",""),i.Bb(2),i.yc("Align End: ",l.alignEnd?"On":"Off",""),i.Bb(6),i.ic("example",n.exampleSpaceBetween),i.Bb(6),i.yc("Align End: ",o.alignEnd?"On":"Off",""),i.Bb(6),i.ic("example",n.exampleCheckbox),i.Bb(6),i.yc("Align End: ",t.alignEnd?"On":"Off",""),i.Bb(7),i.ic("example",n.exampleRadio),i.Bb(6),i.yc("Align End: ",a.alignEnd?"On":"Off",""),i.Bb(6),i.ic("example",n.exampleSwitch)}},directives:[d.a,m.a,r.a,f.a,p.a,s.a,u.b],encapsulation:2}),e})()}]}];let h=(()=>{class e{}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(n){return new(n||e)},imports:[[o.e.forChild(w)],o.e]}),e})(),x=(()=>{class e{}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(n){return new(n||e)},imports:[[l.a,h]]}),e})()}}]);