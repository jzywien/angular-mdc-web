function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,a,t){return a&&_defineProperties(e.prototype,a),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{hA6M:function(e,a,t){"use strict";t.r(a),t.d(a,"DataTableModule",(function(){return k}));var n=t("d2mR"),c=t("tyNb"),l=t("leug"),r=t("fXoL"),s=t("w0pw"),o=t("LuDt"),d=t("OY9d"),i=t("ZemC"),m=t("ofXK"),b=t("dkiD"),h=t("uwiL");function u(e,a){if(1&e&&(r.Rb(0,"tr",11),r.Rb(1,"td",12),r.wc(2),r.Qb(),r.Rb(3,"td",13),r.wc(4),r.Qb(),r.Rb(5,"td",13),r.wc(6),r.Qb(),r.Rb(7,"td",13),r.wc(8),r.Qb(),r.Rb(9,"td",12),r.wc(10),r.Qb(),r.Qb()),2&e){var t=a.$implicit;r.Bb(2),r.xc(t.name),r.Bb(2),r.xc(t.calories),r.Bb(2),r.xc(t.carbs),r.Bb(2),r.xc(t.protein),r.Bb(2),r.xc(t.comment)}}function p(e,a){if(1&e&&(r.Rb(0,"tr",14),r.Rb(1,"td",12),r.Mb(2,"mdc-checkbox",15),r.Qb(),r.Rb(3,"td",12),r.wc(4),r.Qb(),r.Rb(5,"td",13),r.wc(6),r.Qb(),r.Rb(7,"td",13),r.wc(8),r.Qb(),r.Rb(9,"td",13),r.wc(10),r.Qb(),r.Rb(11,"td",12),r.wc(12),r.Qb(),r.Qb()),2&e){var t=a.$implicit;r.ic("selected",t.checked),r.Bb(2),r.ic("checked",t.checked),r.Bb(2),r.xc(t.name),r.Bb(2),r.xc(t.calories),r.Bb(2),r.xc(t.carbs),r.Bb(2),r.xc(t.protein),r.Bb(2),r.xc(t.comment)}}var w,C,D,f,T,R=((w=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this._componentApi.docApi={sections:[{header:"MDCDataTable",selectors:["mdc-data-table"],exportedAs:"mdcDataTable",categories:[{name:"Methods",items:[{name:"layoutAsync(): Promise",summary:"Re-initializes header row checkbox and row checkboxes when selectable rows are added or removed from table. Use this if registering checkbox is asynchronous."},{name:"layout()",summary:"Re-initializes header row checkbox and row checkboxes when selectable rows are added or removed from table."},{name:"getHeaderCheckbox(): MdcCheckbox | undefined",summary:"Retrieve a reference to the header row checkbox."},{name:"getRows(): MDCDataTableRow[]",summary:"Return an array of all MDCDataTableRow objects."},{name:"getSelectedRowIds():\n                Array<string | null>",summary:"Returns array of selected row ids."},{name:"setSelectedRowIds(rowIds: string[])",summary:"Array of row ids that needs to be selected."},{name:"showProgress()",summary:"Shows progress indicator when data table is in loading state."},{name:"hideProgress()",summary:"Hides progress indicator when data table is finished loading."}]},{name:"Events",items:[{name:"selectionChanged: MDCDataTableRowSelectionChangedEvent",summary:"Event emitted when row checkbox is checked or unchecked.",summaryCode:"MDCDataTableRowSelectionChangedEvent {\n  index: number;\n  id: string | null;\n  selected: boolean;\n}"},{name:"selectedAll",summary:"Event emitted when header row checkbox is checked."},{name:"unselectedAll",summary:"Event emitted when header row checkbox is unchecked."}]}]},{header:"MDCDataTableTable",summary:"Mandatory. Table element. Added to table HTML tag.",selectors:["mdcDataTableTable"],exportedAs:"mdcDataTableTable"},{header:"MDCDataTableHeaderRow",summary:"Mandatory. Table header row element. Added to thead > tr HTML tag.",selectors:["mdcDataTableHeaderRow"],exportedAs:"mdcDataTableHeaderRow"},{header:"MDCDataTableHeaderCell",selectors:["mdcDataTableHeaderCell"],exportedAs:"mdcDataTableHeaderCell",categories:[{name:"Properties",items:[{name:"numeric: boolean",summary:"Optional. Table header cell element that maps to numeric cells."}]}]},{header:"MDCDataTableContent",summary:"Mandatory. Table body element. Added to tbody HTML tag.",selectors:["mdcDataTableContent"],exportedAs:"mdcDataTableContent"},{header:"MDCDataTableRow",selectors:["mdcDataTableRow"],exportedAs:"mdcDataTableRow",categories:[{name:"Properties",items:[{name:"selected: boolean",summary:"Optional. Modifier class added to mdc-data-table__row when table row is selected."}]}]},{header:"MDCDataTableCell",selectors:["mdcDataTableCell"],exportedAs:"mdcDataTableCell",categories:[{name:"Properties",items:[{name:"checkbox: boolean",summary:"Optional. Table cell element that contains mdc-checkbox."},{name:"numeric: boolean",summary:"Optional. Table cell element that maps to numeric cells."}]}]}]}}}]),e}()).\u0275fac=function(e){return new(e||w)},w.\u0275cmp=r.Fb({type:w,selectors:[["ng-component"]],viewQuery:function(e,a){var t;1&e&&r.tc(l.a,!0),2&e&&r.nc(t=r.ac())&&(a._componentApi=t.first)},decls:1,vars:0,template:function(e,a){1&e&&r.Mb(0,"component-api")},directives:[s.a],encapsulation:2}),w),g=[{path:"",component:(D=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this._componentViewer.template={title:"Data Table",description:"Data tables display information in a grid-like format of rows and columns. \n      They organize information in a way that's easy to scan, so that users can look for patterns and insights.",references:[{name:"Material Design guidelines: Data Tables",url:"https://material.io/design/components/data-tables.html"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-data-table/README.md"}],mdcUrls:[{name:"Sass Mixins",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-data-table/README.md#sass-mixins"}],code:"import {MDCDataTableModule} from '@angular-mdc/web/data-table';",sass:"@use '@material/data-table/mdc-data-table';\n@use '@material/data-table';"}}}]),e}(),D.\u0275fac=function(e){return new(e||D)},D.\u0275cmp=r.Fb({type:D,selectors:[["ng-component"]],viewQuery:function(e,a){var t;1&e&&r.tc(l.b,!0),2&e&&r.nc(t=r.ac())&&(a._componentViewer=t.first)},decls:1,vars:0,template:function(e,a){1&e&&r.Mb(0,"component-viewer")},directives:[o.a],encapsulation:2}),D),children:[{path:"",redirectTo:"api"},{path:"api",component:R},{path:"examples",component:(C=function(){function e(){_classCallCheck(this,e),this.desserts=[{checked:!1,name:"Frozen yogurt",calories:159,carbs:24,protein:4,comment:"Super tasty"},{checked:!0,name:"Ice cream sandwich",calories:237,carbs:37,protein:4.3,comment:"I like ice cream more"},{checked:!1,name:"Eclair",calories:262,carbs:16,protein:6,comment:"New filling flavor"}],this.exampleDessertsArray="desserts = [\n  {checked: false, name: 'Frozen yogurt', calories: 159, carbs: 24, protein: 4, comment: 'Super tasty'},\n  {checked: true, name: 'Ice cream sandwich', calories: 237, carbs: 37, protein: 4.3, comment: 'I like ice cream more'},\n  {checked: false, name: 'Eclair', calories: 262, carbs: 16, protein: 6, comment: 'New filling flavor'}\n];",this.exampleStandard={html:'<mdc-data-table>\n  <table mdcDataTableTable>\n    <thead>\n      <tr mdcDataTableHeaderRow>\n        <th mdcDataTableHeaderCell>Dessert</th>\n        <th mdcDataTableHeaderCell numeric>Calories</th>\n        <th mdcDataTableHeaderCell numeric>Carbs</th>\n        <th mdcDataTableHeaderCell numeric>Protein (g)</th>\n        <th mdcDataTableHeaderCell>Comments</th>\n      </tr>\n    </thead>\n    <tbody mdcDataTableContent>\n      <tr mdcDataTableRow *ngFor="let dessert of desserts">\n        <td mdcDataTableCell>{{dessert.name}}</td>\n        <td mdcDataTableCell numeric>{{dessert.calories}}</td>\n        <td mdcDataTableCell numeric>{{dessert.carbs}}</td>\n        <td mdcDataTableCell numeric>{{dessert.protein}}</td>\n        <td mdcDataTableCell>{{dessert.comment}}</td>\n      </tr>\n    </tbody>\n  </table>\n</mdc-data-table>',ts:this.exampleDessertsArray},this.exampleRowSelection={html:'<mdc-data-table (selectionChanged)="onSelectionChanged($event)"\n  (selectedAll)="onSelectedAll()" (unselectedAll)="onUnselectedAll()">\n  <table mdcDataTableTable>\n    <thead>\n      <tr mdcDataTableHeaderRow>\n        <th mdcDataTableHeaderCell>\n          <mdc-checkbox></mdc-checkbox>\n        </th>\n        <th mdcDataTableHeaderCell>Dessert</th>\n        <th mdcDataTableHeaderCell numeric>Calories</th>\n        <th mdcDataTableHeaderCell numeric>Carbs</th>\n        <th mdcDataTableHeaderCell numeric>Protein (g)</th>\n        <th mdcDataTableHeaderCell>Comments</th>\n      </tr>\n    </thead>\n    <tbody mdcDataTableContent>\n      <tr mdcDataTableRow *ngFor="let dessert of desserts" [selected]="dessert.checked">\n        <td mdcDataTableCell>\n          <mdc-checkbox [checked]="dessert.checked"></mdc-checkbox>\n        </td>\n        <td mdcDataTableCell>{{dessert.name}}</td>\n        <td mdcDataTableCell numeric>{{dessert.calories}}</td>\n        <td mdcDataTableCell numeric>{{dessert.carbs}}</td>\n        <td mdcDataTableCell numeric>{{dessert.protein}}</td>\n        <td mdcDataTableCell>{{dessert.comment}}</td>\n      </tr>\n    </tbody>\n  </table>\n</mdc-data-table>',ts:"".concat(this.exampleDessertsArray,"\n\nonSelectionChanged(event: MDCDataTableRowSelectionChangedEvent): void {\n  this.selectionChangedEvent = event;\n  this.desserts[event.index].checked = event.selected;\n}\n\nonSelectedAll(): void {\n  this.desserts.forEach(_ => _.checked = true);\n}\n\nonUnselectedAll(): void {\n  this.desserts.forEach(_ => _.checked = false);\n}")}}return _createClass(e,[{key:"onSelectionChanged",value:function(e){this.selectionChangedEvent=e,this.desserts[e.index].checked=e.selected}},{key:"onSelectedAll",value:function(){this.desserts.forEach((function(e){return e.checked=!0}))}},{key:"onUnselectedAll",value:function(){this.desserts.forEach((function(e){return e.checked=!1}))}}]),e}(),C.\u0275fac=function(e){return new(e||C)},C.\u0275cmp=r.Fb({type:C,selectors:[["ng-component"]],decls:45,vars:7,consts:[[1,"demo-content"],[1,"demo-content__headline"],["mdcDataTableTable",""],["mdcDataTableHeaderRow",""],["mdcDataTableHeaderCell",""],["mdcDataTableHeaderCell","","numeric",""],["mdcDataTableContent",""],["mdcDataTableRow","",4,"ngFor","ngForOf"],[3,"example"],[3,"selectionChanged","selectedAll","unselectedAll"],["mdcDataTableRow","",3,"selected",4,"ngFor","ngForOf"],["mdcDataTableRow",""],["mdcDataTableCell",""],["mdcDataTableCell","","numeric",""],["mdcDataTableRow","",3,"selected"],[3,"checked"]],template:function(e,a){1&e&&(r.Rb(0,"div",0),r.Rb(1,"h3",1),r.wc(2,"Standard"),r.Qb(),r.Rb(3,"mdc-data-table"),r.Rb(4,"table",2),r.Rb(5,"thead"),r.Rb(6,"tr",3),r.Rb(7,"th",4),r.wc(8,"Dessert"),r.Qb(),r.Rb(9,"th",5),r.wc(10,"Calories"),r.Qb(),r.Rb(11,"th",5),r.wc(12,"Carbs"),r.Qb(),r.Rb(13,"th",5),r.wc(14,"Protein (g)"),r.Qb(),r.Rb(15,"th",4),r.wc(16,"Comments"),r.Qb(),r.Qb(),r.Qb(),r.Rb(17,"tbody",6),r.uc(18,u,11,5,"tr",7),r.Qb(),r.Qb(),r.Qb(),r.Mb(19,"example-viewer",8),r.Qb(),r.Rb(20,"div",0),r.Rb(21,"h3",1),r.wc(22,"Data Table with Row Selection"),r.Qb(),r.Rb(23,"mdc-data-table",9),r.Zb("selectionChanged",(function(e){return a.onSelectionChanged(e)}))("selectedAll",(function(){return a.onSelectedAll()}))("unselectedAll",(function(){return a.onUnselectedAll()})),r.Rb(24,"table",2),r.Rb(25,"thead"),r.Rb(26,"tr",3),r.Rb(27,"th",4),r.Mb(28,"mdc-checkbox"),r.Qb(),r.Rb(29,"th",4),r.wc(30,"Dessert"),r.Qb(),r.Rb(31,"th",5),r.wc(32,"Calories"),r.Qb(),r.Rb(33,"th",5),r.wc(34,"Carbs"),r.Qb(),r.Rb(35,"th",5),r.wc(36,"Protein (g)"),r.Qb(),r.Rb(37,"th",4),r.wc(38,"Comments"),r.Qb(),r.Qb(),r.Qb(),r.Rb(39,"tbody",6),r.uc(40,p,13,7,"tr",10),r.Qb(),r.Qb(),r.Qb(),r.Rb(41,"p"),r.wc(42),r.ec(43,"json"),r.Qb(),r.Mb(44,"example-viewer",8),r.Qb()),2&e&&(r.Bb(18),r.ic("ngForOf",a.desserts),r.Bb(1),r.ic("example",a.exampleStandard),r.Bb(21),r.ic("ngForOf",a.desserts),r.Bb(2),r.yc("Selection event: ",r.fc(43,5,a.selectionChangedEvent),""),r.Bb(2),r.ic("example",a.exampleRowSelection))},directives:[d.a,i.f,i.d,i.c,i.b,m.j,b.a,h.a,i.e,i.a],pipes:[m.f],encapsulation:2}),C)}]}],y=((T=function e(){_classCallCheck(this,e)}).\u0275mod=r.Jb({type:T}),T.\u0275inj=r.Ib({factory:function(e){return new(e||T)},imports:[[c.e.forChild(g)],c.e]}),T),k=((f=function e(){_classCallCheck(this,e)}).\u0275mod=r.Jb({type:f}),f.\u0275inj=r.Ib({factory:function(e){return new(e||f)},imports:[[n.a,y]]}),f)}}]);