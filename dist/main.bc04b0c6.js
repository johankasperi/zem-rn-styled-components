!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.extension=t():e.extension=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.MAX_BRIGHTNESS=255,t.HUE_MAX_DEGREE=360,t.MAX_PERCENTAGE=100,t.HEX_BASE=16,t.JSON_SPACING=2,t.NUMERICAL_FONT_BOLD=700,t.NUMERICAL_FONT_NORMAL=400,t.NUMERICAL_DECIMAL_PRECISION=1,t.REACT_RULES_WITH_COLOR=["backgroundColor","borderColor","color","shadowColor","textDecorationColor","textShadowColor"],t.HTML_TAGS=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","slot","small","source","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],t.OPTION_NAMES={COLOR_FORMAT:"colorFormat",TEXT_BASE_COMPONENTS:"textBaseComponent",COLOR_THEME_PREFIX:"colorThemePrefix",FONT_THEME_PREFIX:"fontThemePrefix"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o=r(3),a=r(0),u=function(e,t){var r={colorFormat:e.getOption(a.OPTION_NAMES.COLOR_FORMAT)};return{code:(0,o.generateColorObjectFromProject)(r,e.project,t),language:"javascript"}},i=function(e,t){var r={colorFormat:e.getOption(a.OPTION_NAMES.COLOR_FORMAT),colorThemePrefix:e.getOption(a.OPTION_NAMES.COLOR_THEME_PREFIX),fontThemePrefix:e.getOption(a.OPTION_NAMES.FONT_THEME_PREFIX)};return{code:(0,n.generateTextComponentsFromProject)(r,e.project,t),language:"javascript"}};t.default={layer:function(e,t){var r={layerName:t.name,projectName:e.project.name};return{code:JSON.stringify(r,null,2),language:"json"}},styleguideColors:u,styleguideTextStyles:i,comment:function(e,t){return`// ${t}`},exportStyleguideColors:function(e,t){return{code:u(e,t).code,filename:"colors.js",language:"javascript"}},exportStyleguideTextStyles:function(e,t){return{code:i(e,t).code,filename:"Fonts.js",language:"javascript"}}}},function(e,t){throw new Error("Module build failed: SyntaxError: Unexpected token, expected , (15:6)\n\n[0m [90m 13 | [39m[32m      project,[39m\n [90m 14 | [39m[32m      options[39m\n[31m[1m>[22m[39m[90m 15 | [39m[32m      textStyle[39m\n [90m    | [39m      [31m[1m^[22m[39m\n [90m 16 | [39m[32m    )}\\n\\n`[39m\n [90m 17 | [39m  }\n [90m 18 | [39m[0m\n")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateColorObjectFromProject=void 0;var n=r(0),o=r(4);t.generateColorObjectFromProject=function(e,t,r){var a={},u=!0,i=!1,c=void 0;try{for(var l,s=r[Symbol.iterator]();!(u=(l=s.next()).done);u=!0){var f=l.value;f.name&&(a[f.name]=(0,o.getColorStringByFormat)(f,e.colorFormat))}}catch(e){i=!0,c=e}finally{try{!u&&s.return&&s.return()}finally{if(i)throw c}}var d=JSON.stringify(a,null,n.JSON_SPACING);return`const base = ${d=d.replace(/"(.+)":/g,"$1:")}`}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var o=r(6);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var a=r(7);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var u=r(8);Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getColorStringByFormat=t.toDefaultString=t.getColorMapByFormat=t.blendColors=void 0;var n=r(0),o=new Intl.NumberFormat("en-US",{useGrouping:!1,maximumFractionDigits:2});function a(e,t){if("r"in e&&"g"in e&&"b"in e&&"a"in e)switch(t){case"hex":return u(e);case"rgb":return i(e);case"hsl":return function(e){var t=e.toHSL(),r=`${Math.round(t.h*n.HUE_MAX_DEGREE)}, `+`${Math.round(t.s*n.MAX_PERCENTAGE)}%, `+`${Math.round(t.l*n.MAX_PERCENTAGE)}%`;return e.a<1?`hsla(${r}, ${o.format(e.a)})`:`hsl(${r})`}(e);case"default":default:return c(e)}}function u(e,t){var r=e.hexBase();if(e.a<1){var o=function(e){return(e<n.HEX_BASE?"0":"")+e.toString(n.HEX_BASE)}(e.a*n.MAX_BRIGHTNESS);r=t?o+r:r+o}return`#${r}`}function i(e){var t=`${Math.round(e.r)}, ${Math.round(e.g)}, ${Math.round(e.b)}`;return e.a<1?`rgba(${t}, ${o.format(e.a)})`:`rgb(${t})`}function c(e){return e.a<1?i(e):u(e)}t.blendColors=function(e){return e.reduce(function(e,t){return e.blend(t)})},t.getColorMapByFormat=function(e,t){return e.reduce(function(e,r){return e[a(r,t)]=r.name,e},{})},t.toDefaultString=c,t.getColorStringByFormat=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.selectorize=t.round=t.isHtmlTag=void 0;var n=r(0);function o(e){return e.trim().replace(/[^\s\w-]/g,"").replace(/^(-?\d+)+/,"").replace(/\s+/g,"-")}function a(e){return n.HTML_TAGS.includes(e)}t.isHtmlTag=a,t.round=function(e,t){var r=Number(e).toLocaleString("en-US",{useGrouping:!1,maximumFractionDigits:t});return Number(r)},t.selectorize=function(e){if(!e)return"";var t=e.trim();if(a(e))return t.toLowerCase();if(/^[#.]/.test(t)){var r=o(t.substr(1));if(r)return t[0]+r}return(t=o(t))&&`.${t}`}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.layerHasGradient=function(e){return e.fills.some(function(e){return"gradient"===e.type})},t.layerHasBlendMode=function(e){return e.fills.some(function(e){return e.blendMode&&"normal"!==e.blendMode})}},function(e,t,r){"use strict";function n(e){return e.charAt(0).toLowerCase()+e.substring(1)}function o(e){return e.charAt(0).toUpperCase()+e.substring(1)}Object.defineProperty(t,"__esModule",{value:!0}),t.lowercaseFirst=n,t.uppercaseFirst=o,t.generateName=function(e){return function(e){return n(e.map(o).join(""))}(function(e){var t=e.match(/\d+|[a-z]+|[A-Z]+(?![a-z])|[A-Z][a-z]+/g);if(!t)return["invalid","name"];return t.map(function(e){return e.toLowerCase()})}(e))}}]).default});