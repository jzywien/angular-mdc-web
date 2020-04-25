function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{hBXH:function(e,t,r){"use strict";r.r(t);var n,s,o,i,a,c,u=r("d2mR"),b=r("tyNb"),l=r("leug"),d=r("fXoL"),p=r("LuDt"),f=r("5l+6"),h=r("9UYg"),m=r("f6B5"),_=r("sEbM"),R={CLOSED_CLASS:"mdc-linear-progress--closed",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed"},g={ARIA_VALUENOW:"aria-valuenow",BUFFER_SELECTOR:".mdc-linear-progress__buffer",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},v=r("mrSG"),y=r("tJqG"),C=function(e){function t(r){return e.call(this,v.a({},t.defaultAdapter,r))||this}return v.c(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return R},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return g},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},getBuffer:function(){return null},getPrimaryBar:function(){return null},hasClass:function(){return!1},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){},setStyle:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){this.isDeterminate_=!this.adapter_.hasClass(R.INDETERMINATE_CLASS),this.isReversed_=this.adapter_.hasClass(R.REVERSED_CLASS),this.progress_=0,this.buffer_=1},t.prototype.setDeterminate=function(e){this.isDeterminate_=e,this.isDeterminate_?(this.adapter_.removeClass(R.INDETERMINATE_CLASS),this.adapter_.setAttribute(g.ARIA_VALUENOW,this.progress_.toString()),this.setScale_(this.adapter_.getPrimaryBar(),this.progress_),this.setScale_(this.adapter_.getBuffer(),this.buffer_)):(this.isReversed_&&(this.adapter_.removeClass(R.REVERSED_CLASS),this.adapter_.forceLayout(),this.adapter_.addClass(R.REVERSED_CLASS)),this.adapter_.addClass(R.INDETERMINATE_CLASS),this.adapter_.removeAttribute(g.ARIA_VALUENOW),this.setScale_(this.adapter_.getPrimaryBar(),1),this.setScale_(this.adapter_.getBuffer(),1))},t.prototype.setProgress=function(e){this.progress_=e,this.isDeterminate_&&(this.setScale_(this.adapter_.getPrimaryBar(),e),this.adapter_.setAttribute(g.ARIA_VALUENOW,e.toString()))},t.prototype.setBuffer=function(e){this.buffer_=e,this.isDeterminate_&&this.setScale_(this.adapter_.getBuffer(),e)},t.prototype.setReverse=function(e){this.isReversed_=e,this.isDeterminate_||(this.adapter_.removeClass(R.INDETERMINATE_CLASS),this.adapter_.forceLayout(),this.adapter_.addClass(R.INDETERMINATE_CLASS)),this.isReversed_?this.adapter_.addClass(R.REVERSED_CLASS):this.adapter_.removeClass(R.REVERSED_CLASS)},t.prototype.open=function(){this.adapter_.removeClass(R.CLOSED_CLASS)},t.prototype.close=function(){this.adapter_.addClass(R.CLOSED_CLASS)},t.prototype.setScale_=function(e,t){if(e){var r="scaleX("+t+")";this.adapter_.setStyle(e,Object(y.b)(window,"transform"),r)}},t}(r("m9I9").a),Q=r("Hj8T"),S=((n=function(e){function t(e,r,n){var s;return _classCallCheck(this,t),(s=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,n)))._platform=e,s._changeDetectorRef=r,s.elementRef=n,s._initialized=!1,s.label=void 0,s._progress=0,s._determinate=!1,s._buffer=0,s._reversed=!1,s._root=s.elementRef.nativeElement,s}return _inherits(t,e),_createClass(t,[{key:"getDefaultFoundation",value:function(){var e=this;return new C({addClass:function(t){return e._root.classList.add(t)},forceLayout:function(){return e._root.offsetWidth},getPrimaryBar:function(){return e._root.querySelector(g.PRIMARY_BAR_SELECTOR)},getBuffer:function(){return e._root.querySelector(g.BUFFER_SELECTOR)},hasClass:function(t){return e._root.classList.contains(t)},removeClass:function(t){return e._root.classList.remove(t)},setStyle:function(e,t,r){return e.style.setProperty(t,r)},removeAttribute:function(t){return e._root.removeAttribute(t)},setAttribute:function(t,r){return e._root.setAttribute(t,r)}})}},{key:"ngOnInit",value:function(){this._platform.isBrowser&&(this._initialized=!0,this._foundation.init(),this._syncProgressWithFoundation(),this._syncBufferWithFoundation(),this._syncDeterminateWithFoundation(),this._syncReversedWithFoundation(),this._changeDetectorRef.markForCheck())}},{key:"ngOnChanges",value:function(e){this._initialized&&(e.progress&&this._syncProgressWithFoundation(),e.buffer&&this._syncBufferWithFoundation(),e.determinate&&this._syncDeterminateWithFoundation(),e.reversed&&this._syncReversedWithFoundation())}},{key:"open",value:function(){this._foundation.open()}},{key:"close",value:function(){this._foundation.close()}},{key:"_syncProgressWithFoundation",value:function(){this._foundation.setProgress(this.progress)}},{key:"_syncBufferWithFoundation",value:function(){this._foundation.setBuffer(this.buffer)}},{key:"_syncDeterminateWithFoundation",value:function(){this._foundation.setDeterminate(this.determinate)}},{key:"_syncReversedWithFoundation",value:function(){this._foundation.setReverse(this.reversed)}},{key:"progress",get:function(){return this._progress},set:function(e){this._progress=Object(m.e)(e)}},{key:"determinate",get:function(){return this._determinate},set:function(e){this._determinate=Object(m.b)(e)}},{key:"buffer",get:function(){return this._buffer},set:function(e){this._buffer=Object(m.e)(e)}},{key:"reversed",get:function(){return this._reversed},set:function(e){this._reversed=Object(m.b)(e),this._syncReversedWithFoundation()}}]),t}(_.a)).\u0275fac=function(e){return new(e||n)(d.Lb(Q.a),d.Lb(d.h),d.Lb(d.l))},n.\u0275cmp=d.Fb({type:n,selectors:[["mdc-linear-progress"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"mdc-linear-progress"],hostVars:3,hostBindings:function(e,t){2&e&&(d.Cb("aria-label",t.label),d.Db("mdc-linear-progress--indeterminate",!t.determinate))},inputs:{label:"label",progress:"progress",determinate:"determinate",buffer:"buffer",reversed:"reversed"},exportAs:["mdcLinearProgress"],features:[d.yb,d.zb()],decls:6,vars:0,consts:[[1,"mdc-linear-progress__buffering-dots"],[1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],[1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(e,t){1&e&&(d.Mb(0,"div",0),d.Mb(1,"div",1),d.Rb(2,"div",2),d.Mb(3,"span",3),d.Qb(),d.Rb(4,"div",4),d.Mb(5,"span",3),d.Qb())},encapsulation:2,changeDetection:0}),n),E=r("dkiD"),x=[{path:"",component:(a=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this._componentViewer.template={title:"Linear Progress",description:"Progress indicators express an unspecified wait time or display the length of a process.",references:[{name:"Material Design guidelines: Progress Activity",url:"https://material.io/components/progress-indicators/"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-linear-progress/README.md"}],code:"import {MdcLinearProgressModule} from '@angular-mdc/web';",sass:"@use '@material/linear-progress/mdc-linear-progress';\n@use '@material/linear-progress';"}}}]),e}(),a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=d.Fb({type:a,selectors:[["ng-component"]],viewQuery:function(e,t){var r;1&e&&d.tc(l.a,!0),2&e&&d.nc(r=d.ac())&&(t._componentViewer=r.first)},decls:1,vars:0,template:function(e,t){1&e&&d.Mb(0,"component-viewer")},directives:[p.a],encapsulation:2}),a),children:[{path:"",redirectTo:"api"},{path:"api",component:(i=function e(){_classCallCheck(this,e)},i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=d.Fb({type:i,selectors:[["ng-component"]],decls:59,vars:0,consts:[[1,"docs-api"],["mdcHeadline6",""],[1,"markdown-code"],["mdcSubtitle2",""]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Rb(1,"h3",1),d.xc(2,"MdcLinearProgress"),d.Qb(),d.Rb(3,"p"),d.xc(4," Selector: "),d.Rb(5,"span",2),d.xc(6,"mdc-linear-progress"),d.Qb(),d.Qb(),d.xc(7," Exported as: "),d.Rb(8,"span",2),d.xc(9,"mdcLinearProgress"),d.Qb(),d.Rb(10,"h4",3),d.xc(11,"Properties"),d.Qb(),d.Rb(12,"table"),d.Rb(13,"thead"),d.Rb(14,"tr"),d.Rb(15,"th"),d.xc(16,"Name"),d.Qb(),d.Rb(17,"th"),d.xc(18,"Description"),d.Qb(),d.Qb(),d.Qb(),d.Rb(19,"tbody"),d.Rb(20,"tr"),d.Rb(21,"td"),d.xc(22,"determinate: boolean"),d.Qb(),d.Rb(23,"td"),d.xc(24,"Puts the linear progress indicator in an determinate or indeterminate state."),d.Qb(),d.Qb(),d.Rb(25,"tr"),d.Rb(26,"td"),d.xc(27,"reversed: boolean"),d.Qb(),d.Rb(28,"td"),d.xc(29,"Reverses the direction of the linear progress indicator."),d.Qb(),d.Qb(),d.Rb(30,"tr"),d.Rb(31,"td"),d.xc(32,"progress: number"),d.Qb(),d.Rb(33,"td"),d.xc(34,"Sets the progress bar to this value. Value should be between [0, 1]."),d.Qb(),d.Qb(),d.Rb(35,"tr"),d.Rb(36,"td"),d.xc(37,"buffer: number"),d.Qb(),d.Rb(38,"td"),d.xc(39,"Sets the buffer bar to this value. Value should be between [0, 1]."),d.Qb(),d.Qb(),d.Rb(40,"tr"),d.Rb(41,"td"),d.xc(42,"label: string"),d.Qb(),d.Rb(43,"td"),d.xc(44,"Label indicating how the progress bar should be announced to the user."),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Rb(45,"h4",3),d.xc(46,"Methods"),d.Qb(),d.Rb(47,"table"),d.Rb(48,"tbody"),d.Rb(49,"tr"),d.Rb(50,"td"),d.xc(51,"open()"),d.Qb(),d.Rb(52,"td"),d.xc(53,"Puts the component in the open state."),d.Qb(),d.Qb(),d.Rb(54,"tr"),d.Rb(55,"td"),d.xc(56,"close()"),d.Qb(),d.Rb(57,"td"),d.xc(58,"Puts the component in the closed state."),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb())},directives:[f.i,f.l],encapsulation:2}),i)},{path:"sass",component:(o=function e(){_classCallCheck(this,e)},o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=d.Fb({type:o,selectors:[["ng-component"]],decls:23,vars:0,consts:[[1,"docs-api"],["mdcSubtitle2",""]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Rb(1,"h4",1),d.xc(2,"Sass Mixins"),d.Qb(),d.Rb(3,"table"),d.Rb(4,"thead"),d.Rb(5,"tr"),d.Rb(6,"th"),d.xc(7,"Mixin"),d.Qb(),d.Rb(8,"th"),d.xc(9,"Description"),d.Qb(),d.Qb(),d.Qb(),d.Rb(10,"tbody"),d.Rb(11,"tr"),d.Rb(12,"td"),d.Rb(13,"code"),d.xc(14,"bar-color($color)"),d.Qb(),d.Qb(),d.Rb(15,"td"),d.xc(16,"Sets the color of the progress bar"),d.Qb(),d.Qb(),d.Rb(17,"tr"),d.Rb(18,"td"),d.Rb(19,"code"),d.xc(20,"buffer-color($color)"),d.Qb(),d.Qb(),d.Rb(21,"td"),d.xc(22,"Sets the color of the buffer bar and dots"),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb())},directives:[f.l],encapsulation:2}),o)},{path:"examples",component:(s=function(){function e(){_classCallCheck(this,e),this.exampleIndeterminate={html:"<mdc-linear-progress></mdc-linear-progress>",sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_linear-progress.scss"},this.exampleDeterminate={html:'<mdc-linear-progress determinate [progress]="0.5" [buffer]="0.75"></mdc-linear-progress>',sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_linear-progress.scss"}}return _createClass(e,[{key:"alternateColors",value:function(e){var t="demo-linear-progress--custom";e.elementRef.nativeElement.classList.contains(t)?e.elementRef.nativeElement.classList.remove(t):e.elementRef.nativeElement.classList.add(t)}}]),e}(),s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=d.Fb({type:s,selectors:[["ng-component"]],decls:30,vars:4,consts:[[1,"demo-content"],[1,"demo-content__headline"],[1,"demo-layout__row"],["mdc-button","",3,"click"],["lp",""],[3,"example"],["determinate","",3,"progress","buffer"],["deter",""]],template:function(e,t){if(1&e){var r=d.Sb();d.Rb(0,"div",0),d.Rb(1,"h3",1),d.xc(2,"Indeterminate Progress"),d.Qb(),d.Rb(3,"div",2),d.Rb(4,"button",3),d.Zb("click",(function(){d.pc(r);var e=d.oc(13);return e.reversed=!e.reversed})),d.xc(5,"Reverse"),d.Qb(),d.Rb(6,"button",3),d.Zb("click",(function(){return d.pc(r),d.oc(13).open()})),d.xc(7,"Open"),d.Qb(),d.Rb(8,"button",3),d.Zb("click",(function(){return d.pc(r),d.oc(13).close()})),d.xc(9,"Close"),d.Qb(),d.Rb(10,"button",3),d.Zb("click",(function(){d.pc(r);var e=d.oc(13);return t.alternateColors(e)})),d.xc(11,"Alternate Colors"),d.Qb(),d.Qb(),d.Mb(12,"mdc-linear-progress",null,4),d.Mb(14,"example-viewer",5),d.Qb(),d.Rb(15,"div",0),d.Rb(16,"h3",1),d.xc(17,"Determinate Progress"),d.Qb(),d.Rb(18,"div",2),d.Rb(19,"button",3),d.Zb("click",(function(){d.pc(r);var e=d.oc(28);return e.reversed=!e.reversed})),d.xc(20,"Reverse"),d.Qb(),d.Rb(21,"button",3),d.Zb("click",(function(){return d.pc(r),d.oc(28).open()})),d.xc(22,"Open"),d.Qb(),d.Rb(23,"button",3),d.Zb("click",(function(){return d.pc(r),d.oc(28).close()})),d.xc(24,"Close"),d.Qb(),d.Rb(25,"button",3),d.Zb("click",(function(){d.pc(r);var e=d.oc(28);return t.alternateColors(e)})),d.xc(26,"Alternate Colors"),d.Qb(),d.Qb(),d.Mb(27,"mdc-linear-progress",6,7),d.Mb(29,"example-viewer",5),d.Qb()}2&e&&(d.Bb(14),d.ic("example",t.exampleIndeterminate),d.Bb(13),d.ic("progress",.5)("buffer",.75),d.Bb(2),d.ic("example",t.exampleDeterminate))},directives:[h.a,S,E.a],encapsulation:2}),s)}]}],A=((c=function e(){_classCallCheck(this,e)}).\u0275mod=d.Jb({type:c}),c.\u0275inj=d.Ib({factory:function(e){return new(e||c)},imports:[[b.e.forChild(x)],b.e]}),c);r.d(t,"LinearProgressModule",(function(){return w}));var L,w=((L=function e(){_classCallCheck(this,e)}).\u0275mod=d.Jb({type:L}),L.\u0275inj=d.Ib({factory:function(e){return new(e||L)},imports:[[u.a,A]]}),L)}}]);