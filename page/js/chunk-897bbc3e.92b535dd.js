(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-897bbc3e"],{"20e9":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-input"},[n("im-demo-row",{attrs:{title:"基本用法"}},[n("im-input")],1),n("im-demo-row",{attrs:{title:"鼠标悬浮的时候自动获取焦点"}},[n("im-input",{attrs:{focusOnHover:""}})],1),n("im-demo-row",{attrs:{title:"类型"}},[n("im-input",{attrs:{type:"fill"}}),n("im-input",{attrs:{type:"line"}}),n("im-input",{attrs:{type:"none"}})],1),n("im-demo-row",{attrs:{title:"颜色"}},t._l(["primary","success","warn","error","info","disabled"],function(t){return n("im-input",{key:t,attrs:{color:t}})}),1),n("im-demo-row",{attrs:{title:"大小"}},[n("im-input",{attrs:{size:"large"}}),n("im-input",{attrs:{size:"default"}}),n("im-input",{attrs:{size:"small"}})],1),n("im-demo-row",{attrs:{title:"形状"}},[n("im-input",{attrs:{shape:"round"}}),n("im-input",{attrs:{shape:"fillet"}}),n("im-input",{attrs:{shape:"none"}})],1),n("im-demo-row",{attrs:{title:"输入框类型"}},[n("im-input",{attrs:{inputType:"password",value:123456}})],1),n("im-demo-row",{attrs:{title:"图标"}},[n("im-input",{attrs:{icon:"pl-date-fill"}})],1),n("im-demo-row",{attrs:{title:"自定义删除动作"}},[n("im-input",{attrs:{icon:"pl-down"},on:{clear:function(e){return t.$plain.log("clear")}}})],1),n("im-demo-row",{attrs:{title:"长输入框"}},[n("im-input",{attrs:{long:""}})],1),n("im-demo-row",{attrs:{title:"加载中"}},[n("im-input",{attrs:{loading:"",type:"fill"}}),n("im-input",{attrs:{loading:""}}),n("im-input",{attrs:{loading:"",type:"none"}})],1),n("im-demo-row",{attrs:{title:"节流以及回车等待"}},[n("im-input",{on:{enter:function(e){return t.$plain.log("enter")}}}),n("im-input",{on:{enter:t.testWaiting}})],1),n("im-demo-row",{attrs:{title:"键盘事件"}},[n("im-button-group",[n("im-button",{attrs:{label:"enter",type:"line"}}),n("im-button",{attrs:{label:"space",type:"line"}}),n("im-button",{attrs:{label:"esc",type:"line"}}),n("im-button",{attrs:{label:"up",type:"line"}}),n("im-button",{attrs:{label:"down",type:"line"}}),n("im-button",{attrs:{label:"left",type:"line"}}),n("im-button",{attrs:{label:"right",type:"line"}})],1),n("im-input",{on:{enter:function(e){return t.$plain.log("enter")},space:function(e){return t.$plain.log("space")},esc:function(e){return t.$plain.log("esc")},up:function(e){return t.$plain.log("up")},down:function(e){return t.$plain.log("down")},left:function(e){return t.$plain.log("left")},right:function(e){return t.$plain.log("right")}}})],1),n("im-demo-row",{attrs:{title:"前置后置插槽"}},[n("im-input",{attrs:{placeholder:""}},[n("div",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("http://")]),n("div",{attrs:{slot:"append"},slot:"append"},[t._v(".com")])])],1),n("im-demo-row",{attrs:{title:"推荐输入"}},[n("im-input",{attrs:{suggestion:t.data.map(function(t){return t.name})},model:{value:t.suggestVal,callback:function(e){t.suggestVal=e},expression:"suggestVal"}}),n("span",[t._v(t._s(t.suggestVal))])],1),n("im-demo-row",{attrs:{title:"推荐输入，自定义渲染内容"}},[n("im-input",{attrs:{suggestion:t.data,suggestionLabelKey:"name"},scopedSlots:t._u([{key:"suggestion",fn:function(e){var i=e.item;e.index;return[n("div",{staticClass:"demo-input-suggestion"},[n("div",{staticClass:"demo-input-suggestion-title"},[t._v(t._s(i.name))]),n("div",{staticClass:"demo-input-suggestion-desc"},[t._v(t._s(i.desc))])])]}}])})],1),n("im-demo-row",{attrs:{title:"推荐输入，自定义筛选逻辑"}},[n("im-input",{attrs:{suggestion:t.data,suggestionLabelKey:"name",suggestionFilter:t.suggestionFilter},scopedSlots:t._u([{key:"suggestion",fn:function(e){var i=e.item;e.index;return[n("div",{staticClass:"demo-input-suggestion"},[n("div",{staticClass:"demo-input-suggestion-title"},[t._v(t._s(i.name))]),n("div",{staticClass:"demo-input-suggestion-desc"},[t._v(t._s(i.desc))])])]}}])})],1)],1)},s=[],a=(n("7f7f"),n("96cf"),n("3b8d")),r={name:"demo-input",data:function(){return{suggestVal:null,data:[{name:"湖南",desc:"金三角建材城",val:"1"},{name:"湖北",desc:"中豪装饰城",val:"2"},{name:"江西",desc:"红星美凯龙",val:"3"},{name:"山东",desc:"大红房装饰城",val:"4"},{name:"山西",desc:"红星美凯龙和平商场",val:"5"},{name:"广西",desc:"红星美凯龙方北商场",val:"6"},{name:"安徽",desc:"怀特装饰城",val:"7"},{name:"河北",desc:"红房子家居广场",val:"8"},{name:"河南",desc:"758陶瓷市场",val:"9"},{name:"广东",desc:"好家居装饰城",val:"10"}]}},methods:{testWaiting:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$plain.$utils.delay(2e3);case 2:console.log("enter:",(new Date).getTime());case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),suggestionFilter:function(t,e){return t.name.indexOf(e)>-1||t.desc.indexOf(e)>-1}}},o=r,l=(n("6366"),n("2877")),u=Object(l["a"])(o,i,s,!1,null,null,null);e["default"]=u.exports},6366:function(t,e,n){"use strict";var i=n("ce05"),s=n.n(i);s.a},ce05:function(t,e,n){}}]);
//# sourceMappingURL=chunk-897bbc3e.92b535dd.js.map