(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"00aa":function(t,e,n){"use strict";n.r(e);var r=n("b063"),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=u.a},"018b":function(t,e,n){"use strict";(function(t){n("c0b4"),n("921b");r(n("66fd"));var e=r(n("3afd"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"1d92":function(t,e,n){"use strict";var r,u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))},"3afd":function(t,e,n){"use strict";n.r(e);var r=n("1d92"),u=n("00aa");for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);n("6cc5");var i,s=n("f0c5"),o=Object(s["a"])(u["default"],r["b"],r["c"],!1,null,"8d57cafa",null,!1,r["a"],i);e["default"]=o.exports},"6cc5":function(t,e,n){"use strict";var r=n("c6de"),u=n.n(r);u.a},b063:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,u,a,i){try{var s=t[a](i),o=s.value}catch(c){return void n(c)}s.done?e(o):Promise.resolve(o).then(r,u)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,u){var i=t.apply(e,n);function s(t){a(i,r,u,s,o,"next",t)}function o(t){a(i,r,u,s,o,"throw",t)}s(void 0)}))}}var s={data:function(){return{ruleForm:{},tableName:""}},onLoad:function(){var e=t.getStorageSync("loginTable");this.tableName=e,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var t=i(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.yonghuming||"yonghu"!=this.tableName){t.next=3;break}return this.$utils.msg("用户名不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if("yonghu"!=this.tableName||!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){t.next=9;break}return this.$utils.msg("身份证应输入身份证格式"),t.abrupt("return");case 9:if("yonghu"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){t.next=12;break}return this.$utils.msg("手机应输入手机格式"),t.abrupt("return");case 12:return t.next=14,this.$api.register("".concat(this.tableName),this.ruleForm);case 14:this.$utils.msgBack("注册成功");case 16:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=s}).call(this,n("543d")["default"])},c6de:function(t,e,n){}},[["018b","common/runtime","common/vendor"]]]);