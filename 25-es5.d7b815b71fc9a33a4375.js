function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){return function(){var t,n=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var r=_getPrototypeOf(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"1lN2":function(e,t,n){"use strict";n.r(t),n.d(t,"SliderModule",(function(){return J}));var r=n("d2mR"),i=n("tyNb"),a=n("leug"),o=n("fXoL"),s=n("LuDt"),c=n("5l+6"),u=n("mrSG"),l=n("3Pt+"),d=n("f6B5"),b=n("Hj8T"),h=n("XNiG"),m=n("xgIS"),p=n("3UWI"),f=n("1G5W"),_=n("sEbM"),v=n("tJqG"),g=n("m9I9"),y={ACTIVE:"mdc-slider--active",DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",FOCUS:"mdc-slider--focus",HAS_TRACK_MARKER:"mdc-slider--display-markers",IN_TRANSIT:"mdc-slider--in-transit",IS_DISCRETE:"mdc-slider--discrete"},R={ARIA_DISABLED:"aria-disabled",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",CHANGE_EVENT:"MDCSlider:change",INPUT_EVENT:"MDCSlider:input",PIN_VALUE_MARKER_SELECTOR:".mdc-slider__pin-value-marker",STEP_DATA_ATTR:"data-step",THUMB_CONTAINER_SELECTOR:".mdc-slider__thumb-container",TRACK_MARKER_CONTAINER_SELECTOR:".mdc-slider__track-marker-container",TRACK_SELECTOR:".mdc-slider__track"},w={PAGE_FACTOR:4},k=["mousedown","pointerdown","touchstart"],C=["mouseup","pointerup","touchend"],Q={mousedown:"mousemove",pointerdown:"pointermove",touchstart:"touchmove"},x=function(e){function t(n){var r=e.call(this,Object(u.a)(Object(u.a)({},t.defaultAdapter),n))||this;return r.savedTabIndex_=NaN,r.active_=!1,r.inTransit_=!1,r.isDiscrete_=!1,r.hasTrackMarker_=!1,r.handlingThumbTargetEvt_=!1,r.min_=0,r.max_=100,r.step_=0,r.value_=0,r.disabled_=!1,r.preventFocusState_=!1,r.thumbContainerPointerHandler_=function(){return r.handlingThumbTargetEvt_=!0},r.interactionStartHandler_=function(e){return r.handleDown_(e)},r.keydownHandler_=function(e){return r.handleKeydown_(e)},r.focusHandler_=function(){return r.handleFocus_()},r.blurHandler_=function(){return r.handleBlur_()},r.resizeHandler_=function(){return r.layout()},r}return Object(u.c)(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return y},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return R},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return w},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},getAttribute:function(){return null},setAttribute:function(){},removeAttribute:function(){},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabIndex:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerThumbContainerInteractionHandler:function(){},deregisterThumbContainerInteractionHandler:function(){},registerBodyInteractionHandler:function(){},deregisterBodyInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},notifyInput:function(){},notifyChange:function(){},setThumbContainerStyleProperty:function(){},setTrackStyleProperty:function(){},setMarkerValue:function(){},setTrackMarkers:function(){},isRTL:function(){return!1}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=this;this.isDiscrete_=this.adapter_.hasClass(y.IS_DISCRETE),this.hasTrackMarker_=this.adapter_.hasClass(y.HAS_TRACK_MARKER),k.forEach((function(t){e.adapter_.registerInteractionHandler(t,e.interactionStartHandler_),e.adapter_.registerThumbContainerInteractionHandler(t,e.thumbContainerPointerHandler_)})),this.adapter_.registerInteractionHandler("keydown",this.keydownHandler_),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_),this.adapter_.registerResizeHandler(this.resizeHandler_),this.layout(),this.isDiscrete_&&0===this.getStep()&&(this.step_=1)},t.prototype.destroy=function(){var e=this;k.forEach((function(t){e.adapter_.deregisterInteractionHandler(t,e.interactionStartHandler_),e.adapter_.deregisterThumbContainerInteractionHandler(t,e.thumbContainerPointerHandler_)})),this.adapter_.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.deregisterResizeHandler(this.resizeHandler_)},t.prototype.setupTrackMarker=function(){this.isDiscrete_&&this.hasTrackMarker_&&0!==this.getStep()&&this.adapter_.setTrackMarkers(this.getStep(),this.getMax(),this.getMin())},t.prototype.layout=function(){this.rect_=this.adapter_.computeBoundingRect(),this.updateUIForCurrentValue_()},t.prototype.getValue=function(){return this.value_},t.prototype.setValue=function(e){this.setValue_(e,!1)},t.prototype.getMax=function(){return this.max_},t.prototype.setMax=function(e){if(e<this.min_)throw new Error("Cannot set max to be less than the slider's minimum value");this.max_=e,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(R.ARIA_VALUEMAX,String(this.max_)),this.setupTrackMarker()},t.prototype.getMin=function(){return this.min_},t.prototype.setMin=function(e){if(e>this.max_)throw new Error("Cannot set min to be greater than the slider's maximum value");this.min_=e,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(R.ARIA_VALUEMIN,String(this.min_)),this.setupTrackMarker()},t.prototype.getStep=function(){return this.step_},t.prototype.setStep=function(e){if(e<0)throw new Error("Step cannot be set to a negative number");this.isDiscrete_&&("number"!=typeof e||e<1)&&(e=1),this.step_=e,this.setValue_(this.value_,!1,!0),this.setupTrackMarker()},t.prototype.isDisabled=function(){return this.disabled_},t.prototype.setDisabled=function(e){this.disabled_=e,this.toggleClass_(y.DISABLED,this.disabled_),this.disabled_?(this.savedTabIndex_=this.adapter_.getTabIndex(),this.adapter_.setAttribute(R.ARIA_DISABLED,"true"),this.adapter_.removeAttribute("tabindex")):(this.adapter_.removeAttribute(R.ARIA_DISABLED),isNaN(this.savedTabIndex_)||this.adapter_.setAttribute("tabindex",String(this.savedTabIndex_)))},t.prototype.handleDown_=function(e){var t=this;if(!this.disabled_){this.preventFocusState_=!0,this.setInTransit_(!this.handlingThumbTargetEvt_),this.handlingThumbTargetEvt_=!1,this.setActive_(!0);var n=function(e){t.handleMove_(e)},r=Q[e.type],i=function e(){t.handleUp_(),t.adapter_.deregisterBodyInteractionHandler(r,n),C.forEach((function(n){return t.adapter_.deregisterBodyInteractionHandler(n,e)}))};this.adapter_.registerBodyInteractionHandler(r,n),C.forEach((function(e){return t.adapter_.registerBodyInteractionHandler(e,i)})),this.setValueFromEvt_(e)}},t.prototype.handleMove_=function(e){e.preventDefault(),this.setValueFromEvt_(e)},t.prototype.handleUp_=function(){this.setActive_(!1),this.adapter_.notifyChange()},t.prototype.getClientX_=function(e){return e.targetTouches&&e.targetTouches.length>0?e.targetTouches[0].clientX:e.clientX},t.prototype.setValueFromEvt_=function(e){var t=this.getClientX_(e),n=this.computeValueFromClientX_(t);this.setValue_(n,!0)},t.prototype.computeValueFromClientX_=function(e){var t=this.max_,n=this.min_,r=(e-this.rect_.left)/this.rect_.width;return this.adapter_.isRTL()&&(r=1-r),n+r*(t-n)},t.prototype.handleKeydown_=function(e){var t=this.getKeyId_(e),n=this.getValueForKeyId_(t);isNaN(n)||(e.preventDefault(),this.adapter_.addClass(y.FOCUS),this.setValue_(n,!0),this.adapter_.notifyChange())},t.prototype.getKeyId_=function(e){return"ArrowLeft"===e.key||37===e.keyCode?"ArrowLeft":"ArrowRight"===e.key||39===e.keyCode?"ArrowRight":"ArrowUp"===e.key||38===e.keyCode?"ArrowUp":"ArrowDown"===e.key||40===e.keyCode?"ArrowDown":"Home"===e.key||36===e.keyCode?"Home":"End"===e.key||35===e.keyCode?"End":"PageUp"===e.key||33===e.keyCode?"PageUp":"PageDown"===e.key||34===e.keyCode?"PageDown":""},t.prototype.getValueForKeyId_=function(e){var t=this.step_||(this.max_-this.min_)/100;switch(this.adapter_.isRTL()&&("ArrowLeft"===e||"ArrowRight"===e)&&(t=-t),e){case"ArrowLeft":case"ArrowDown":return this.value_-t;case"ArrowRight":case"ArrowUp":return this.value_+t;case"Home":return this.min_;case"End":return this.max_;case"PageUp":return this.value_+t*w.PAGE_FACTOR;case"PageDown":return this.value_-t*w.PAGE_FACTOR;default:return NaN}},t.prototype.handleFocus_=function(){this.preventFocusState_||this.adapter_.addClass(y.FOCUS)},t.prototype.handleBlur_=function(){this.preventFocusState_=!1,this.adapter_.removeClass(y.FOCUS)},t.prototype.setValue_=function(e,t,n){if(void 0===n&&(n=!1),e!==this.value_||n){var r=this.min_,i=this.max_;this.step_&&!(e===r||e===i)&&(e=this.quantize_(e)),e<r?e=r:e>i&&(e=i),this.value_=e=e||0,this.adapter_.setAttribute(R.ARIA_VALUENOW,String(this.value_)),this.updateUIForCurrentValue_(),t&&(this.adapter_.notifyInput(),this.isDiscrete_&&this.adapter_.setMarkerValue(e))}},t.prototype.quantize_=function(e){return Math.round(e/this.step_)*this.step_},t.prototype.updateUIForCurrentValue_=function(){var e=this,t=this.min_,n=(this.value_-t)/(this.max_-t),r=n*this.rect_.width;this.adapter_.isRTL()&&(r=this.rect_.width-r);var i="undefined"!=typeof window,a=i?Object(v.b)(window,"transform"):"transform",o=i?Object(v.a)(window,"transitionend"):"transitionend";if(this.inTransit_){this.adapter_.registerThumbContainerInteractionHandler(o,(function t(){e.setInTransit_(!1),e.adapter_.deregisterThumbContainerInteractionHandler(o,t)}))}requestAnimationFrame((function(){e.adapter_.setThumbContainerStyleProperty(a,"translateX("+r+"px) translateX(-50%)"),e.adapter_.setTrackStyleProperty(a,"scaleX("+n+")")}))},t.prototype.setActive_=function(e){this.active_=e,this.toggleClass_(y.ACTIVE,this.active_)},t.prototype.setInTransit_=function(e){this.inTransit_=e,this.toggleClass_(y.IN_TRANSIT,this.inTransit_)},t.prototype.toggleClass_=function(e,t){t?this.adapter_.addClass(e):this.adapter_.removeClass(e)},t}(g.a),M=n("ofXK"),T=["thumbcontainer"],I=["sliderThumb"],A=["track"],E=["pin"],S=["markercontainer"];function D(e,t){1&e&&o.Mb(0,"div",11,12)}function V(e,t){1&e&&(o.Rb(0,"div",13),o.Mb(1,"span",14,15),o.Qb())}var O,H,B,L,F,P,j,N={provide:l.h,useExisting:Object(o.T)((function(){return U})),multi:!0},z=function e(t,n){_classCallCheck(this,e),this.source=t,this.value=n},U=((O=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r,i,a,s){var c;return _classCallCheck(this,n),(c=t.call(this,a))._platform=e,c._ngZone=r,c._changeDetectorRef=i,c.elementRef=a,c._destroyed=new h.a,c._initialized=!1,c.tabIndex=0,c._discrete=!1,c._markers=!1,c._min=0,c._max=100,c._step=1,c._value=null,c._disabled=!1,c.change=new o.n,c.input=new o.n,c.valueChange=new o.n,c._onTouched=function(){},c._controlValueAccessorChangeFn=function(){},c.tabIndex=parseInt(s,10)||0,c._root=c.elementRef.nativeElement,c}return _createClass(n,[{key:"getDefaultFoundation",value:function(){var e=this;return new x({hasClass:function(t){return e._root.classList.contains(t)},addClass:function(t){return e._root.classList.add(t)},removeClass:function(t){return e._root.classList.remove(t)},getAttribute:function(t){return e._root.getAttribute(t)},setAttribute:function(t,n){return e._root.setAttribute(t,n)},removeAttribute:function(t){return e._root.removeAttribute(t)},computeBoundingRect:function(){return e._root.getBoundingClientRect()},getTabIndex:function(){return e._root.tabIndex},registerInteractionHandler:function(t,n){return e._root.addEventListener(t,n)},deregisterInteractionHandler:function(t,n){return e._root.removeEventListener(t,n)},registerThumbContainerInteractionHandler:function(t,n){e._ngZone.runOutsideAngular((function(){e.thumbContainer.nativeElement.addEventListener(t,n,Object(b.d)())}))},deregisterThumbContainerInteractionHandler:function(t,n){return e.thumbContainer.nativeElement.removeEventListener(t,n,Object(b.d)())},registerBodyInteractionHandler:function(e,t){return document.body.addEventListener(e,t)},deregisterBodyInteractionHandler:function(e,t){return document.body.removeEventListener(e,t)},registerResizeHandler:function(){},deregisterResizeHandler:function(){},notifyInput:function(){var t=e._foundation.getValue();t!==e.value&&(e.value=t,e.input.emit(e._createChangeEvent(t)))},notifyChange:function(){e.value=e._foundation.getValue(),e._emitChangeEvent(e.value)},setThumbContainerStyleProperty:function(t,n){return e.thumbContainer.nativeElement.style.setProperty(t,n)},setTrackStyleProperty:function(t,n){return e.track.nativeElement.style.setProperty(t,n)},setMarkerValue:function(t){e._changeDetectorRef.markForCheck(),e.pinValueMarker.nativeElement.innerText=null!==t?t.toString():null},setTrackMarkers:function(t,n,r){return e.trackMarkerContainer.nativeElement.style.setProperty("background",e._getTrackMarkersBackground(t,r,n))},isRTL:function(){return!!e._platform.isBrowser&&"rtl"===window.getComputedStyle(e._root).getPropertyValue("direction")}})}},{key:"ngOnChanges",value:function(e){this._initialized&&(e.step&&this._syncStepWithFoundation(),e.max&&this._syncMaxWithFoundation(),e.min&&this._syncMinWithFoundation(),e.value&&this._syncValueWithFoundation(),(e.markers||e.discrete)&&this._refreshTrackMarkers())}},{key:"_asyncInitializeFoundation",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._foundation.init();case 1:case"end":return e.stop()}}),e,this)})))}},{key:"ngAfterViewInit",value:function(){var e=this;this._platform.isBrowser&&(this._initialized=!0,this._asyncInitializeFoundation().then((function(){e._syncStepWithFoundation(),e._syncMaxWithFoundation(),e._syncMinWithFoundation(),e._syncValueWithFoundation(),e._foundation.setupTrackMarker(),e._loadListeners(),e._changeDetectorRef.markForCheck()})))}},{key:"ngOnDestroy",value:function(){this._destroyed.next(),this._destroyed.complete(),this.destroy()}},{key:"writeValue",value:function(e){this.value=e,this._syncValueWithFoundation()}},{key:"registerOnChange",value:function(e){this._controlValueAccessorChangeFn=e}},{key:"registerOnTouched",value:function(e){this._onTouched=e}},{key:"setDisabledState",value:function(e){this._disabled=Object(d.b)(e),this._foundation.setDisabled(e),this._changeDetectorRef.markForCheck()}},{key:"layout",value:function(){this._foundation.layout()}},{key:"_loadListeners",value:function(){var e=this;this._ngZone.runOutsideAngular((function(){return Object(m.a)(window,"resize").pipe(Object(p.a)(16),Object(f.a)(e._destroyed)).subscribe((function(){return e.layout()}))}))}},{key:"_syncValueWithFoundation",value:function(){this._foundation.setValue(this.value)}},{key:"_syncStepWithFoundation",value:function(){this._foundation.setStep(this.step)}},{key:"_syncMinWithFoundation",value:function(){this._foundation.setMin(this.min)}},{key:"_syncMaxWithFoundation",value:function(){this._foundation.setMax(this.max)}},{key:"_createChangeEvent",value:function(e){return new z(this,e)}},{key:"_emitChangeEvent",value:function(e){this._controlValueAccessorChangeFn(e),this.valueChange.emit(e),this.change.emit(this._createChangeEvent(e))}},{key:"_getTrackMarkersBackground",value:function(e,t,n){var r=e.toLocaleString();return"linear-gradient(to right, currentColor 2px, transparent 0) ".concat("0 center / calc((100% - 2px) / ".concat("((".concat(n.toLocaleString()," - ").concat(t.toLocaleString(),") / ").concat(r,")"),") 100% repeat-x"))}},{key:"_refreshTrackMarkers",value:function(){this._foundation.hasTrackMarker_=this.markers,this._foundation.setupTrackMarker()}},{key:"discrete",get:function(){return this._discrete},set:function(e){this._discrete=Object(d.b)(e)}},{key:"markers",get:function(){return this._markers},set:function(e){this._markers=Object(d.b)(e)}},{key:"min",get:function(){return this._min},set:function(e){var t=Object(d.e)(e);t!==this._min&&(this._min=t)}},{key:"max",get:function(){return this._max},set:function(e){var t=Object(d.e)(e);t!==this._max&&(this._max=t)}},{key:"step",get:function(){return this._step},set:function(e){var t=Object(d.e)(e,this._step);t!==this._step&&(this._step=t)}},{key:"value",get:function(){return null===this._value&&(this.value=this.min),this._value},set:function(e){this._value=Object(d.e)(e,null)}},{key:"disabled",get:function(){return this._disabled},set:function(e){this.setDisabledState(e)}}]),n}(_.a)).\u0275fac=function(e){return new(e||O)(o.Lb(b.a),o.Lb(o.z),o.Lb(o.h),o.Lb(o.l),o.Wb("tabindex"))},O.\u0275cmp=o.Fb({type:O,selectors:[["mdc-slider"]],viewQuery:function(e,t){var n;1&e&&(o.Ac(T,!0),o.Ac(I,!0),o.Ac(A,!0),o.Ac(E,!0),o.Ac(S,!0)),2&e&&(o.nc(n=o.ac())&&(t.thumbContainer=n.first),o.nc(n=o.ac())&&(t._sliderThumb=n.first),o.nc(n=o.ac())&&(t.track=n.first),o.nc(n=o.ac())&&(t.pinValueMarker=n.first),o.nc(n=o.ac())&&(t.trackMarkerContainer=n.first))},hostAttrs:["role","slider","aria-orientation","horizontal",1,"mdc-slider"],hostVars:5,hostBindings:function(e,t){1&e&&o.Zb("blur",(function(){return t._onTouched()})),2&e&&(o.Cb("tabindex",t.tabIndex||0),o.Db("mdc-slider--discrete",t.discrete)("mdc-slider--display-markers",t.markers&&t.discrete))},inputs:{tabIndex:"tabIndex",discrete:"discrete",markers:"markers",min:"min",max:"max",step:"step",value:"value",disabled:"disabled"},outputs:{change:"change",input:"input",valueChange:"valueChange"},exportAs:["mdcSlider"],features:[o.Ab([N]),o.yb,o.zb],decls:11,vars:2,consts:[[1,"mdc-slider__track-container"],[1,"mdc-slider__track"],["track",""],["class","mdc-slider__track-marker-container",4,"ngIf"],[1,"mdc-slider__thumb-container"],["thumbcontainer",""],["class","mdc-slider__pin",4,"ngIf"],["width","21","height","21","focusable","false",1,"mdc-slider__thumb"],["sliderThumb",""],["cx","10.5","cy","10.5","r","7.875"],[1,"mdc-slider__focus-ring"],[1,"mdc-slider__track-marker-container"],["markercontainer",""],[1,"mdc-slider__pin"],[1,"mdc-slider__pin-value-marker"],["pin",""]],template:function(e,t){1&e&&(o.Rb(0,"div",0),o.Mb(1,"div",1,2),o.uc(3,D,2,0,"div",3),o.Qb(),o.Rb(4,"div",4,5),o.uc(6,V,3,0,"div",6),o.cc(),o.Rb(7,"svg",7,8),o.Mb(9,"circle",9),o.Qb(),o.bc(),o.Mb(10,"div",10),o.Qb()),2&e&&(o.Bb(3),o.ic("ngIf",t.markers),o.Bb(3),o.ic("ngIf",t.discrete))},directives:[M.k],encapsulation:2,changeDetection:0}),O),W=n("6D23"),$=n("4G1d"),K=n("uwiL"),X=n("dkiD"),Z=[{path:"",component:(F=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this._componentViewer.template={title:"Slider",description:"Sliders allow users to make selections from a range of values.",references:[{name:"Material Design guidelines: Sliders",url:"https://material.io/guidelines/components/sliders.html"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-slider/README.md"}],code:"import {MdcSliderModule} from '@angular-mdc/web';",sass:"@use '@material/slider/mdc-slider';\n@use '@material/slider';"}}}]),e}(),F.\u0275fac=function(e){return new(e||F)},F.\u0275cmp=o.Fb({type:F,selectors:[["ng-component"]],viewQuery:function(e,t){var n;1&e&&o.tc(a.a,!0),2&e&&o.nc(n=o.ac())&&(t._componentViewer=n.first)},decls:1,vars:0,template:function(e,t){1&e&&o.Mb(0,"component-viewer")},directives:[s.a],encapsulation:2}),F),children:[{path:"",redirectTo:"api"},{path:"api",component:(L=function e(){_classCallCheck(this,e)},L.\u0275fac=function(e){return new(e||L)},L.\u0275cmp=o.Fb({type:L,selectors:[["ng-component"]],decls:88,vars:0,consts:[[1,"docs-api"],["mdcHeadline6",""],[1,"markdown-code"],["mdcSubtitle2",""]],template:function(e,t){1&e&&(o.Rb(0,"div",0),o.Rb(1,"h3",1),o.wc(2,"MdcSlider"),o.Qb(),o.Rb(3,"p"),o.wc(4," Selector: "),o.Rb(5,"span",2),o.wc(6,"mdc-slider"),o.Qb(),o.Qb(),o.wc(7," Exported as: "),o.Rb(8,"span",2),o.wc(9,"mdcSlider"),o.Qb(),o.Rb(10,"h4",3),o.wc(11,"Properties"),o.Qb(),o.Rb(12,"table"),o.Rb(13,"thead"),o.Rb(14,"tr"),o.Rb(15,"th"),o.wc(16,"Name"),o.Qb(),o.Rb(17,"th"),o.wc(18,"Description"),o.Qb(),o.Qb(),o.Qb(),o.Rb(19,"tbody"),o.Rb(20,"tr"),o.Rb(21,"td"),o.wc(22,"min: number"),o.Qb(),o.Rb(23,"td"),o.wc(24,"The minimum value that the slider can have."),o.Qb(),o.Qb(),o.Rb(25,"tr"),o.Rb(26,"td"),o.wc(27,"max: number"),o.Qb(),o.Rb(28,"td"),o.wc(29,"The maximum value that the slider can have."),o.Qb(),o.Qb(),o.Rb(30,"tr"),o.Rb(31,"td"),o.wc(32,"value: number"),o.Qb(),o.Rb(33,"td"),o.wc(34,"The current value of the slider."),o.Qb(),o.Qb(),o.Rb(35,"tr"),o.Rb(36,"td"),o.wc(37,"step: number"),o.Qb(),o.Rb(38,"td"),o.wc(39,"Specifies the increments at which a slider value can be set."),o.Qb(),o.Qb(),o.Rb(40,"tr"),o.Rb(41,"td"),o.wc(42,"discrete: boolean"),o.Qb(),o.Rb(43,"td"),o.wc(44,"Discrete sliders allow users to select a specific value from a range. (Default: false)"),o.Qb(),o.Qb(),o.Rb(45,"tr"),o.Rb(46,"td"),o.wc(47,"markers: boolean"),o.Qb(),o.Rb(48,"td"),o.wc(49,"Show markers on track. Discrete sliders support displaying markers on their tracks. (Default: false)"),o.Qb(),o.Qb(),o.Rb(50,"tr"),o.Rb(51,"td"),o.wc(52,"disabled: boolean"),o.Qb(),o.Rb(53,"td"),o.wc(54,"Disables the slider."),o.Qb(),o.Qb(),o.Rb(55,"tr"),o.Rb(56,"td"),o.wc(57,"tabIndex: number"),o.Qb(),o.Rb(58,"td"),o.wc(59,"Set the underlying tab index of the component. (Default is 0)"),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Rb(60,"h4",3),o.wc(61,"Events"),o.Qb(),o.Rb(62,"table"),o.Rb(63,"tbody"),o.Rb(64,"tr"),o.Rb(65,"td"),o.wc(66," layout() "),o.Qb(),o.Rb(67,"td"),o.wc(68,"Recomputes the dimensions and re-lays out the component. This should be called if the dimensions of the slider itself or any of its parent elements change programmatically (it is called automatically on resize)."),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Rb(69,"h4",3),o.wc(70,"Events"),o.Qb(),o.Rb(71,"table"),o.Rb(72,"tbody"),o.Rb(73,"tr"),o.Rb(74,"td"),o.wc(75," change(source: MdcSlider, value: number) "),o.Qb(),o.Rb(76,"td"),o.wc(77,"Broadcast when slider value is changed and committed by way of a user event, e.g. when a user stops dragging the slider or changes the value using the arrow keys."),o.Qb(),o.Qb(),o.Rb(78,"tr"),o.Rb(79,"td"),o.wc(80," input(source: MdcSlider, value: number) "),o.Qb(),o.Rb(81,"td"),o.wc(82,"Broadcasts when slider value is changed by way of a user event, e.g. when a user is dragging the slider or changing the value using the arrow keys."),o.Qb(),o.Qb(),o.Rb(83,"tr"),o.Rb(84,"td"),o.wc(85," valueChange(value: number) "),o.Qb(),o.Rb(86,"td"),o.wc(87,"Emits when the value of the slider changes."),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb())},directives:[c.i,c.l],encapsulation:2}),L)},{path:"sass",component:(B=function e(){_classCallCheck(this,e)},B.\u0275fac=function(e){return new(e||B)},B.\u0275cmp=o.Fb({type:B,selectors:[["ng-component"]],decls:65,vars:0,consts:[[1,"docs-api"],["mdcSubtitle2",""]],template:function(e,t){1&e&&(o.Rb(0,"div",0),o.Rb(1,"h4",1),o.wc(2,"Sass Mixins"),o.Qb(),o.Rb(3,"table"),o.Rb(4,"thead"),o.Rb(5,"tr"),o.Rb(6,"th"),o.wc(7,"Mixin"),o.Qb(),o.Rb(8,"th"),o.wc(9,"Description"),o.Qb(),o.Qb(),o.Qb(),o.Rb(10,"tbody"),o.Rb(11,"tr"),o.Rb(12,"td"),o.Rb(13,"code"),o.wc(14,"color-accessible($color)"),o.Qb(),o.Qb(),o.Rb(15,"td"),o.wc(16,"Sets the color of all slider elements and automatically sets an accessible ink color with high contrast for the value indicator pin"),o.Qb(),o.Qb(),o.Rb(17,"tr"),o.Rb(18,"td"),o.Rb(19,"code"),o.wc(20,"highlight-color($color)"),o.Qb(),o.Qb(),o.Rb(21,"td"),o.wc(22,'Sets the color of the highlighted (aka "on") portion of the slider'),o.Qb(),o.Qb(),o.Rb(23,"tr"),o.Rb(24,"td"),o.Rb(25,"code"),o.wc(26,"rail-color($color, $opacity)"),o.Qb(),o.Qb(),o.Rb(27,"td"),o.wc(28,"Sets the color (and optionally the opacity) of the rail"),o.Qb(),o.Qb(),o.Rb(29,"tr"),o.Rb(30,"td"),o.Rb(31,"code"),o.wc(32,"rail-tick-mark-color($color)"),o.Qb(),o.Qb(),o.Rb(33,"td"),o.wc(34,"Sets the color of the tick marks on the rail"),o.Qb(),o.Qb(),o.Rb(35,"tr"),o.Rb(36,"td"),o.Rb(37,"code"),o.wc(38,"thumb-color($color)"),o.Qb(),o.Qb(),o.Rb(39,"td"),o.wc(40,"Sets the color of the thumb (grab handle)"),o.Qb(),o.Qb(),o.Rb(41,"tr"),o.Rb(42,"td"),o.Rb(43,"code"),o.wc(44,"focus-halo-color($color)"),o.Qb(),o.Qb(),o.Rb(45,"td"),o.wc(46,"Sets the color of the focus halo"),o.Qb(),o.Qb(),o.Rb(47,"tr"),o.Rb(48,"td"),o.Rb(49,"code"),o.wc(50,"value-pin-fill-color-accessible($color)"),o.Qb(),o.Qb(),o.Rb(51,"td"),o.wc(52,"Sets the fill color of the value indicator pin and automatically sets an accessible ink color with high contrast"),o.Qb(),o.Qb(),o.Rb(53,"tr"),o.Rb(54,"td"),o.Rb(55,"code"),o.wc(56,"value-pin-fill-color($color)"),o.Qb(),o.Qb(),o.Rb(57,"td"),o.wc(58,"Sets the fill color of the value indicator pin"),o.Qb(),o.Qb(),o.Rb(59,"tr"),o.Rb(60,"td"),o.Rb(61,"code"),o.wc(62,"value-pin-ink-color($color)"),o.Qb(),o.Qb(),o.Rb(63,"td"),o.wc(64,"Sets the ink color of the value indicator pin"),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb())},directives:[c.l],encapsulation:2}),B)},{path:"examples",component:(H=function(){function e(){_classCallCheck(this,e),this.max=50,this.min=10,this.value=25,this.discreteValue=50,this.sliderModel=10,this.exampleEvents="import {MdcSliderChange} from '@angular-mdc/web';\n\nonInput(event: MdcSliderChange): void {\n  console.log(event.value);\n}\n\nonChange(event: MdcSliderChange): void {\n  console.log(event.value);\n}",this.exampleContinuous={html:'<mdc-slider [min]="0" [max]="100" value="50"\n  (input)="onInput($event)" (change)="onChange($event)"></mdc-slider>',ts:this.exampleEvents},this.exampleDiscrete={html:'<mdc-slider discrete [min]="0" [max]="100" value="25"\n  (input)="onInput($event)" (change)="onChange($event)"></mdc-slider>',ts:this.exampleEvents},this.exampleDiscreteTickMarks={html:'<mdc-slider discrete markers [min]="0" [max]="100" [step]="5" [value]="20"\n  (input)="onInput($event)" (change)="onChange($event)"></mdc-slider>',ts:this.exampleEvents},this.exampleCustomRange={html:'<mdc-slider #ranged discrete min="500" max="1000" value="500"></mdc-slider>'},this.exampleNgModel={html:'<mdc-slider [min]="0" [max]="100" [(ngModel)]="sliderModel"></mdc-slider>',ts:"sliderModel: number = 10;"},this.exampleTheme={html:'<mdc-slider discrete markers class="demo-slider-custom" value="20"></mdc-slider>',sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_slider.scss"}}return _createClass(e,[{key:"onInput",value:function(e){this.continuousInputEventValue=e.value}},{key:"onChange",value:function(e){this.continuousChangeEventValue=e.value}}]),e}(),H.\u0275fac=function(e){return new(e||H)},H.\u0275cmp=o.Fb({type:H,selectors:[["ng-component"]],decls:90,vars:30,consts:[[1,"demo-content"],[1,"demo-content__headline"],["value","50","name","test",3,"min","max","input","change"],["continuous",""],["label","Min","size","1","min","0","max","200","type","number","value","0"],["continuousMin",""],["label","Max","type","number","size","1","min","0","max","200","value","100"],["continuousMax",""],[1,"demo-layout__row"],[3,"change"],[3,"example"],["discrete","",3,"min","max","value","input","change"],["discrete",""],["label","Min","type","number","size","1","min","0","max","200","value","0"],["discreteMin",""],["discreteMax",""],["discrete","","markers","","value","20",3,"min","max","step","input","change"],["demomarkers",""],["dmMin",""],["dmMax",""],["label","Step","type","number","size","1","min","0","max","10","value","5"],["dmStep",""],["discrete","","min","500","max","1000","value","500"],["ranged",""],[3,"min","max","ngModel","ngModelChange"],["demoModel",""],["discrete","","markers","","value","20",1,"demo-slider-custom"]],template:function(e,t){if(1&e){var n=o.Sb();o.Rb(0,"div",0),o.Rb(1,"h3",1),o.wc(2,"Continuous"),o.Qb(),o.Rb(3,"mdc-slider",2,3),o.Zb("input",(function(e){return t.onInput(e)}))("change",(function(e){return t.onChange(e)})),o.Qb(),o.Mb(5,"mdc-text-field",4,5),o.Mb(7,"mdc-text-field",6,7),o.Rb(9,"div",8),o.Rb(10,"mdc-form-field"),o.Rb(11,"mdc-checkbox",9),o.Zb("change",(function(){o.pc(n);var e=o.oc(4);return e.disabled=!e.disabled})),o.Qb(),o.Rb(12,"label"),o.wc(13,"Disabled"),o.Qb(),o.Qb(),o.Qb(),o.Rb(14,"p"),o.wc(15),o.Qb(),o.Rb(16,"p"),o.wc(17),o.Qb(),o.Rb(18,"p"),o.wc(19),o.Qb(),o.Mb(20,"example-viewer",10),o.Qb(),o.Rb(21,"div",0),o.Rb(22,"h3",1),o.wc(23,"Discrete"),o.Qb(),o.Rb(24,"mdc-slider",11,12),o.Zb("input",(function(e){return t.discreteInputEventValue=e.value}))("change",(function(e){return t.discreteChangeEventValue=e.value})),o.Qb(),o.Mb(26,"mdc-text-field",13,14),o.Mb(28,"mdc-text-field",6,15),o.Rb(30,"div",8),o.Rb(31,"mdc-form-field"),o.Rb(32,"mdc-checkbox",9),o.Zb("change",(function(){o.pc(n);var e=o.oc(25);return e.disabled=!e.disabled})),o.Qb(),o.Rb(33,"label"),o.wc(34,"Disabled"),o.Qb(),o.Qb(),o.Qb(),o.Rb(35,"p"),o.wc(36),o.Qb(),o.Rb(37,"p"),o.wc(38),o.Qb(),o.Rb(39,"p"),o.wc(40),o.Qb(),o.Mb(41,"example-viewer",10),o.Qb(),o.Rb(42,"div",0),o.Rb(43,"h3",1),o.wc(44,"Discrete with Tick Marks"),o.Qb(),o.Rb(45,"mdc-slider",16,17),o.Zb("input",(function(e){return t.markersInputEventValue=e.value}))("change",(function(e){return t.markersChangeEventValue=e.value})),o.Qb(),o.Mb(47,"mdc-text-field",13,18),o.Mb(49,"mdc-text-field",6,19),o.Mb(51,"mdc-text-field",20,21),o.Rb(53,"div",8),o.Rb(54,"mdc-form-field"),o.Rb(55,"mdc-checkbox",9),o.Zb("change",(function(){o.pc(n);var e=o.oc(46);return e.disabled=!e.disabled})),o.Qb(),o.Rb(56,"label"),o.wc(57,"Disabled"),o.Qb(),o.Qb(),o.Qb(),o.Rb(58,"p"),o.wc(59),o.Qb(),o.Rb(60,"p"),o.wc(61),o.Qb(),o.Rb(62,"p"),o.wc(63),o.Qb(),o.Mb(64,"example-viewer",10),o.Qb(),o.Rb(65,"div",0),o.Rb(66,"h3",1),o.wc(67,"Custom range"),o.Qb(),o.Mb(68,"mdc-slider",22,23),o.Rb(70,"p"),o.wc(71),o.Qb(),o.Rb(72,"p"),o.wc(73),o.Qb(),o.Rb(74,"p"),o.wc(75),o.Qb(),o.Mb(76,"example-viewer",10),o.Qb(),o.Rb(77,"div",0),o.Rb(78,"h3",1),o.wc(79,"ngModel"),o.Qb(),o.Rb(80,"mdc-slider",24,25),o.Zb("ngModelChange",(function(e){return t.sliderModel=e})),o.Qb(),o.Rb(82,"p"),o.wc(83),o.Qb(),o.Mb(84,"example-viewer",10),o.Qb(),o.Rb(85,"div",0),o.Rb(86,"h3",1),o.wc(87,"Theme"),o.Qb(),o.Mb(88,"mdc-slider",26),o.Mb(89,"example-viewer",10),o.Qb()}if(2&e){var r=o.oc(4),i=o.oc(6),a=o.oc(8),s=o.oc(25),c=o.oc(27),u=o.oc(29),l=o.oc(46),d=o.oc(48),b=o.oc(50),h=o.oc(52),m=o.oc(69),p=o.oc(81);o.Bb(3),o.ic("min",i.value)("max",a.value),o.Bb(12),o.yc("Value: ",r.value,""),o.Bb(2),o.yc("Last value from input event: ",t.continuousInputEventValue,""),o.Bb(2),o.yc("Last value from change event: ",t.continuousChangeEventValue,""),o.Bb(1),o.ic("example",t.exampleContinuous),o.Bb(4),o.ic("min",c.value)("max",u.value)("value",t.discreteValue),o.Bb(12),o.yc("Value: ",s.value,""),o.Bb(2),o.yc("Last value from input event: ",t.discreteInputEventValue,""),o.Bb(2),o.yc("Last value from change event: ",t.discreteChangeEventValue,""),o.Bb(1),o.ic("example",t.exampleDiscrete),o.Bb(4),o.ic("min",d.value)("max",b.value)("step",h.value),o.Bb(14),o.yc("Value: ",l.value,""),o.Bb(2),o.yc("Last value from input event: ",t.markersInputEventValue,""),o.Bb(2),o.yc("Last value from change event: ",t.markersChangeEventValue,""),o.Bb(1),o.ic("example",t.exampleDiscreteTickMarks),o.Bb(7),o.yc("Min: ",m.min,""),o.Bb(2),o.yc("Max: ",m.max,""),o.Bb(2),o.yc("Value: ",m.value,""),o.Bb(1),o.ic("example",t.exampleCustomRange),o.Bb(4),o.ic("min",0)("max",100)("ngModel",t.sliderModel),o.Bb(3),o.yc("Value: ",p.value,""),o.Bb(1),o.ic("example",t.exampleNgModel),o.Bb(5),o.ic("example",t.exampleTheme)}},directives:[U,W.a,$.a,K.a,X.a,l.j,l.m],encapsulation:2}),H)}]}],G=((j=function e(){_classCallCheck(this,e)}).\u0275mod=o.Jb({type:j}),j.\u0275inj=o.Ib({factory:function(e){return new(e||j)},imports:[[i.e.forChild(Z)],i.e]}),j),J=((P=function e(){_classCallCheck(this,e)}).\u0275mod=o.Jb({type:P}),P.\u0275inj=o.Ib({factory:function(e){return new(e||P)},imports:[[r.a,G]]}),P)},leug:function(e,t,n){"use strict";var r=n("LuDt");n.d(t,"a",(function(){return r.a}))}}]);