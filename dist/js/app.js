!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var t={},i={},r={},n={}.hasOwnProperty,a=/^\.\.?(\/|$)/,s=function(e,t){for(var i,r=[],n=(a.test(t)?e+"/"+t:t).split("/"),s=0,o=n.length;s<o;s++)i=n[s],".."===i?r.pop():"."!==i&&""!==i&&r.push(i);return r.join("/")},o=function(e){return e.split("/").slice(0,-1).join("/")},l=function(t){return function(i){var r=s(o(t),i);return e.require(r,t)}},c=function(e,t){var r=null;r=f&&f.createHot(e);var n={id:e,exports:{},hot:r};return i[e]=n,t(n.exports,l(e),n),n.exports},u=function(e){return r[e]?u(r[e]):e},d=function(e,t){return u(s(o(e),t))},h=function(e,r){null==r&&(r="/");var a=u(e);if(n.call(i,a))return i[a].exports;if(n.call(t,a))return c(a,t[a]);throw new Error("Cannot find module '"+e+"' from '"+r+"'")};h.alias=function(e,t){r[t]=e};var p=/\.[^.\/]+$/,m=/\/index(\.[^\/]+)?$/,g=function(e){if(p.test(e)){var t=e.replace(p,"");n.call(r,t)&&r[t].replace(p,"")!==t+"/index"||(r[t]=e)}if(m.test(e)){var i=e.replace(m,"");n.call(r,i)||(r[i]=e)}};h.register=h.define=function(e,r){if("object"==typeof e)for(var a in e)n.call(e,a)&&h.register(a,e[a]);else t[e]=r,delete i[e],g(e)},h.list=function(){var e=[];for(var i in t)n.call(t,i)&&e.push(i);return e};var f=e._hmr&&new e._hmr(d,h,t,i);h._cache=i,h.hmr=f&&f.wrap,h.brunch=!0,e.require=h}}(),function(){var e;window;require.register("app.js",function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var n=t("fastclick"),a=r(n),s=t("angular"),o=r(s);t("angular-base-apps"),t("angular-google-chart/ng-google-chart"),t("angular-ui-router");var l=t("firebase"),c=r(l);t("angularfire");var u=t("./config/config-firebase"),d=r(u);t("angular-icons/dist/open-iconic"),t("angular-icons/dist/ionicons"),t("angular-icons/dist/material-icons"),t("angular-dynamic-routing/dynamicRouting"),t("angular-dynamic-routing/dynamicRouting.animations");var h=t("./config/config-routes"),p=r(h),m=t("./modules"),g=r(m);c["default"].initializeApp(d["default"]);var f=function(e,t,i,r){e.otherwise("/"),t.html5Mode({enabled:!0,requireBase:!1}),i.registerUrl(d["default"].databaseURL),r.registerDynamicRoutes(p["default"])};f.$inject=["$urlRouterProvider","$locationProvider","$firebaseRefProvider","$BaseAppsStateProvider"];var v=function(){a["default"].FastClick.attach(document.body)};o["default"].module("application",["ui.router","ngAnimate","firebase","base","googlechart","angularIcons.openIconic","angularIcons.ionicons","angularIcons.materialIcons","dynamicRouting","dynamicRouting.animations"].concat(g["default"])).config(f).run(v)}),require.register("config/config-firebase.js",function(e,t,i){"use strict";i.exports={apiKey:"AIzaSyBY48PLnCREEFM9h7m7E0YwuhuBlbPuuXU",authDomain:"fir-reporting-angular.firebaseapp.com",databaseURL:"https://fir-reporting-angular.firebaseio.com",storageBucket:"fir-reporting-angular.appspot.com",messagingSenderId:"1063292915498"}}),require.register("config/config-routes.js",function(e,t,i){"use strict";i.exports=[{name:"home",url:"/",controller:"HomeController as home",path:"modules/home/home.html"}]}),require.register("modules/home/home-controller.js",function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),s=t("firebase-reporting"),o=r(s),l=t("firebase"),c=r(l),u=function(){function e(t,i,r,a,s){var l=this;return n(this,e),this.authService=i(c["default"].auth()),this.$timeout=a,this.$q=s,this.authLoaded=!1,this.totalClicks=null,this.totalUsers=null,this.lastClicked=null,this.data=r(t["default"].child("data")),this.reportingService=new o["default"]({firebase:t["default"].child("reporting")}),this.authService.$requireSignIn().then(function(){return l.init()})["catch"](function(){return l.authService.$signInAnonymously().then(function(){return l.init()})}),this.piechart={type:"PieChart",data:{cols:[{label:"Button",type:"string"},{label:"Times Clicked",type:"number"}],rows:[]},options:{legend:{position:"bottom"}}},this.linecharts={},this.linecharts.minute={type:"LineChart",data:{cols:[{label:"Time",type:"date"},{label:"A",type:"number"},{label:"B",type:"number"},{label:"C",type:"number"},{label:"D",type:"number"}],rows:[]},options:{title:"Clicked this Hour",legend:{position:"bottom"}}},this.linecharts.hour={type:"LineChart",data:{cols:[{label:"Time",type:"date"},{label:"A",type:"number"},{label:"B",type:"number"},{label:"C",type:"number"},{label:"D",type:"number"}],rows:[]},options:{title:"Clicked Today",legend:{position:"bottom"}}},this.linecharts.day={type:"LineChart",data:{cols:[{label:"Time",type:"date"},{label:"A",type:"number"},{label:"B",type:"number"},{label:"C",type:"number"},{label:"D",type:"number"}],rows:[]},options:{title:"Clicked this Month",legend:{position:"bottom"}}},this.linecharts.week={type:"LineChart",data:{cols:[{label:"Time",type:"date"},{label:"A",type:"number"},{label:"B",type:"number"},{label:"C",type:"number"},{label:"D",type:"number"}],rows:[]},options:{title:"Clicked this Year",legend:{position:"bottom"}}},this}return a(e,[{key:"init",value:function(){var e=this;this.authLoaded=!0,this.initReportingService(),this.data.$watch(function(){return e.drawAll()}),this.drawAll()}},{key:"buttonClicked",value:function(e){var t=this,i={uid:this.authService.$getAuth().uid,timestamp:c["default"].database.ServerValue.TIMESTAMP,anyclicked:1};i[e+"clicked"]=1,this.reportingService.saveMetrics(i).then(function(){t.data.$add(i)})}},{key:"drawAll",value:function(){this.drawMetrics(),this.drawCharts()}},{key:"drawMetrics",value:function(){var e=this;this.reportingService.filter().sum("anyclicked").select(1).then(function(t){e.$timeout(function(){return e.totalClicks=t[0]||0})}),this.reportingService.filter("users").sum("anyclicked").count().then(function(t){e.$timeout(function(){return e.totalUsers=t||0})}),this.reportingService.filter().last("timestamp").select(1).then(function(t){e.$timeout(function(){return e.lastClicked=t[0]?t[0]:null})})}},{key:"drawCharts",value:function(){this.drawPieChart(),this.drawLineChart("minute"),this.drawLineChart("hour"),this.drawLineChart("day"),this.drawLineChart("week")}},{key:"drawPieChart",value:function(){var e=this,t=this.reportingService.filter().sum("aclicked").value(),i=this.reportingService.filter().sum("bclicked").value(),r=this.reportingService.filter().sum("cclicked").value(),n=this.reportingService.filter().sum("dclicked").value();this.$q.all([t,i,r,n]).then(function(t){e.$timeout(function(){e.piechart.data.rows.splice(0,e.piechart.data.rows.length),e.piechart.data.rows.push({c:[{v:"A"},{v:t[0]}]}),e.piechart.data.rows.push({c:[{v:"B"},{v:t[1]}]}),e.piechart.data.rows.push({c:[{v:"C"},{v:t[2]}]}),e.piechart.data.rows.push({c:[{v:"D"},{v:t[3]}]})})})}},{key:"drawLineChart",value:function(e){var t=this,i=new Date,r=new Date;switch(i.setMilliseconds(0),i.setSeconds(0),i.setMinutes(0),e){case"minute":r.setTime(i.getTime()),r.setHours(i.getHours()+1);break;case"hour":i.setHours(0),r.setTime(i.getTime()),r.setDate(i.getDate()+1);break;case"day":i.setHours(0),i.setDate(1),r.setTime(i.getTime()),r.setMonth(i.getMonth()+1);break;case"week":i.setHours(0),i.setDate(1),i.setMonth(1),r.setTime(i.getTime()),r.setFullYear(i.getFullYear()+1)}var n=this.reportingService.filter().sum("aclicked").during(e).range(i.getTime(),r.getTime()).values(!0),a=this.reportingService.filter().sum("bclicked").during(e).range(i.getTime(),r.getTime()).values(!0),s=this.reportingService.filter().sum("cclicked").during(e).range(i.getTime(),r.getTime()).values(!0),o=this.reportingService.filter().sum("dclicked").during(e).range(i.getTime(),r.getTime()).values(!0);this.$q.all([n,a,s,o]).then(function(i){t.linecharts[e].data.rows.splice(0,t.linecharts[e].data.rows.length);for(var r=0;r<i[0].length;r++)t.linecharts[e].data.rows.push({c:[{v:new Date(i[0][r].timestamp)},{v:i[0][r].value},{v:i[1][r].value},{v:i[2][r].value},{v:i[3][r].value}]})})}},{key:"initReportingService",value:function(){this.reportingService.addFilter("users",["uid"]),this.reportingService.addMetric("timestamp",["first","last"]),this.reportingService.addMetric("anyclicked",["sum"]),this.reportingService.enableRetainer("minute","anyclicked",["sum"]),this.reportingService.enableRetainer("hour","anyclicked",["sum"]),this.reportingService.enableRetainer("day","anyclicked",["sum"]),this.reportingService.enableRetainer("week","anyclicked",["sum"]),this.reportingService.addMetric("aclicked",["sum"]),this.reportingService.enableRetainer("minute","aclicked",["sum"]),this.reportingService.enableRetainer("hour","aclicked",["sum"]),this.reportingService.enableRetainer("day","aclicked",["sum"]),this.reportingService.enableRetainer("week","aclicked",["sum"]),this.reportingService.addMetric("bclicked",["sum"]),this.reportingService.enableRetainer("minute","bclicked",["sum"]),this.reportingService.enableRetainer("hour","bclicked",["sum"]),this.reportingService.enableRetainer("day","bclicked",["sum"]),this.reportingService.enableRetainer("week","bclicked",["sum"]),this.reportingService.addMetric("cclicked",["sum"]),this.reportingService.enableRetainer("minute","cclicked",["sum"]),this.reportingService.enableRetainer("hour","cclicked",["sum"]),this.reportingService.enableRetainer("day","cclicked",["sum"]),this.reportingService.enableRetainer("week","cclicked",["sum"]),this.reportingService.addMetric("dclicked",["sum"]),this.reportingService.enableRetainer("minute","dclicked",["sum"]),this.reportingService.enableRetainer("hour","dclicked",["sum"]),this.reportingService.enableRetainer("day","dclicked",["sum"]),this.reportingService.enableRetainer("week","dclicked",["sum"])}}]),e}();e["default"]=u,u.$inject=["$firebaseRef","$firebaseAuth","$firebaseArray","$timeout","$q"]}),require.register("modules/home/index.js",function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var n=t("./home-controller"),a=r(n);e["default"]=angular.module("application.home",["firebase.database"]).controller("HomeController",a["default"]).name}),require.register("modules/index.js",function(e,t,i){"use strict";t("./home"),i.exports=["application.home"]}),require.alias("brunch/node_modules/deppack/node_modules/node-browser-modules/node_modules/process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,t,i){})}(),require("___globals___");