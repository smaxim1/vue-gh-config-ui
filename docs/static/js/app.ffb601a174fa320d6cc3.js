webpackJsonp([0],{0:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r=a("8+8L"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("div",{staticClass:"container-fluid",attrs:{id:"app"}},[e("router-view")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar navbar-inverse bg-primary"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e("img",{attrs:{src:a("w0/1"),width:"50",height:"50"}}),this._v(" Guided Help - Manage system parameters")])])}]};var m=a("VU/8")({name:"app"},n,!1,function(t){a("pwOD")},null,null).exports,o=a("/ocq"),i={props:{sysParam:{type:Object,required:!0}},data:function(){return{currentSysParam:this.sysParam,IsEditMode:!1}},computed:{SystemParameter:{get:function(){return this.currentSysParam},set:function(t){this.currentSysParam=t}}},methods:{toggleEditMode:function(){this.IsEditMode=!this.IsEditMode},saveChanges:function(){var t=this;this.$http.post("http://localhost:1337/systemparameters/edit",this.SystemParameter).then(function(e){t.SystemParameter=e.data,t.SystemParameter.DateChanged=new Date(1e3*e.data.DateChanged).toLocaleString(),t.toggleEditMode()},function(t){console.log("Error:",t.data)})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v(t._s(t.SystemParameter.ID))]),t._v(" "),a("td",[a("span",[t._v(t._s(t.SystemParameter.Name))])]),t._v(" "),a("td",[t.IsEditMode?a("input",{directives:[{name:"model",rawName:"v-model",value:t.SystemParameter.Value,expression:"SystemParameter.Value"}],attrs:{type:"text"},domProps:{value:t.SystemParameter.Value},on:{input:function(e){e.target.composing||t.$set(t.SystemParameter,"Value",e.target.value)}}}):t._e(),t._v(" "),t.IsEditMode?t._e():a("span",[t._v(t._s(t.SystemParameter.Value))])]),t._v(" "),a("td",[t.IsEditMode?a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.SystemParameter.Comment,expression:"SystemParameter.Comment"}],attrs:{cols:"50",rows:"5"},domProps:{value:t.SystemParameter.Comment},on:{input:function(e){e.target.composing||t.$set(t.SystemParameter,"Comment",e.target.value)}}}):t._e(),t._v(" "),t.IsEditMode?t._e():a("span",[t._v(t._s(t.SystemParameter.Comment))])]),t._v(" "),a("td",[t._v(t._s(t.SystemParameter.DateChanged))]),t._v(" "),a("td",[t.IsEditMode?t._e():a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.toggleEditMode}},[t._v("Edit")]),t._v(" "),t.IsEditMode?a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.saveChanges}},[t._v("Save")]):t._e()])])},staticRenderFns:[]};var c={components:{SysParamItem:a("VU/8")(i,l,!1,function(t){a("oEbt")},null,null).exports},name:"SysParam",data:function(){return{SysParamsItems:[{id:1,name:"Item A",value:"A",comment:"A comment",date:"2017-11-26"},{id:2,name:"Item B",value:"B",comment:"B comment",date:"2017-11-24"},{id:3,name:"Item C",value:"C",comment:"C comment",date:"2017-11-21"}],isVisibleAddNewForm:!1,newParam:{}}},mounted:function(){this.getSysParams()},methods:{getSysParams:function(){var t=this;this.$http.get("http://localhost:1337/systemparameters").then(function(e){t.SysParamsItems=e.data.map(function(t){return{ID:t.ID,Name:t.Name,Value:t.Value,Comment:t.Comment,DateChanged:new Date(1e3*t.DateChanged).toLocaleString(),IsEditMode:!1}})})},toggleFormVisibility:function(){this.isVisibleAddNewForm=!this.isVisibleAddNewForm},submitNewParam:function(){var t=this;this.$http.post("http://localhost:1337/systemparameters/create",this.newParam).then(function(e){t.SysParamsItems=e.data.map(function(t){return{ID:t.ID,Name:t.Name,Value:t.Value,Comment:t.Comment,DateChanged:new Date(1e3*t.DateChanged).toLocaleString()}}),t.toggleFormVisibility()},function(t){console.log("Error:",t.data)})}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("button",{staticClass:"button button-primary",on:{click:t.toggleFormVisibility}},[t._v("Add new system parameter")])]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t.isVisibleAddNewForm?a("form",[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-4",attrs:{for:"paramName"}},[t._v("Parameter name")]),t._v(" "),a("div",{staticClass:"col-lg-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newParam.Name,expression:"newParam.Name"}],staticClass:"form-control",attrs:{type:"text",id:"paramName","aria-describedby":"paramName",placeholder:"Enter new parameter name"},domProps:{value:t.newParam.Name},on:{input:function(e){e.target.composing||t.$set(t.newParam,"Name",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-4",attrs:{for:"paramValue"}},[t._v("Parameter value")]),t._v(" "),a("div",{staticClass:"col-lg-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newParam.Value,expression:"newParam.Value"}],staticClass:"form-control",attrs:{type:"text",id:"paramValue","aria-describedby":"paramValue",placeholder:"Enter new parameter value"},domProps:{value:t.newParam.Value},on:{input:function(e){e.target.composing||t.$set(t.newParam,"Value",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-4 col-form-label",attrs:{for:"paramComment"}},[t._v("Comment")]),t._v(" "),a("div",{staticClass:"col-lg-8"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newParam.Comment,expression:"newParam.Comment"}],staticClass:"form-control",attrs:{cols:"50",rows:"3",id:"paramComment","aria-describedby":"paramComment",placeholder:"Enter comment"},domProps:{value:t.newParam.Comment},on:{input:function(e){e.target.composing||t.$set(t.newParam,"Comment",e.target.value)}}})])]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.submitNewParam}},[t._v("Submit")])]):t._e()]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),a("tbody",t._l(t.SysParamsItems,function(t){return a("sys-param-item",{key:t.id,attrs:{sysParam:t}})}))])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("ID")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Value")]),t._v(" "),a("th",[t._v("Comment")]),t._v(" "),a("th",[t._v("Date of change")]),t._v(" "),a("th"),t._v(" "),a("th")])])}]};var u=a("VU/8")(c,d,!1,function(t){a("R/VM")},"data-v-b8ad82c2",null).exports;s.a.use(o.a);var v=new o.a({routes:[{path:"/",name:"SysParamList",component:u}]});s.a.use(r.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:v,template:"<App/>",components:{App:m}})},"R/VM":function(t,e){},oEbt:function(t,e){},pwOD:function(t,e){},"w0/1":function(t,e,a){t.exports=a.p+"static/img/guided-help-icon.230563b.png"}},["NHnr"]);
//# sourceMappingURL=app.ffb601a174fa320d6cc3.js.map