webpackJsonp([14],{"4T7I":function(t,e,o){"use strict";function a(t){o("f/Jc")}Object.defineProperty(e,"__esModule",{value:!0});var i=o("u8dG"),l=o("VTXg"),n=o("VU/8"),s=a,c=n(i.a,l.a,!1,s,"data-v-bc580b46",null);e.default=c.exports},NdTE:function(t,e,o){e=t.exports=o("FZ+f")(!1),e.push([t.i,".page_list .list[data-v-bc580b46]{width:100%}.page_list .list_item[data-v-bc580b46]{height:50px;width:100%;border-bottom:1px solid rgba(1,1,1,.2);font-size:14px;line-height:50px;text-align:center}[data-v-bc580b46]{margin:0;padding:0;-webkit-touch-callout:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}body[data-v-bc580b46]{background-color:#fff}ul[data-v-bc580b46]{list-style-type:none}a[data-v-bc580b46]{text-decoration:none;color:#18b4fe}[v-cloak][data-v-bc580b46]{display:none}.mescroll[data-v-bc580b46]{position:fixed;top:70px;bottom:0;height:auto}.data-list li[data-v-bc580b46]{position:relative;border-bottom:1px solid #eee}.data-list .pd-img[data-v-bc580b46]{position:absolute;left:18px;top:18px;width:80px;height:80px}.data-list .pd-name[data-v-bc580b46]{font-size:16px;line-height:20px;height:40px;overflow:hidden}.data-list .pd-price[data-v-bc580b46]{margin-top:8px;color:red}.data-list .pd-sold[data-v-bc580b46]{font-size:12px;margin-top:8px;color:gray}",""])},VTXg:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("n22-page",{staticClass:"page_list"},[o("mt-header",{attrs:{slot:"header",title:"列表滚动",fixed:!0},slot:"header"},[o("mt-button",{attrs:{slot:"left",icon:"back"},nativeOn:{click:function(e){t.back(e)}},slot:"left"})],1),t._v(" "),o("div",{attrs:{slot:"content"},slot:"content"},[o("div",{staticClass:"mescroll list",attrs:{id:"mescroll"}},[o("ul",{staticClass:"data-list",attrs:{id:"dataList"}},t._l(t.list,function(e,a){return o("li",{key:a,staticClass:"list_item"},[t._v("\n           "+t._s(e)+"\n        ")])}))])])],1)},i=[],l={render:a,staticRenderFns:i};e.a=l},"f/Jc":function(t,e,o){var a=o("NdTE");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("rjj0")("aa83c6ea",a,!0,{})},u8dG:function(t,e,o){"use strict";e.a={name:"n22List",components:{},data:function(){return{mescroll:null,list:[1],loading:!1,allLoaded:!1}},methods:{sunbmit:function(){},loadMore:function(){var t=this;console.log("加载数据"),setTimeout(function(){for(var e=t.list[t.list.length-1],o=1;o<=15;o++)t.list.push(e+o);t.mescroll.endSuccess()},2500)},downCallback:function(){var t=this;console.log("下拉刷新"),setTimeout(function(){t.mescroll.endErr()},2e3)},someFunction:function(){console.log("加载数据--")}},mounted:function(){var t=this;t.mescroll=new MeScroll("mescroll",{down:{callback:t.downCallback},up:{callback:t.loadMore,isBounce:!1,toTop:{src:"./../../../static/lib/scroll/img/mescroll-totop.png"},empty:{warpId:"dataList",icon:"../res/img/mescroll-empty.png"}}})}}}});