(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sijicihui/add-or-update"],{"118b":function(t,e,n){"use strict";n.r(e);var i=n("19a3"),r=n("56e1");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("932a");var u,o=n("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"15f6219e",null,!1,i["a"],u);e["default"]=c.exports},"19a3":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"56e1":function(t,e,n){"use strict";n.r(e);var i=n("d900"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},6768:function(t,e,n){},"932a":function(t,e,n){"use strict";var i=n("6768"),r=n.n(i);r.a},a4f0:function(t,e,n){"use strict";(function(t){n("c0b4"),n("921b");i(n("66fd"));var e=i(n("118b"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},d900:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,i,r,a,u){try{var o=t[a](u),c=o.value}catch(s){return void n(s)}o.done?e(c):Promise.resolve(c).then(i,r)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var u=t.apply(e,n);function o(t){a(u,i,r,o,c,"next",t)}function c(t){a(u,i,r,o,c,"throw",t)}o(void 0)}))}}var o=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("2e70"))}.bind(null,n)).catch(n.oe)},c={data:function(){return{ruleForm:{danci:"",dengji:"",tupian:"",zimu:"",yinbiao:"",fanyi:"",tingli:"",faburiqi:""},user:{}}},components:{wPicker:o},computed:{},onLoad:function(){var e=u(i.default.mark((function e(n){var r,a,u,o;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(a=e.sent,this.user=a.data,this.ruleForm.userid=t.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid),!n.id){e.next=13;break}return this.ruleForm.id=n.id,e.next=11,this.$api.info("sijicihui",this.ruleForm.id);case 11:a=e.sent,this.ruleForm=a.data;case 13:if(!n.cross){e.next=44;break}u=t.getStorageSync("crossObj"),e.t0=i.default.keys(u);case 16:if((e.t1=e.t0()).done){e.next=44;break}if(o=e.t1.value,"danci"!=o){e.next=21;break}return this.ruleForm.danci=u[o],e.abrupt("continue",16);case 21:if("dengji"!=o){e.next=24;break}return this.ruleForm.dengji=u[o],e.abrupt("continue",16);case 24:if("tupian"!=o){e.next=27;break}return this.ruleForm.tupian=u[o],e.abrupt("continue",16);case 27:if("zimu"!=o){e.next=30;break}return this.ruleForm.zimu=u[o],e.abrupt("continue",16);case 30:if("yinbiao"!=o){e.next=33;break}return this.ruleForm.yinbiao=u[o],e.abrupt("continue",16);case 33:if("fanyi"!=o){e.next=36;break}return this.ruleForm.fanyi=u[o],e.abrupt("continue",16);case 36:if("tingli"!=o){e.next=39;break}return this.ruleForm.tingli=u[o],e.abrupt("continue",16);case 39:if("faburiqi"!=o){e.next=42;break}return this.ruleForm.faburiqi=u[o],e.abrupt("continue",16);case 42:e.next=16;break;case 44:this.styleChange();case 45:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},faburiqiChange:function(t){this.ruleForm.faburiqi=t.target.value,this.$forceUpdate()},tupianTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.tupian=t.$base.url+"upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},tingliTap:function(){var t=this;this.$api.uploadMedia((function(e){t.ruleForm.tingli=t.$base.url+"upload/"+e.file,t.$forceUpdate()}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=u(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.ruleForm.id){t.next=5;break}return t.next=3,this.$api.update("sijicihui",this.ruleForm);case 3:t.next=7;break;case 5:return t.next=7,this.$api.add("sijicihui",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,n=e.getFullYear(),i=e.getMonth()+1,r=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(n,"-").concat(i,"-").concat(r)},toggleTab:function(t){this.$refs[t].show()}}};e.default=c}).call(this,n("543d")["default"])}},[["a4f0","common/runtime","common/vendor"]]]);