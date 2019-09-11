(function(t){function n(n){for(var r,s,o=n[0],c=n[1],l=n[2],v=0,m=[];v<o.length;v++)s=o[v],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(n);while(m.length)m.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,o=1;o<e.length;o++){var c=e[o];0!==i[c]&&(r=!1)}r&&(a.splice(n--,1),t=s(s.s=e[0]))}return t}var r={},i={app:0},a=[];function s(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=r,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)s.d(e,r,function(n){return t[n]}.bind(null,r));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/factorial/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=n,o=o.slice();for(var l=0;l<o.length;l++)n(o[l]);var u=c;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"56d7":function(t,n,r){"use strict";r.r(n);r("cadf"),r("551c"),r("f751"),r("097d");var i=r("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("h2",[t._v("关于10000的阶乘（js阶乘实现和精度探究）")]),e("el-tabs",{model:{value:t.activeName,callback:function(n){t.activeName=n},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"JS精度",name:"about"}},[e("about")],1),e("el-tab-pane",{attrs:{label:"递推",name:"second"}},[e("second")],1),e("el-tab-pane",{attrs:{label:"递归",name:"third"}},[e("third")],1),e("el-tab-pane",{attrs:{label:"使用数组",name:"fourth"}},[e("fourth")],1),e("el-tab-pane",{attrs:{label:"总结",name:"summary"}},[e("Summary")],1)],1)],1)},s=[],o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about"},[e("h3",[t._v("Q: 10000的阶乘 ?")]),t._m(0),e("h3",[t._v("JavaScript 精度问题")]),e("section",[e("p",[t._v("和其它语言不同，JavaScript 中所有数字包括整数和小数都只有一种类型 — Number。在 JavaScript 中所有数值都以 IEEE-754 标准的 64 bit 双精度浮点数进行存储的。先来了解下 IEEE-754 标准下的双精度浮点数：")]),e("img",{attrs:{src:t.img,alt:""}}),e("p",[t._v("可以从图中看到 IEEE-754 标准下双精度浮点数由三部分组成，分别如下：")]),t._m(1)]),e("h3",[t._v("JavaScript 的最大安全数")]),t._m(2),e("h3",[t._v("解决方案")]),t._m(3)])},c=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("p",[t._v("首先，出场的是我们的"),e("strong",[t._v("递推")]),t._v("阶乘的js实现：")]),e("pre",[t._v("      "),e("code",[t._v('\n        (function(n){\n          if (!n && n !== 0) {\n            throw "No parameter exists";\n          }\n          if (n && isNaN(n)) {\n            throw "parameter is not a number!";\n          }\n          if (n<0) {\n            throw "parameter is not a positive integer!";\n          }\n          var res = 1;\n          for(let i= 1;i<= n;i++){\n            res = res * i;\n          }\n          return res;\n        })(10000)\n        // Infinity\n      ')]),t._v("\n    ")]),e("p",[t._v("what!? 结果竟然是"),e("strong",[t._v("Infinity")]),t._v("， 这是为什么呢?")]),e("strong",[t._v("\n      原来，在js语言中，一旦计算返回的数值超出了Number.MAX_VALUE（约等于1.7*10"),e("sup",[t._v("308")]),t._v("），就会返回Infinity(一个数值，表示无穷大)。\n      Number.MAX_VALUE是 64 bit 能存储的最大的数。但是并不是MAX_VALUE之内的数都是准确的，因为存在精度的问题。js有着最大安全整数的概念，可以认为，在安全整数的范围内的数值才是准确的。\n      以下是关于最大安全整数的定义\n    ")]),e("blockquote",[t._v("\n      MAX_SAFE_INTEGER 是一个值为 9007199254740991的常量。因为Javascript的数字存储使用了IEEE 754中规定的双精度浮点数数据类型，\n      而这一数据类型能够安全存储 -(2"),e("sup",[t._v("53")]),t._v(" - 1) 到 2"),e("sup",[t._v("53")]),t._v(" - 1 之间的数值（包含边界值）。\n      "),e("p",{staticStyle:{"text-align":"right"}},[t._v("-- MDN")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ol",[e("li",[t._v("sign(符号): 占 1 bit, 表示正负;")]),e("li",[t._v("exponent(指数): 占 11 bit，表示范围;")]),e("li",[t._v("mantissa(尾数): 占 52 bit，表示精度，多出的末尾如果是 1 需要进位;")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("span",[t._v("为什么最大安全整数是2"),e("sup",[t._v("53")]),t._v("-1？前面说到了JavaScript浮点数存储是52位尾数位，但是因为科学计数法小数点左侧的1会在存储时省去，所以是52位尾数+省去的1位=53个可表示的位数\n      。而安全数的意思是在 -(2"),e("sup",[t._v("53")]),t._v(" - 1) 到 2"),e("sup",[t._v("53")]),t._v(" - 1 内的整数(包括边界)与唯一的双精度浮点数互相对应。举个例子比较好理解：")]),e("pre",[t._v("      "),e("code",[t._v("\n        2^53 转二进制 =====>\n        100000000000000000000000000000000000000000000000000000(53个0)\n        转为科学计数法 =====> \n        1.00000000000000000000000000000000000000000000000000000(53个0)\n        存入计算机 =====> 尾数位只有52位所以截掉末尾的0只能存52个0\n\n        2^53+1 转二进制 =====>\n        100000000000000000000000000000000000000000000000000001(52个0)\n        转为科学计数法 =====> \n        1.00000000000000000000000000000000000000000000000000001(52个0)\n        存入计算机 =====> 尾数位只有52位所以截掉末尾的1只能存52个0\n      ")]),t._v("\n    ")]),e("span",[t._v("而这个在数学上的错误的，因此，只有在安全数的范围内，我们才认为是准确的。")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("h4",[t._v("1. bigInt")]),e("blockquote",[t._v("\n      BigInt 是一种内置对象，可以表示大于 2"),e("sup",[t._v("53")]),t._v(" 的整数。而在Javascript中，\n      Number 基本类型可以精确表示的最大整数是 2"),e("sup",[t._v("53")]),t._v("。BigInt 可以表示任意大的整数。\n      BigInt 现在处在 ECMAScript 标准化过程中的 第三阶段 。\n      "),e("p",{staticStyle:{"text-align":"right"}},[t._v("-- MDN")])]),e("span",[t._v("如何使用")]),e("pre",[t._v("      "),e("code",[t._v("\n        BigInt(value);\n      ")]),t._v("\n    ")]),e("h4",[t._v("2. 转换为string，计算时转换为数组来处理")])])}],l=r("deac"),u=r.n(l),v={props:{},data:function(){return{img:u.a}}},m=v,p=r("2877"),f=Object(p["a"])(m,o,c,!1,null,null,null),h=f.exports,_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"second"},[t.supportBigint?t._e():[e("div",[t._v("\n      请使用支持BigInt类型的浏览器打开！鉴于使用BigInt比使用数组来计算，计算时间快了20倍左右，所以以下方式是使用BigInt实现的。\n      "),e("img",{attrs:{src:t.supportBigintImg}})])],[e("h3",[t._v("code")]),t._m(0),e("h3",[t._v("复杂度")]),e("section",[t._v("\n      O(n)\n    ")]),e("h3",[t._v("平均运行时间")]),e("section",[t._v("\n      76ms(系统: win10, chrome版本:76, 内存: 16g, cpu: i5)\n    ")]),e("h3",[t._v("运行")]),e("section",{staticClass:"run"},[e("el-input-number",{attrs:{min:0,max:15e3},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}}),e("el-button",{attrs:{type:"primary"},on:{click:t.calc}},[t._v("calc")]),e("span",[t._v("耗时(ms)："+t._s(t.time))]),e("el-input",{attrs:{type:"textarea",rows:6,readonly:""},model:{value:t.result,callback:function(n){t.result=n},expression:"result"}})],1)]],2)},g=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("pre",[t._v("        "),e("code",[t._v('\n          function factorial(n){\n            if (!n && n !== 0) {\n              throw "No parameter exists";\n            }\n            if (n && isNaN(n)) {\n              throw "parameter is not a number!";\n            }\n            if (n < 0) {\n              throw "parameter is not a positive integer!";\n            }\n            const num = BigInt(n);\n            let res = BigInt(1);\n            for(let i= BigInt(1);i<= num;i++){\n              res = res * i;\n            }\n            return res;\n          }\n          factorial(10000)\n        ')]),t._v("\n      ")])])}],d=(r("6b54"),r("e726")),w=r.n(d),b={data:function(){return{num:1e4,result:"",time:"0",supportBigint:!!window.BigInt,supportBigintImg:w.a}},methods:{factorial:function(t){if(!t&&0!==t)throw"No parameter exists";if(t&&isNaN(t))throw"parameter is not a number!";if(t<0)throw"parameter is not a positive integer!";for(var n=BigInt(t),e=BigInt(1),r=BigInt(1);r<=n;r++)e*=r;return e},calc:function(){try{var t=(new Date).getTime();console.time("1");var n=this.factorial(this.num);console.timeEnd("1");var r=(new Date).getTime();this.time=r-t,this.result=n.toString()}catch(e){this.result=e}}}},A=b,E=Object(p["a"])(A,_,g,!1,null,null,null),y=E.exports,I=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"second"},[t.supportBigint?t._e():[e("div",[t._v("\n      请使用支持BigInt类型的浏览器打开！鉴于使用BigInt比使用数组来计算，计算时间快了20倍左右，所以以下方式是使用BigInt实现的。\n      "),e("img",{attrs:{src:t.supportBigintImg}})])],[e("h3",[t._v("code")]),t._m(0),e("h3",[t._v("复杂度")]),e("section",[t._v("\n      O(n)\n    ")]),e("h3",[t._v("平均运行时间")]),e("section",[t._v("\n      64ms(系统: win10, chrome版本:76, 内存: 16g, cpu: i5)\n    ")]),e("h3",[t._v("运行")]),e("section",{staticClass:"run"},[e("el-input-number",{attrs:{min:0,max:15e3},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}}),e("el-button",{attrs:{type:"primary"},on:{click:t.calc}},[t._v("calc")]),e("span",[t._v("耗时(ms)："+t._s(t.time))]),e("el-input",{attrs:{type:"textarea",rows:6,readonly:""},model:{value:t.result,callback:function(n){t.result=n},expression:"result"}})],1),e("h3",[t._v("注意!")]),t._m(1),e("h3",[t._v("尾递归")]),t._m(2),e("h3",[t._v("code")]),t._m(3),e("h3",[t._v("复杂度")]),e("section",[t._v("\n      O(n)\n    ")]),e("h3",[t._v("注意!")]),t._m(4)]],2)},x=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("pre",[t._v("        "),e("code",[t._v('\n          function factorial(n){\n            if (!n && n !== 0) {\n              throw "No parameter exists";\n            }\n            if (n && isNaN(n)) {\n              throw "parameter is not a number!";\n            }\n            if (n < 0) {\n              throw "parameter is not a positive integer!";\n            }\n            if (n === 1 || n === 0) {\n              return BigInt(1);\n            }\n            const num = BigInt(n);\n            return num * factorial(n - 1);\n          }\n          factorial(10000)\n        ')]),t._v("\n      ")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[t._v("\n      使用递归时，非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）。此时可以使用尾递归来做优化。\n      当我们输入较大的数（10000）时，如果发生了栈溢出，我们可以先输入一个较小的数，譬如5000，计算之后再计算10000，此时不会发生栈溢出。\n      可以看出，chrome内部帮我们做了优化，当栈溢出时，当前的js线程会"),e("strong",[t._v("申请更多的内存空间")]),t._v("，防止下一次计算时再次溢出。\n    ")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("p",[t._v('函数调用会在内存形成一个"调用记录"，又称"调用帧"（call frame），保存调用位置和内部变量等信息。如果在函数A的内部调用函数B，\n      那么在A的调用记录上方，还会形成一个B的调用记录。等到B运行结束，将结果返回到A，B的调用记录才会消失。如果函数B内部还调用函数C，\n      那就还有一个C的调用记录栈，以此类推。所有的调用记录，就形成一个"调用栈"')]),e("p",[t._v("尾递归由于是函数的最后一步操作，所以不需要保留外层函数的调用记录，\n      因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用记录，取代外层函数的调用记录就可以了")]),e("p",[t._v("ES6标准规定了 尾调用不会创建额外的调用帧")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("pre",[t._v("        "),e("code",[t._v('\n          function factorial(n, total = 1){\n            if (!n && n !== 0) {\n              throw "No parameter exists";\n            }\n            if (n && isNaN(n)) {\n              throw "parameter is not a number!";\n            }\n            if (n < 0) {\n              throw "parameter is not a positive integer!";\n            }\n            if (n === 1 || n === 0) return BigInt(total); \n            return factorial(n - 1, BigInt(n) * BigInt(total));\n          }\n          factorial(10000)\n        ')]),t._v("\n      ")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("p",[t._v("Chrome下使用尾递归写法的方法依旧出现调用栈溢出，原因在于：")]),e("ol",[e("li",[t._v("浏览器没部署尾调用优化: "),e("a",{attrs:{href:"https://v8.dev/blog/modern-javascript"}},[t._v("https://v8.dev/blog/modern-javascript")])])])])}],B={data:function(){return{num:1e4,result:"",time:"0",supportBigint:!!window.BigInt,supportBigintImg:w.a}},methods:{factorial:function(t){if(!t&&0!==t)throw"No parameter exists";if(t&&isNaN(t))throw"parameter is not a number!";if(t<0)throw"parameter is not a positive integer!";if(1===t||0===t)return BigInt(1);var n=BigInt(t);return n*this.factorial(t-1)},calc:function(){try{var t=(new Date).getTime();console.time("2");var n=this.factorial(this.num);console.timeEnd("2");var r=(new Date).getTime();this.time=r-t,this.result=n.toString()}catch(e){this.result=e}}}},k=B,N=Object(p["a"])(k,I,x,!1,null,null,null),j=N.exports,S=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"fourth"},[e("h3",[t._v("说明")]),t._m(0),e("h3",[t._v("code")]),t._m(1),e("h3",[t._v("复杂度")]),t._m(2),e("h3",[t._v("平均运行时间")]),e("section",[t._v("\n    2406ms(系统: win10, chrome版本:76, 内存: 16g, cpu: i5)\n  ")]),e("h3",[t._v("运行")]),e("section",{staticClass:"run"},[e("el-input-number",{attrs:{min:0,max:15e3},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}}),e("el-button",{attrs:{type:"primary"},on:{click:t.calc}},[t._v("calc")]),e("span",[t._v("耗时(ms)："+t._s(t.time))]),e("el-input",{attrs:{type:"textarea",rows:6,readonly:""},model:{value:t.result,callback:function(n){t.result=n},expression:"result"}})],1)])},M=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("p",[t._v("使用数组保存数字的每一位，并实现乘法运算")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("pre",[t._v("      "),e("code",[t._v('\n        function factorial(n){\n          if (!n && n !== 0) {\n            throw "No parameter exists";\n          }\n          if (n && isNaN(n)) {\n            throw "parameter is not a number!";\n          }\n          if (n < 0) {\n            throw "parameter is not a positive integer!";\n          }\n          let arr = [1]; \n          for (let i = 1; i <= n; i++) { \n              for (let j = 0, highPosition = 0; j < arr.length || highPosition != 0; j++) { \n                  let temporaryRes = (j < arr.length) ? (i * arr[j] + highPosition) : highPosition; \n                  arr[j] = temporaryRes % 10; \n                  highPosition = (temporaryRes - arr[j]) / 10;\n              } \n          }\n          return arr.reverse().join("");\n        }\n        factorial(10000)\n      ')]),t._v("\n    ")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[t._v("\n    O(n"),e("sup",[t._v("2")]),t._v(")\n  ")])}],J={data:function(){return{num:1e4,result:"",time:"0"}},methods:{factorial:function(t){if(!t&&0!==t)throw"No parameter exists";if(t&&isNaN(t))throw"parameter is not a number!";if(t<=0)throw"parameter is not a positive integer!";for(var n=[1],e=1;e<=t;e++)for(var r=0,i=0;r<n.length||0!=i;r++){var a=r<n.length?e*n[r]+i:i;n[r]=a%10,i=(a-n[r])/10}return n.reverse().join("")},calc:function(){try{var t=(new Date).getTime();console.time("3");var n=this.factorial(this.num);console.timeEnd("3");var r=(new Date).getTime();this.time=r-t,this.result=n.toString()}catch(e){this.result=e}}}},C=J,T=Object(p["a"])(C,S,M,!1,null,null,null),R=T.exports,Y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"summary"},[e("h2",[t._v("一、大数阶乘")]),e("section",[e("h3",[t._v("1. 本文讲解了js中的精度问题并使用三种方式对阶乘进行处理:")]),t._m(0),t._m(1),t._m(2),e("div",[e("img",{attrs:{src:t.stirling}})])]),e("h2",[t._v("二、优化")]),e("h3",[t._v("1. 使用worker并行执行")]),e("section",[e("p",[t._v("Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，\n    将一些任务分配给后者运行。在主线程运行的同时，Worker 线程在后台运行，两者互不干扰。\n    这样的好处是，一些计算密集型或高延迟的任务，被 Worker 线程负担了，主线程就会很流畅，\n    不会被阻塞或拖慢。")]),e("p",[t._v("鉴于阶乘的特殊性，可以拆分为多个子问题。我们这里将10000拆解为5000!乘以(5001 * ... * 10000)。\n      主线程和worker线程分别计算后相乘。")]),e("div",{staticClass:"run"},[e("el-input-number",{model:{value:t.num,callback:function(n){t.num=n},expression:"num"}}),e("el-button",{attrs:{type:"primary"},on:{click:t.calc}},[t._v("calc")]),e("div",[e("p",[t._v("worker耗时(ms)："+t._s(t.workerTime))]),e("p",[t._v("主线程耗时(ms)："+t._s(t.mainTime))])]),e("el-input",{attrs:{type:"textarea",rows:6,readonly:""},model:{value:t.result,callback:function(n){t.result=n},expression:"result"}})],1),t._m(3)]),e("h3",[t._v("2. 此page的其他优化")]),t._m(4),e("h2",[t._v("三、 图例（1! - 15!）")]),e("chart",{attrs:{options:t.option}}),e("p",{staticClass:"mask"},[t._v("1! - 15!")])],1)},O=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ol",[e("li",[t._v("递推(使用BigInt)")]),e("li",[t._v("递归(使用BigInt)，以及爆栈时如何处理(尾递归)")]),e("li",[t._v("使用数组保存数字的每一位，实现乘法运算并计算结果(递推)，效率较低")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("注意! 当计算巨大的数的阶乘时（譬如100w），v8会崩溃，建议使用斯特林公式计算近似结果:\n      "),e("a",{attrs:{href:"https://baike.baidu.com/item/%E6%96%AF%E7%89%B9%E6%9E%97%E5%85%AC%E5%BC%8F"}},[t._v("【百度百科】")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("blockquote",[t._v("\n      斯特林公式（Stirling's approximation）是一条用来取n的阶乘的近似值的数学公式。一般来说，当n很大的时候，\n      n阶乘的计算量十分大，所以斯特林公式十分好用，而且，即使在n很小的时候，斯特林公式的取值已经十分准确。\n      "),e("p",{staticStyle:{"text-align":"right"}},[t._v("-- 百度百科")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("strong",[t._v("注意! 虽然计算时间减少了，但是开启worker线程，主线程和worker线程之间通信是有开销的。")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("h4",[t._v("网络")]),e("ol",[e("li",[t._v("开启gzip")]),e("li",[t._v("打包时给文件加hash使用contenthash模式，某个文件被修改了，打包后其对应文件的hash值改变，而其他文件不变。")]),e("li",[t._v("利用http缓存")]),e("li",[t._v("按需加载减少体积")]),e("li",[t._v("利用resource hint(告诉浏览器如何处理资源),预加载资源")]),e("li",[t._v("打包为es6的包，减少polyfill")])]),e("h4",[t._v("渲染")]),e("ol",[e("li",[t._v("框架层面: 利用vue的异步更新队列，批量更新ui")]),e("li",[t._v("语义化，让浏览器更好的理解html")])]),e("h4",[t._v("应用")]),e("ol",[e("li",[t._v("图表自适应,当图表所在容器大小发生改变时，会重新绘制以适应新的容器。")])]),e("p",[e("strong",[t._v("优化的策略还有很多很多，这里我们只选择最合适的。")])])])}],U=(r("c5f6"),r("ef97"),r("007d"),r("9ca8")),D=r("d59d"),P=r.n(D);function Q(t){if(!t&&0!==t)throw"No parameter exists";if(t&&isNaN(t))throw"parameter is not a number!";if(t<0)throw"parameter is not a positive integer!";for(var n=1,e=1;e<=t;e++)n*=e;return n}var F={name:"Summary",components:{chart:U["a"]},data:function(){return{worker:null,num:1e4,workerTime:0,mainTime:0,result:"",stirling:P.a,option:{grid:{left:"17%"},xAxis:{type:"category",data:[]},yAxis:{type:"value"},tooltip:{},series:[{data:[],type:"line",smooth:!0}]}}},mounted:function(){for(var t=this,n=1;n<=15;n++)this.option.xAxis.data.push(n),this.option.series[0].data.push(Number(Q(n)));this.worker=new Worker("worker.js"),this.worker.onerror=function(n){t.$message("worker线程出错啦!原因是:"+(n.message||e))}},methods:{factorialA:function(t){if(!t&&0!==t)throw"No parameter exists";if(t&&isNaN(t))throw"parameter is not a number!";if(t<0)throw"parameter is not a positive integer!";for(var n=BigInt(Math.floor(t/2)),e=BigInt(1),r=BigInt(1);r<=n;r++)e*=r;return e},calcCycle:function(){var t=this,n=(new Date).getTime(),e=this.factorialA(this.num),r=(new Date).getTime();this.mainTime=r-n,this.worker.postMessage({method:"factorialA",args:this.num}),this.worker.onmessage=function(n){var r=n.data,i=r.res,a=r.time;t.result=(i*e).toString(),t.workerTime=a}},factorialB:function(t){if(!t&&0!==t)throw"No parameter exists";if(t&&isNaN(t))throw"parameter is not a number!";if(t<0)throw"parameter is not a positive integer!";function n(e){if(e===Math.floor(t/2)+1)return BigInt(Math.floor(t/2)+1);var r=BigInt(e);return r*n(e-1)}return n(t)},calcRecursive:function(){var t=this,n=(new Date).getTime(),e=this.factorialB(this.num),r=(new Date).getTime();this.mainTime=r-n,this.worker.postMessage({method:"factorialB",args:this.num}),this.worker.onmessage=function(n){var r=n.data,i=r.res,a=r.time;t.result=(i*e).toString(),t.workerTime=a}},calc:function(){try{this.calcCycle()}catch(e){console.log("===================================="),console.log(e),console.log("===================================="),this.$message(e.message||e)}}}},L=F,Z=(r("cd40"),Object(p["a"])(L,Y,O,!1,null,null,null)),V=Z.exports,G={name:"app",components:{About:h,Second:y,Third:j,Fourth:R,Summary:V},data:function(){return{activeName:"about"}}},H=G,W=(r("5c0b"),Object(p["a"])(H,a,s,!1,null,null,null)),X=W.exports,$=r("5c96"),K=r.n($);r("0fae");i["default"].use(K.a),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(X)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";var r=e("e332"),i=e.n(r);i.a},"738a":function(t,n,e){},cd40:function(t,n,e){"use strict";var r=e("738a"),i=e.n(r);i.a},d59d:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAA7CAYAAACHSkNhAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATKSURBVHhe7ZjbTeRAEEXng0++JwAiIARCIAZiIAqCIAyiIA7SmNWxKKm2tl/YlNvy3iNZ87Dd7u46ri77chMiEQkmUpFgIhUJJlKRYCIVCSZSkWAiFQkmUpFgIhUJJlKRYCIVCSZSkWAiFQkmUpFgJ+Xt7e12vV6X7+/v78v3z8/P5feeSLCJfHx8fH9bR02Yr6+vRaqHh4dFNK6DYPy/NxJsEgR9q2Dw+vr6/e1vYta6v79fPvdGgk3i8fHx+9u/vLy8LNnH4Pfd3V0xYz09PRUz0/Pz87IBIreul4kEmwDLFmKUQCZkQDDE4TfHXy6XomDsM5E8nG8ZkjbYVIP9J1htVAP5YgYig5VAQuSLWIEP1t4MTi0YdQiTSwBmbCVMiFbBjRxeEOosv2RGkK8l7ExOLRhy1YrgWVg91QIBvTAsmZxXw5bUI3JqwWqF8Ux4mmsV3CyHMfsxjtYTJ/L1suIsTisYYs16NK9hy2MrG7HPZyM7h0zMkl/CpKztn0maYPbkM+uuIlCxsCUQ1Db0C/n2rltMhF6B75d1zqGvLXlGxJ1FmmAEl0HPApH8skIQTCp7CUn//DHZIE7WNWl31ruuFmkGWF2QTanGQqZYSBPcKBz92/Px3Z5oM7I6N8/RSgJIXSJ7T0tbQBjaL00q1453cymonEvQR0HmLXJQW2XddJltb2F1j2Ixym//1MYyNHpH/TRotM05lhFifYJcI/UV/fX1Dt8ZExt955Ol1ILnxwe9OYjQFvszYMynEYyJZEBMLoHmNwFlgDa5fPrJL2ESssVgA/ujPB6uwTUJnIe2etKyXMZg2/X5ZEwGx8axjMxBxMaaQebyu4XVyjMg6herYWLAGGhcpjzs98sTQUEUNgtw63zD7lwTkX5E4UogRk1e2vQZsHZsbw4i7Bvp2xpOJ5jJYNjy4vECjUIgLRuMYFnMrs25bC3Y3yruaQ9ZwNovMTIHnkzBGA/9rGXPWawWjMF4CbjrY2B7g+VuY2IICp/x7uN3a4k0LItZ9jI5SrCvJQH7vVBIU5NiZA48PcFob2QrcSrBYhCAyWsFtgSBJoCcxwTRBr8BuQjYSMq3/tAebdSgLQLcapOs6yWgXyUp1sxBT7AtmGAj87UnqwTjLvVZgEExOOSwjMMxTGhtwNxpMRj8JgAWiFawIvSHPrSWZQpsAkHWYbMlzd/1tOGzEMfwH8f4bDoyBxEV+YMwGMs0gAhMnJ9Y9vPfXgOmD0xwLbi2jNqGxIzDS2x99sLRf/5DJn/syBxEuGk4JgMb39E4Xo824DPKEaF/iJ0BbUuwZI62PERsGcsgMztu4VSCHR2WVATLeNIjM7JMHg0JtiO9OnELtNt6RTILCbYziOAfDlpwHMsq2aklJRkxS9ytSLCdoVZCmh72OgUo4FvncByCHREJtjMsY71inKXUnojtNYl/RRJBviPWXyDBdgZhetkGuchgLJEI2Xs67r1/m4kEmwACtYT4SZ0GWe/WfgMJNgHkIkOVsIJ99FUG9VetrSMgwSZRK9ptCbUMRu3Vev1wZLlAgk2CDFUr3JEGyVhK7UmyRm//bCTYRLa+0d96/h5IMJGKBBOpSDCRigQTqUgwkYoEE6lIMJGKBBOpSDCRigQTidxufwBFgRgZ0qVXJQAAAABJRU5ErkJggg=="},deac:function(t,n,e){t.exports=e.p+"img/js.ac006426.jpg"},e332:function(t,n,e){},e726:function(t,n,e){t.exports=e.p+"img/support-bigint.583e41af.png"}});
//# sourceMappingURL=app.349be440.js.map