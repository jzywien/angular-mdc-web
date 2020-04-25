function _defineProperties(e,t){for(var c=0;c<t.length;c++){var o=t[c];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,c){return t&&_defineProperties(e.prototype,t),c&&_defineProperties(e,c),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{leug:function(e,t,c){"use strict";var o=c("LuDt");c.d(t,"a",(function(){return o.a}))},tUHL:function(e,t,c){"use strict";c.r(t),c.d(t,"ShapeModule",(function(){return m}));var o,s,a,i,n=c("d2mR"),b=c("tyNb"),r=c("leug"),l=c("fXoL"),d=c("5l+6"),u=c("OtPg"),p=c("LuDt"),h=((o=function e(){_classCallCheck(this,e),this.customTheming="@use '@material/button';\n\n.my-custom-button {\n  @include button.shape-radius(50%);\n}"}).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=l.Fb({type:o,selectors:[["ng-component"]],decls:168,vars:1,consts:[[1,"docs-api"],["mdcSubtitle2",""],["mdcHeadline6",""],["highlight","@include radius(resolve-percentage-radius($mdc-button-height, $radius));"],[1,"markdown-code"],["highlight","@include radius($radius);"],["highlight","@include radius(0 $radius $radius 0, $rtl-reflexive: true);"],[3,"highlight"]],template:function(e,t){1&e&&(l.Rb(0,"div",0),l.Rb(1,"h4",1),l.wc(2,"Sass Variables"),l.Qb(),l.Rb(3,"table"),l.Rb(4,"thead"),l.Rb(5,"tr"),l.Rb(6,"th"),l.wc(7,"Variable"),l.Qb(),l.Rb(8,"th"),l.wc(9,"Description"),l.Qb(),l.Qb(),l.Qb(),l.Rb(10,"tbody"),l.Rb(11,"tr"),l.Rb(12,"td"),l.Rb(13,"code"),l.wc(14,"$small-component-radius"),l.Qb(),l.Qb(),l.Rb(15,"td"),l.wc(16,"Rounded shape radius size for small components. Default value "),l.Rb(17,"code"),l.wc(18,"4px"),l.Qb(),l.wc(19,"."),l.Qb(),l.Qb(),l.Rb(20,"tr"),l.Rb(21,"td"),l.Rb(22,"code"),l.wc(23,"$medium-component-radius"),l.Qb(),l.Qb(),l.Rb(24,"td"),l.wc(25,"Rounded shape radius size for medium components. Default value "),l.Rb(26,"code"),l.wc(27,"4px"),l.Qb(),l.wc(28,"."),l.Qb(),l.Qb(),l.Rb(29,"tr"),l.Rb(30,"td"),l.Rb(31,"code"),l.wc(32,"$large-component-radius"),l.Qb(),l.Qb(),l.Rb(33,"td"),l.wc(34,"Rounded shape radius size for large components. Default value "),l.Rb(35,"code"),l.wc(36,"0"),l.Qb(),l.wc(37,"."),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Rb(38,"h4",1),l.wc(39,"Sass Mixins"),l.Qb(),l.Rb(40,"table"),l.Rb(41,"thead"),l.Rb(42,"tr"),l.Rb(43,"th"),l.wc(44,"Mixin"),l.Qb(),l.Rb(45,"th"),l.wc(46,"Description"),l.Qb(),l.Qb(),l.Qb(),l.Rb(47,"tbody"),l.Rb(48,"tr"),l.Rb(49,"td"),l.Rb(50,"code"),l.wc(51,"radius($radius, $rtl-reflexive)"),l.Qb(),l.Qb(),l.Rb(52,"td"),l.wc(53,"Shape API used by all other components to apply radius to appropriate corners. "),l.Rb(54,"code"),l.wc(55,"$radius"),l.Qb(),l.wc(56," can be single value or list of up to 4 radius corner values. Set "),l.Rb(57,"code"),l.wc(58,"$rtl-reflexive"),l.Qb(),l.wc(59," to true to flip the radius in RTL case, "),l.Rb(60,"code"),l.wc(61,"false"),l.Qb(),l.wc(62," by default."),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Rb(63,"h4",1),l.wc(64,"Sass Functions"),l.Qb(),l.Rb(65,"table"),l.Rb(66,"thead"),l.Rb(67,"tr"),l.Rb(68,"th"),l.wc(69,"Function"),l.Qb(),l.Rb(70,"th"),l.wc(71,"Description"),l.Qb(),l.Qb(),l.Qb(),l.Rb(72,"tbody"),l.Rb(73,"tr"),l.Rb(74,"td"),l.Rb(75,"code"),l.wc(76,"flip-radius($radius)"),l.Qb(),l.Qb(),l.Rb(77,"td"),l.wc(78,"Flips the radius values in RTL context. "),l.Rb(79,"code"),l.wc(80,"$radius"),l.Qb(),l.wc(81," is list of 2-4 corner values."),l.Qb(),l.Qb(),l.Rb(82,"tr"),l.Rb(83,"td"),l.Rb(84,"code"),l.wc(85,"resolve-percentage-radius($component-height, $radius)"),l.Qb(),l.Qb(),l.Rb(86,"td"),l.wc(87,"Calculates the absolute radius value based on its component height. Use this for fixed height components only."),l.Qb(),l.Qb(),l.Rb(88,"tr"),l.Rb(89,"td"),l.Rb(90,"code"),l.wc(91,"mask-radius($radius, $masked-corners)"),l.Qb(),l.Qb(),l.Rb(92,"td"),l.wc(93,"Accepts radius number or list of 2-4 radius values and returns 4 value list with masked corners as mentioned in "),l.Rb(94,"code"),l.wc(95,"$masked-corners"),l.Qb(),l.wc(96,"."),l.Qb(),l.Qb(),l.Rb(97,"tr"),l.Rb(98,"td"),l.Rb(99,"code"),l.wc(100,"prop-value($radius)"),l.Qb(),l.Qb(),l.Rb(101,"td"),l.wc(102,"Returns "),l.Rb(103,"code"),l.wc(104,"$radius"),l.Qb(),l.wc(105," value of shape category - "),l.Rb(106,"code"),l.wc(107,"large"),l.Qb(),l.wc(108,", "),l.Rb(109,"code"),l.wc(110,"medium"),l.Qb(),l.wc(111," or "),l.Rb(112,"code"),l.wc(113,"small"),l.Qb(),l.wc(114,". Otherwise, it returns the "),l.Rb(115,"code"),l.wc(116,"$radius"),l.Qb(),l.wc(117," itself if valid. "),l.Rb(118,"code"),l.wc(119,"$radius"),l.Qb(),l.wc(120," can be a single value or list of up to 4."),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Rb(121,"h3",2),l.wc(122,"Additional Information"),l.Qb(),l.Rb(123,"h4",1),l.wc(124,"Shapes for fixed height components"),l.Qb(),l.wc(125," Styles for applying shape to a fixed height component such as button looks like this: "),l.Rb(126,"pre"),l.Mb(127,"code",3),l.Qb(),l.wc(128," Where, "),l.Rb(129,"code",4),l.wc(130,"button.$height"),l.Qb(),l.wc(131," is the height of standard button and "),l.Rb(132,"code",4),l.wc(133,"$radius"),l.Qb(),l.wc(134," is the size of shape. "),l.Rb(135,"code",4),l.wc(136,"resolve-percentage-radius"),l.Qb(),l.wc(137," function is used to resolve percentage unit value to absolute "),l.Rb(138,"code",4),l.wc(139,"$radius"),l.Qb(),l.wc(140," value based on component height. "),l.Rb(141,"h4",1),l.wc(142,"Shapes for dynamic height components"),l.Qb(),l.wc(143," Styles for applying shapes to dynamic height component such as card looks like this: "),l.Rb(144,"pre"),l.Mb(145,"code",5),l.Qb(),l.wc(146," Where, "),l.Rb(147,"code",4),l.wc(148,"$radius"),l.Qb(),l.wc(149," is absolute value only. "),l.Rb(150,"h4",1),l.wc(151,"Shapes for components on specific corners"),l.Qb(),l.wc(152," Styles for applying shapes for specific corners such as drawer looks like this: "),l.Rb(153,"pre"),l.Mb(154,"code",6),l.Qb(),l.wc(155," Where, only top-right & bottom-right corners are customizable and it automatically flips radius values based on RTL context when "),l.Rb(156,"code",4),l.wc(157,"$rtl-reflexive"),l.Qb(),l.wc(158," is set to true. "),l.Rb(159,"h4",1),l.wc(160,"Component theming"),l.Qb(),l.wc(161," The styles for applying custom shape to button component instance looks like this: "),l.Rb(162,"pre"),l.Mb(163,"code",7),l.Qb(),l.wc(164," In this example, the above styles applies 50% (pill) shape to button. It can also be absolute value (e.g.: "),l.Rb(165,"code",4),l.wc(166,"8px"),l.Qb(),l.wc(167,"); you would indirectly use the Shape API through respective component's mixin which takes care of applying radius to applicable corners for all its variants.\n"),l.Qb()),2&e&&(l.Bb(163),l.ic("highlight",t.customTheming))},directives:[d.l,d.i,u.b],encapsulation:2}),o),w=[{path:"",component:(s=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this._componentViewer.template={title:"Shape",description:"Shapes direct attention, identify components, communicate state, and express brand.",references:[{name:"Material Design guidelines: Shape",url:"https://material.io/go/design-shape"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-shape/README.md"}],sass:"@use '@material/shape';",tabs:[{label:"Usage",route:"./usage"}]}}}]),e}(),s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=l.Fb({type:s,selectors:[["ng-component"]],viewQuery:function(e,t){var c;1&e&&l.tc(r.a,!0),2&e&&l.nc(c=l.ac())&&(t._componentViewer=c.first)},decls:1,vars:0,template:function(e,t){1&e&&l.Mb(0,"component-viewer")},directives:[p.a],encapsulation:2}),s),children:[{path:"",redirectTo:"usage"},{path:"usage",component:h}]}],R=((i=function e(){_classCallCheck(this,e)}).\u0275mod=l.Jb({type:i}),i.\u0275inj=l.Ib({factory:function(e){return new(e||i)},imports:[[b.e.forChild(w)],b.e]}),i),m=((a=function e(){_classCallCheck(this,e)}).\u0275mod=l.Jb({type:a}),a.\u0275inj=l.Ib({factory:function(e){return new(e||a)},imports:[[n.a,R]]}),a)}}]);