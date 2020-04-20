function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Z8ZP:function(e,t,o){"use strict";o.r(t);var n=o("d2mR"),a=o("tyNb"),c=o("leug"),b=o("fXoL"),i=o("5l+6"),r=o("LuDt"),s=o("ofXK"),l=o("pP2c");function d(e,t){if(1&e&&(b.Rb(0,"figure",2),b.Rb(1,"figcaption"),b.wc(2),b.Qb(),b.Qb()),2&e){var o=t.$implicit;b.ic("mdcElevation",o),b.Bb(2),b.yc('[mdcElevation]="',o,'"')}}var p,u,R,Q,v,w=((u=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||u)},u.\u0275cmp=b.Fb({type:u,selectors:[["ng-component"]],decls:25,vars:0,consts:[[1,"docs-api"],["mdcHeadline6",""],[1,"markdown-code"],["mdcSubtitle2",""]],template:function(e,t){1&e&&(b.Rb(0,"div",0),b.Rb(1,"h3",1),b.wc(2,"MdcElevation"),b.Qb(),b.Rb(3,"p"),b.wc(4," Selector: "),b.Rb(5,"span",2),b.wc(6,'[mdcElevation]="0-24"'),b.Qb(),b.Qb(),b.wc(7," Exported as: "),b.Rb(8,"span",2),b.wc(9,"mdcElevation"),b.Qb(),b.Rb(10,"h4",3),b.wc(11,"Properties"),b.Qb(),b.Rb(12,"table"),b.Rb(13,"thead"),b.Rb(14,"tr"),b.Rb(15,"th"),b.wc(16,"Name"),b.Qb(),b.Rb(17,"th"),b.wc(18,"Description"),b.Qb(),b.Qb(),b.Qb(),b.Rb(19,"tbody"),b.Rb(20,"tr"),b.Rb(21,"td"),b.wc(22,'[mdcElevation]="#"'),b.Qb(),b.Rb(23,"td"),b.wc(24,'Elevation values are mapped out in a "z-space" and range from 0 to 24.'),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb())},directives:[i.i,i.l],encapsulation:2}),u),f=((p=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||p)},p.\u0275cmp=b.Fb({type:p,selectors:[["ng-component"]],decls:120,vars:0,consts:[[1,"docs-api"],["mdcSubtitle2",""]],template:function(e,t){1&e&&(b.Rb(0,"div",0),b.Rb(1,"h4",1),b.wc(2,"Sass Mixins"),b.Qb(),b.Rb(3,"table"),b.Rb(4,"thead"),b.Rb(5,"tr"),b.Rb(6,"th"),b.wc(7,"Mixin"),b.Qb(),b.Rb(8,"th"),b.wc(9,"Description"),b.Qb(),b.Qb(),b.Qb(),b.Rb(10,"tbody"),b.Rb(11,"tr"),b.Rb(12,"td"),b.Rb(13,"code"),b.wc(14,"mdc-elevation($z-value, $color, $opacity-boost)"),b.Qb(),b.Qb(),b.Rb(15,"td"),b.wc(16,"Sets the elevation to the z-space for that given elevation, and optionally sets the color and/or boosts the opacity of the shadow"),b.Qb(),b.Qb(),b.Rb(17,"tr"),b.Rb(18,"td"),b.Rb(19,"code"),b.wc(20,"overlay-common"),b.Qb(),b.Qb(),b.Rb(21,"td"),b.wc(22,"Called once per application to setup the universal elevation overlay styles"),b.Qb(),b.Qb(),b.Rb(23,"tr"),b.Rb(24,"td"),b.Rb(25,"code"),b.wc(26,"shadow($box-shadow)"),b.Qb(),b.Qb(),b.Rb(27,"td"),b.wc(28,"Sets the "),b.Rb(29,"code"),b.wc(30,"box-shadow"),b.Qb(),b.wc(31," of the closest parent selector"),b.Qb(),b.Qb(),b.Rb(32,"tr"),b.Rb(33,"td"),b.Rb(34,"code"),b.wc(35,"overlay-surface-position"),b.Qb(),b.Qb(),b.Rb(36,"td"),b.wc(37,"Sets the positioning of the overlay's surface element so that the overlay can be appropriately centered"),b.Qb(),b.Qb(),b.Rb(38,"tr"),b.Rb(39,"td"),b.Rb(40,"code"),b.wc(41,"overlay-dimensions($width, $height: $width, $has-content-sizing: true)"),b.Qb(),b.Qb(),b.Rb(42,"td"),b.wc(43,"Sets the dimensions of the elevation overlay"),b.Qb(),b.Qb(),b.Rb(44,"tr"),b.Rb(45,"td"),b.Rb(46,"code"),b.wc(47,"overlay-fill-color($color)"),b.Qb(),b.Qb(),b.Rb(48,"td"),b.wc(49,"Sets the color of the elevation overlay"),b.Qb(),b.Qb(),b.Rb(50,"tr"),b.Rb(51,"td"),b.Rb(52,"code"),b.wc(53,"overlay-opacity($opacity)"),b.Qb(),b.Qb(),b.Rb(54,"td"),b.wc(55,"Sets the opacity of the elevation overlay"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(56,"table"),b.Rb(57,"thead"),b.Rb(58,"tr"),b.Rb(59,"th"),b.wc(60,"Function"),b.Qb(),b.Rb(61,"th"),b.wc(62,"Description"),b.Qb(),b.Qb(),b.Qb(),b.Rb(63,"tbody"),b.Rb(64,"tr"),b.Rb(65,"td"),b.Rb(66,"code"),b.wc(67,"transition-value($duration, $easing)"),b.Qb(),b.Qb(),b.Rb(68,"td"),b.wc(69,"Returns a value for the "),b.Rb(70,"code"),b.wc(71,"transition"),b.Qb(),b.wc(72," property to transition an element between elevations"),b.Qb(),b.Qb(),b.Rb(73,"tr"),b.Rb(74,"td"),b.Rb(75,"code"),b.wc(76,"overlay-transition-value($duration, $easing)"),b.Qb(),b.Qb(),b.Rb(77,"td"),b.wc(78,"Returns a value for the "),b.Rb(79,"code"),b.wc(80,"transition"),b.Qb(),b.wc(81," property to transition the elevation overlay between elevations"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(82,"table"),b.Rb(83,"thead"),b.Rb(84,"tr"),b.Rb(85,"th"),b.wc(86,"Variable"),b.Qb(),b.Rb(87,"th"),b.wc(88,"Description"),b.Qb(),b.Qb(),b.Qb(),b.Rb(89,"tbody"),b.Rb(90,"tr"),b.Rb(91,"td"),b.Rb(92,"code"),b.wc(93,"$property"),b.Qb(),b.Qb(),b.Rb(94,"td"),b.wc(95,"Default property for elevation transitions"),b.Qb(),b.Qb(),b.Rb(96,"tr"),b.Rb(97,"td"),b.Rb(98,"code"),b.wc(99,"$transition-duration"),b.Qb(),b.Qb(),b.Rb(100,"td"),b.wc(101,"Default duration value for elevation transitions"),b.Qb(),b.Qb(),b.Rb(102,"tr"),b.Rb(103,"td"),b.Rb(104,"code"),b.wc(105,"$transition-timing-function"),b.Qb(),b.Qb(),b.Rb(106,"td"),b.wc(107,"Default easing value for elevation transitions"),b.Qb(),b.Qb(),b.Rb(108,"tr"),b.Rb(109,"td"),b.Rb(110,"code"),b.wc(111,"$overlay-color"),b.Qb(),b.Qb(),b.Rb(112,"td"),b.wc(113,"Default color for the elevation overlay"),b.Qb(),b.Qb(),b.Rb(114,"tr"),b.Rb(115,"td"),b.Rb(116,"code"),b.wc(117,"$overlay-property"),b.Qb(),b.Qb(),b.Rb(118,"td"),b.wc(119,"Default property for the elevation overlay transitions"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb())},directives:[i.l],encapsulation:2}),p),h=[{path:"",component:(Q=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this._componentViewer.template={title:"Elevation",description:"Shadows provide important visual cues about objects\u2019 depth and directional movement.\n      They are the only visual cue indicating the amount of separation between surfaces.\n       An object\u2019s elevation determines the appearance of its shadow.",references:[{name:"Material Design guidelines: Elevation",url:"https://material.io/design/environment/elevation.html"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-elevation/README.md"}],code:"import {MdcElevationModule} from '@angular-mdc/web';",sass:"@use '@material/elevation/mdc-elevation';"}}}]),e}(),Q.\u0275fac=function(e){return new(e||Q)},Q.\u0275cmp=b.Fb({type:Q,selectors:[["ng-component"]],viewQuery:function(e,t){var o;1&e&&b.tc(c.a,!0),2&e&&b.nc(o=b.ac())&&(t._componentViewer=o.first)},decls:1,vars:0,template:function(e,t){1&e&&b.Mb(0,"component-viewer")},directives:[r.a],encapsulation:2}),Q),children:[{path:"",redirectTo:"api"},{path:"api",component:w},{path:"sass",component:f},{path:"examples",component:(R=function e(){_classCallCheck(this,e),this.items=Array.from(Array(25),(function(e,t){return t}))},R.\u0275fac=function(e){return new(e||R)},R.\u0275cmp=b.Fb({type:R,selectors:[["ng-component"]],decls:2,vars:1,consts:[[1,"demo-layout__row"],["class","demo-elevation__surface",3,"mdcElevation",4,"ngFor","ngForOf"],[1,"demo-elevation__surface",3,"mdcElevation"]],template:function(e,t){1&e&&(b.Rb(0,"div",0),b.uc(1,d,3,2,"figure",1),b.Qb()),2&e&&(b.Bb(1),b.ic("ngForOf",t.items))},directives:[s.j,l.a],encapsulation:2}),R)}]}],m=((v=function e(){_classCallCheck(this,e)}).\u0275mod=b.Jb({type:v}),v.\u0275inj=b.Ib({factory:function(e){return new(e||v)},imports:[[a.e.forChild(h)],a.e]}),v);o.d(t,"ElevationModule",(function(){return g}));var y,g=((y=function e(){_classCallCheck(this,e)}).\u0275mod=b.Jb({type:y}),y.\u0275inj=b.Ib({factory:function(e){return new(e||y)},imports:[[n.a,m]]}),y)},leug:function(e,t,o){"use strict";var n=o("LuDt");o.d(t,"a",(function(){return n.a}))}}]);