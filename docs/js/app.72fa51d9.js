(function(t){function e(e){for(var o,i,c=e[0],s=e[1],l=e[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"17fe":function(t,e,n){},"1ce8":function(t,e,n){"use strict";var o=n("17fe"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("vue-leaflet")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-leaflet"},[n("div",{staticClass:"map"},[n("l-map",{ref:"myMap",attrs:{zoom:t.zoom,center:t.center,options:{zoomControl:!1}}},[n("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),n("l-marker",{ref:"hereMarker",attrs:{"lat-lng":t.center,icon:t.icon}}),n("v-marker-cluster",{attrs:{options:t.clusterOptions}},t._l(t.stores,(function(e){return n("l-geo-json",{key:e.id,attrs:{geojson:e,options:t.geoJsonOptions}})})),1)],1)],1)])},c=[],s=(n("99af"),n("caad"),n("b0c0"),n("d3b7"),n("ac1f"),n("25f0"),n("2532"),n("1276"),n("2699")),l=n("a40a"),u=n("044a"),p=n("4e2b"),f=n("ca9f"),d=n.n(f),m=window.L,h={name:"VueLeaflet",components:{LMap:s["a"],LTileLayer:l["a"],LGeoJson:u["a"],LMarker:p["a"],"v-marker-cluster":d.a},data:function(){var t=this;return{stores:[],center:m.latLng(25.0677505,121.5470599),zoom:15,isEmptyHide:!1,clusterOptions:{disableClusteringAtZoom:16},geoJsonOptions:{style:function(t){},pointToLayer:this.createCustomIcon,onEachFeature:function(e,n){n.bindPopup(t.getPopup(e.properties))}},icon:m.icon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),url:"https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}},methods:{getCoods:function(t,e){t=t.toString(),e=e.toString();var n=t.includes("\n")?t.split("\n")[0]:t,o=e.includes("\n")?e.split("\n")[0]:e;return[o,n]},getPopup:function(t){return'\n        <h3 class="store-title">'.concat(t.name,'</h3>\n        <div class="store-info">\n          <div>成人口罩: ').concat(t.mask_adult,"</div>\n          <div>小孩口罩: ").concat(t.mask_child,"</div>\n          <div>資料更新: ").concat(t.updated,'</div>\n          <a target="_blank" href="https://www.google.com.tw/maps/place/').concat(t.address,'">').concat(t.address,"</a><br>\n          ").concat(t.phone,"\n        </div>\n      ")},createCustomIcon:function(t,e){var n=t.properties,o=n.mask_adult+n.mask_child,r=null;r=o>100?"green":o>50?"yellow":o>0?"red":"grey";var a=m.icon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-".concat(r,".png"),shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});return m.marker(e,{icon:a})},renderMap:function(){var t=this;fetch("https://kiang.github.io/pharmacies/json/points.json").then((function(t){return t.json()})).then((function(e){console.log(e),t.stores=e}))}},mounted:function(){var t=this;this.renderMap(),this.$nextTick((function(){var e=t.$refs.myMap.mapObject;m.control.zoom({position:"bottomright"}).addTo(e),navigator.geolocation.getCurrentPosition((function(e){t.$refs.hereMarker.mapObject.bindTooltip("You",{offset:[0,-36],permanent:!0,direction:"top"})}))}))}},g=h,b=(n("1ce8"),n("2877")),v=Object(b["a"])(g,i,c,!1,null,"e2d3d180",null),w=v.exports,y={name:"app",components:{VueLeaflet:w}},k=y,j=(n("5c0b"),Object(b["a"])(k,r,a,!1,null,null,null)),O=j.exports,x=n("2f62");o["a"].use(x["a"]);var _=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=n("e11e");n("6cc5");o["a"].config.productionTip=!1,delete S["Icon"].Default.prototype._getIconUrl,S["Icon"].Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")}),new o["a"]({store:_,render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"9c0c":function(t,e,n){}});