webpackJsonp([3],{"0/ux":function(t,e,n){"use strict";function s(t){n("o0kX")}Object.defineProperty(e,"__esModule",{value:!0});var a=n("D1Zz"),o=n("Bpu2"),i=n("VU/8"),r=s,c=i(a.a,o.a,!1,r,null,null);e.default=c.exports},Bpu2:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"demo_canvas",staticClass:"demo_canvas"},[n("div",{staticClass:"option"},[n("span",{staticClass:"score"},[t._v(t._s(t.score)+"分")])])])},a=[],o={render:s,staticRenderFns:a};e.a=o},D1Zz:function(t,e,n){"use strict";e.a={name:"n22Canvas",data:function(){return{score:0}},methods:{getSun:function(t){var e=this,n=t.target;n.style.right="0px",n.style.top="0px",n.style.opacity="0.3",n.style["pointer-events"]="none",setTimeout(function(){e.$refs.demo_canvas.removeChild(n),e.score++},1100)},createSun:function(){var t=this,e=Math.random()*this.screenWidth,n=Math.random()*this.screenHeight,s=new Image;s.src="./static/images/plants/sun.gif",s.className+="sun_img",s.style.right=e+"px",s.style.top=n+"px",s.onload=function(){t.$refs.demo_canvas.appendChild(s)},s.addEventListener("touchstart",this.getSun)}},mounted:function(){var t=this;setInterval(function(e){t.createSun()},1e3)}}},"G/zu":function(t,e,n){t.exports=n.p+"static/img/bg.e455a28.jpg"},beeG:function(t,e,n){var s=n("kxFB");e=t.exports=n("FZ+f")(!1),e.push([t.i,".demo_canvas{overflow:hidden;background-image:url("+s(n("G/zu"))+");background-size:100% 100%}.demo_canvas .option{position:relative}.demo_canvas .option .score{font-size:1.4rem;position:absolute;color:#39f;right:100px;top:15px}.demo_canvas .sun_img{position:absolute;-webkit-transition:all 1s linear;transition:all 1s linear;z-index:10;width:50px;height:50px;opacity:1}",""])},o0kX:function(t,e,n){var s=n("beeG");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("2ec138ac",s,!0,{})}});