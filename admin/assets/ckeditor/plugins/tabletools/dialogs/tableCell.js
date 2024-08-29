﻿/*
 Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or s://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.dialog.add("cellProperties",function(g){function k(a){return{isSpacer:!0,type:"html",html:"\x26nbsp;",requiredContent:a?a:void 0}}function r(){return{type:"vbox",padding:0,children:[]}}function t(a){return{requiredContent:"td{"+a+"}",type:"hbox",widths:["70%","30%"],children:[{type:"text",id:a,width:"100px",label:e[a],validate:n.number(c["invalid"+CKEDITOR.tools.capitalize(a)]),onLoad:function(){var b=this.getDialog().getContentElement("info",a+"Type").getElement(),d=this.getInputElement(),
c=d.getAttribute("aria-labelledby");d.setAttribute("aria-labelledby",[c,b.$.id].join(" "))},setup:f(function(b){var d=parseFloat(b.getAttribute(a),10);b=parseFloat(b.getStyle(a),10);if(!isNaN(b))return b;if(!isNaN(d))return d}),commit:function(b){var d=parseFloat(this.getValue(),10),c=this.getDialog().getValueOf("info",a+"Type")||u(b,a);isNaN(d)?b.removeStyle(a):b.setStyle(a,d+c);b.removeAttribute(a)},"default":""},{type:"select",id:a+"Type",label:g.lang.table[a+"Unit"],labelStyle:"visibility:hidden;display:block;width:0;overflow:hidden",
"default":"px",items:[[p.widthPx,"px"],[p.widthPc,"%"]],setup:f(function(b){return u(b,a)})}]}}function f(a){return function(b){for(var d=a(b[0]),c=1;c<b.length;c++)if(a(b[c])!==d){d=null;break}"undefined"!=typeof d&&(this.setValue(d),CKEDITOR.env.gecko&&"select"==this.type&&!d&&(this.getInputElement().$.selectedIndex=-1))}}function u(a,b){var d=/^(\d+(?:\.\d+)?)(px|%)$/.exec(a.getStyle(b)||a.getAttribute(b));if(d)return d[2]}var p=g.lang.table,c=p.cell,e=g.lang.common,n=CKEDITOR.dialog.validate,
w="rtl"==g.lang.dir,l=g.plugins.colordialog,q=[t("width"),t("height"),k(["td{width}","td{height}"]),{type:"select",id:"wordWrap",requiredContent:"td{white-space}",label:c.wordWrap,"default":"yes",items:[[c.yes,"yes"],[c.no,"no"]],setup:f(function(a){var b=a.getAttribute("noWrap");if("nowrap"==a.getStyle("white-space")||b)return"no"}),commit:function(a){"no"==this.getValue()?a.setStyle("white-space","nowrap"):a.removeStyle("white-space");a.removeAttribute("noWrap")}},k("td{white-space}"),{type:"select",
id:"hAlign",requiredContent:"td{text-align}",label:c.hAlign,"default":"",items:[[e.notSet,""],[e.left,"left"],[e.center,"center"],[e.right,"right"],[e.justify,"justify"]],setup:f(function(a){var b=a.getAttribute("align");return a.getStyle("text-align")||b||""}),commit:function(a){var b=this.getValue();b?a.setStyle("text-align",b):a.removeStyle("text-align");a.removeAttribute("align")}},{type:"select",id:"vAlign",requiredContent:"td{vertical-align}",label:c.vAlign,"default":"",items:[[e.notSet,""],
[e.alignTop,"top"],[e.alignMiddle,"middle"],[e.alignBottom,"bottom"],[c.alignBaseline,"baseline"]],setup:f(function(a){var b=a.getAttribute("vAlign");a=a.getStyle("vertical-align");switch(a){case "top":case "middle":case "bottom":case "baseline":break;default:a=""}return a||b||""}),commit:function(a){var b=this.getValue();b?a.setStyle("vertical-align",b):a.removeStyle("vertical-align");a.removeAttribute("vAlign")}},k(["td{text-align}","td{vertical-align}"]),{type:"select",id:"cellType",requiredContent:"th",
label:c.cellType,"default":"td",items:[[c.data,"td"],[c.header,"th"]],setup:f(function(a){return a.getName()}),commit:function(a){a.renameNode(this.getValue())}},k("th"),{type:"text",id:"rowSpan",requiredContent:"td[rowspan]",label:c.rowSpan,"default":"",validate:n.integer(c.invalidRowSpan),setup:f(function(a){if((a=parseInt(a.getAttribute("rowSpan"),10))&&1!=a)return a}),commit:function(a){var b=parseInt(this.getValue(),10);b&&1!=b?a.setAttribute("rowSpan",this.getValue()):a.removeAttribute("rowSpan")}},
{type:"text",id:"colSpan",requiredContent:"td[colspan]",label:c.colSpan,"default":"",validate:n.integer(c.invalidColSpan),setup:f(function(a){if((a=parseInt(a.getAttribute("colSpan"),10))&&1!=a)return a}),commit:function(a){var b=parseInt(this.getValue(),10);b&&1!=b?a.setAttribute("colSpan",this.getValue()):a.removeAttribute("colSpan")}},k(["td[colspan]","td[rowspan]"]),{type:"hbox",padding:0,widths:l?["60%","40%"]:["100%"],requiredContent:"td{background-color}",children:function(){var a=[{type:"text",
id:"bgColor",label:c.bgColor,"default":"",setup:f(function(a){var d=a.getAttribute("bgColor");return a.getStyle("background-color")||d}),commit:function(a){this.getValue()?a.setStyle("background-color",this.getValue()):a.removeStyle("background-color");a.removeAttribute("bgColor")}}];l&&a.push({type:"button",id:"bgColorChoose","class":"colorChooser",label:c.chooseColor,onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")},onClick:function(){g.getColorFromDialog(function(a){a&&
this.getDialog().getContentElement("info","bgColor").setValue(a);this.focus()},this)}});return a}()},{type:"hbox",padding:0,widths:l?["60%","40%"]:["100%"],requiredContent:"td{border-color}",children:function(){var a=[{type:"text",id:"borderColor",label:c.borderColor,"default":"",setup:f(function(a){var d=a.getAttribute("borderColor");return a.getStyle("border-color")||d}),commit:function(a){this.getValue()?a.setStyle("border-color",this.getValue()):a.removeStyle("border-color");a.removeAttribute("borderColor")}}];
l&&a.push({type:"button",id:"borderColorChoose","class":"colorChooser",label:c.chooseColor,style:(w?"margin-right":"margin-left")+": 10px",onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")},onClick:function(){g.getColorFromDialog(function(a){a&&this.getDialog().getContentElement("info","borderColor").setValue(a);this.focus()},this)}});return a}()}],m=0,v=-1,h=[r()],q=CKEDITOR.tools.array.filter(q,function(a){var b=a.requiredContent;delete a.requiredContent;(b=g.filter.check(b))&&
!a.isSpacer&&m++;return b});5<m&&(h=h.concat([k(),r()]));CKEDITOR.tools.array.forEach(q,function(a){a.isSpacer||v++;5<m&&v>=m/2?h[2].children.push(a):h[0].children.push(a)});CKEDITOR.tools.array.forEach(h,function(a){a.isSpacer||(a=a.children,a[a.length-1].isSpacer&&a.pop())});return{title:c.title,minWidth:1===h.length?205:410,minHeight:50,contents:[{id:"info",label:c.title,accessKey:"I",elements:[{type:"hbox",widths:1===h.length?["100%"]:["40%","5%","40%"],children:h}]}],getModel:function(a){return CKEDITOR.plugins.tabletools.getSelectedCells(a.getSelection())},
onShow:function(){var a=this.getModel(this.getParentEditor());this.setupContent(a)},onOk:function(){for(var a=this._.editor.getSelection(),b=a.createBookmarks(),d=this.getParentEditor(),c=this.getModel(d),e=0;e<c.length;e++)this.commitContent(c[e]);d.forceNextSelectionCheck();a.selectBookmarks(b);d.selectionChange()},onLoad:function(){var a={};this.foreach(function(b){b.setup&&b.commit&&(b.setup=CKEDITOR.tools.override(b.setup,function(c){return function(){c.apply(this,arguments);a[b.id]=b.getValue()}}),
b.commit=CKEDITOR.tools.override(b.commit,function(c){return function(){a[b.id]!==b.getValue()&&c.apply(this,arguments)}}))})}}});