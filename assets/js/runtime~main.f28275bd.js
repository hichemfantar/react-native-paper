(()=>{"use strict";var e,a,d,f,b,c={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var d=t[e]={id:e,loaded:!1,exports:{}};return c[e].call(d.exports,d,d.exports,r),d.loaded=!0,d.exports}r.m=c,r.c=t,e=[],r.O=(a,d,f,b)=>{if(!d){var c=1/0;for(i=0;i<e.length;i++){d=e[i][0],f=e[i][1],b=e[i][2];for(var t=!0,o=0;o<d.length;o++)(!1&b||c>=b)&&Object.keys(r.O).every((e=>r.O[e](d[o])))?d.splice(o--,1):(t=!1,b<c&&(c=b));if(t){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[d,f,b]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var b=Object.create(null);r.r(b);var c={};a=a||[null,d({}),d([]),d(d)];for(var t=2&f&&e;"object"==typeof t&&!~a.indexOf(t);t=d(t))Object.getOwnPropertyNames(t).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,r.d(b,c),b},r.d=(e,a)=>{for(var d in a)r.o(a,d)&&!r.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,d)=>(r.f[d](e,a),a)),[])),r.u=e=>"assets/js/"+({37:"1cd22a7d",53:"935f2afb",80:"06dc8432",230:"8520dfa2",454:"2ad79788",484:"fd1de825",490:"588a837e",509:"41b67839",517:"424c1e59",625:"4500f45d",636:"b8fb2646",827:"050c12d8",938:"89d71f2e",1477:"582b745d",1549:"41d40901",1793:"4c303777",1806:"a122a3dd",1839:"01ed2f70",1852:"7591ea01",1904:"2aecd119",1944:"25ee1cac",1967:"9d415636",2022:"4aea3b16",2032:"1009f24f",2063:"6c45a443",2359:"7090364d",2384:"f5210147",2453:"216aa314",2589:"eefcda87",2615:"47165896",2670:"663a8a79",2816:"b4a69348",2851:"e8d3539c",2950:"22c1a6fd",3085:"1f391b9e",3210:"ebb7be57",3222:"8909d17f",3507:"d8b235e0",3577:"5fe2f2f2",3581:"5bf725db",3623:"babaf4d2",3891:"24468245",3934:"88d310ee",4270:"846a9fc5",4301:"df69bd0e",4316:"b835577c",4337:"577598d2",4338:"43762970",4470:"9bf56823",4701:"17753694",4771:"ba99a350",5100:"f446aead",5200:"a897cc02",5399:"4d86cc44",5655:"1fa5d59d",5668:"e7ce6630",5690:"f6a9b02f",6126:"86a5807b",6143:"a671def7",6206:"e9555621",6501:"369965a2",6618:"db01af23",6711:"7a217701",6748:"3cd74170",6792:"7641128b",6803:"8251ebf7",6819:"2437b6ab",6886:"fe0790b8",6958:"b3fb2138",7081:"36b8f262",7306:"2ef3a1f0",7359:"1253b511",7703:"949058ba",7734:"8e317ea7",7852:"4249e75f",7918:"17896441",7920:"1a4e3797",8008:"537c6e8e",8210:"d3e9853d",8237:"015952ed",8336:"3499f599",8337:"6ddaba92",8432:"324e7500",8475:"5cf68347",8539:"ae8b9b1a",8592:"common",8891:"aa49574c",9042:"af39b5d9",9080:"2c2d8e2d",9267:"1e70e625",9435:"c41c9b19",9514:"1be78505",9610:"987a71af",9671:"8276d707",9833:"459af3d2",9890:"2a9afb9f"}[e]||e)+"."+{37:"737f4808",53:"b0d3b0dc",80:"5162506e",230:"54f6531c",272:"bd5e739c",454:"21e6caff",484:"82e112f0",490:"a3ce92f3",509:"902d146b",517:"08ad8ed8",625:"8790b60c",636:"93b87529",827:"8b8d3c1a",938:"670c6753",1477:"83feb12b",1549:"3dc0c253",1793:"d0c70777",1806:"54c39769",1839:"ae4b2eb3",1852:"ef5078eb",1904:"2989ee8d",1944:"0938af0a",1967:"5ee18553",2022:"78a7f1cf",2032:"3fd52be6",2063:"6c9dcd2f",2359:"79cbdf3e",2384:"6b027e2d",2453:"c2d7260c",2589:"7ba9a751",2615:"86e49628",2670:"5db17ae2",2816:"00c72de7",2851:"bd514b09",2950:"a7c5f854",3085:"6b655cad",3210:"1e6b6dee",3222:"f65632a0",3507:"e7abb010",3577:"d658d9a1",3581:"b2ca0270",3623:"f3b0cb04",3891:"888e95fb",3934:"8fa67338",3989:"719b2de5",4270:"330aac21",4301:"b8ca748d",4316:"9d8e1b6d",4337:"06dd116f",4338:"12a9d7bb",4470:"83abc248",4701:"37bb3467",4771:"93db43dd",4911:"7885a735",4972:"f811ebce",5100:"d1030d10",5200:"9d16af80",5399:"dbb0c530",5655:"3bc3b4a3",5668:"afc84299",5690:"36ba26aa",6126:"babc98f5",6143:"40872da1",6206:"5ee74d3a",6501:"8274d821",6618:"0fb025a3",6711:"5adfd8a2",6748:"f48242f9",6767:"c3e7549a",6780:"3bb1d1d9",6792:"70162bb0",6803:"c97d3041",6819:"a6a56e00",6886:"ffbf8639",6945:"e6ca558a",6958:"9f1145b4",6992:"e1c3a0a5",7081:"13a2b582",7306:"11b37141",7359:"69c23b68",7703:"ea5bc044",7734:"79717309",7852:"c70bea2e",7918:"7c47ecdb",7920:"df5debf9",8008:"6d6b28ff",8210:"38750cd3",8237:"cbe39ca9",8336:"a871f891",8337:"f61e22f8",8432:"57f194cf",8475:"b68ca229",8539:"14306877",8592:"860ef775",8891:"d8fbfd00",8894:"547a1c8d",9042:"51fc329a",9080:"67901cb5",9267:"1f0b9f49",9435:"5ac9a479",9514:"4bcb0f72",9610:"310814ef",9671:"646a3700",9833:"670beecf",9890:"f6af2c6f"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},b="docs:",r.l=(e,a,d,c)=>{if(f[e])f[e].push(a);else{var t,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==b+d){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",b+d),t.src=e),f[e]=[a];var l=(a,d)=>{t.onerror=t.onload=null,clearTimeout(s);var b=f[e];if(delete f[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((e=>e(d))),a)return a(d)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/react-native-paper/",r.gca=function(e){return e={17753694:"4701",17896441:"7918",24468245:"3891",43762970:"4338",47165896:"2615","1cd22a7d":"37","935f2afb":"53","06dc8432":"80","8520dfa2":"230","2ad79788":"454",fd1de825:"484","588a837e":"490","41b67839":"509","424c1e59":"517","4500f45d":"625",b8fb2646:"636","050c12d8":"827","89d71f2e":"938","582b745d":"1477","41d40901":"1549","4c303777":"1793",a122a3dd:"1806","01ed2f70":"1839","7591ea01":"1852","2aecd119":"1904","25ee1cac":"1944","9d415636":"1967","4aea3b16":"2022","1009f24f":"2032","6c45a443":"2063","7090364d":"2359",f5210147:"2384","216aa314":"2453",eefcda87:"2589","663a8a79":"2670",b4a69348:"2816",e8d3539c:"2851","22c1a6fd":"2950","1f391b9e":"3085",ebb7be57:"3210","8909d17f":"3222",d8b235e0:"3507","5fe2f2f2":"3577","5bf725db":"3581",babaf4d2:"3623","88d310ee":"3934","846a9fc5":"4270",df69bd0e:"4301",b835577c:"4316","577598d2":"4337","9bf56823":"4470",ba99a350:"4771",f446aead:"5100",a897cc02:"5200","4d86cc44":"5399","1fa5d59d":"5655",e7ce6630:"5668",f6a9b02f:"5690","86a5807b":"6126",a671def7:"6143",e9555621:"6206","369965a2":"6501",db01af23:"6618","7a217701":"6711","3cd74170":"6748","7641128b":"6792","8251ebf7":"6803","2437b6ab":"6819",fe0790b8:"6886",b3fb2138:"6958","36b8f262":"7081","2ef3a1f0":"7306","1253b511":"7359","949058ba":"7703","8e317ea7":"7734","4249e75f":"7852","1a4e3797":"7920","537c6e8e":"8008",d3e9853d:"8210","015952ed":"8237","3499f599":"8336","6ddaba92":"8337","324e7500":"8432","5cf68347":"8475",ae8b9b1a:"8539",common:"8592",aa49574c:"8891",af39b5d9:"9042","2c2d8e2d":"9080","1e70e625":"9267",c41c9b19:"9435","1be78505":"9514","987a71af":"9610","8276d707":"9671","459af3d2":"9833","2a9afb9f":"9890"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,d)=>{var f=r.o(e,a)?e[a]:void 0;if(0!==f)if(f)d.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var b=new Promise(((d,b)=>f=e[a]=[d,b]));d.push(f[2]=b);var c=r.p+r.u(a),t=new Error;r.l(c,(d=>{if(r.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var b=d&&("load"===d.type?"missing":d.type),c=d&&d.target&&d.target.src;t.message="Loading chunk "+a+" failed.\n("+b+": "+c+")",t.name="ChunkLoadError",t.type=b,t.request=c,f[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,d)=>{var f,b,c=d[0],t=d[1],o=d[2],n=0;if(c.some((a=>0!==e[a]))){for(f in t)r.o(t,f)&&(r.m[f]=t[f]);if(o)var i=o(r)}for(a&&a(d);n<c.length;n++)b=c[n],r.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return r.O(i)},d=self.webpackChunkdocs=self.webpackChunkdocs||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();