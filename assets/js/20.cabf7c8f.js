(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{293:function(t,s,n){"use strict";n.r(s);var a=n(14),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"随手记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#随手记"}},[t._v("#")]),t._v(" 随手记")]),t._v(" "),s("blockquote",[s("p",[t._v("2021-3-10 17:23:11\n"),s("br"),t._v("分类专栏：vue css js")])]),t._v(" "),s("p",[s("strong",[t._v("常见报错Error")])]),t._v(" "),s("ol",[s("li",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210323110231903.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ2MzYzNzkw,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),s("li",[t._v("没有log")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("log.js?1afd:24 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("HMR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Waiting "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" update signal from WDS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nmain.js?56d7:131\n")])])]),s("p",[t._v('解决：在babel.config.js  注释掉plugins.push("transform-remove-console")')]),t._v(" "),s("p",[s("strong",[t._v("vuex")]),t._v("\n组件不允许直接变更属于 store 实例的 state，而应执行 action 来分发 (dispatch) 事件通知 store 去改变\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210323110345516.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ2MzYzNzkw,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[s("strong",[t._v("Git")])]),t._v(" "),s("p",[t._v("拉取远程分支 git pull origin publish-test\n切换分支 git checkout dev-zhangjingjing")]),t._v(" "),s("p",[t._v("基于test分支来建立分支dev-zhangjingjing")]),t._v(" "),s("ol",[s("li",[t._v("将test分支clone到本地")]),t._v(" "),s("li",[t._v("在test分支下执行 git checkout -b dev-zhangjingjing")]),t._v(" "),s("li",[t._v("切换到dev-zhangjingjing分支进行开发")])]),t._v(" "),s("p",[s("strong",[t._v("CSS")]),t._v("\nHeight设置100%没用 ：设置 body,html{    height: 100%;    }")]),t._v(" "),s("p",[s("strong",[t._v("NVM")]),t._v("： 切换node版本\nnvm ls   查看现有node版本\nnvm install v10.1.0  安装node对应版本\nnvm use node v10.1.0  切换node版本为当前版本\n报错：zsh: command not found: nvm   解决： source ~/.bash_profile")]),t._v(" "),s("p",[s("strong",[t._v("Sass Scss区别")]),t._v("\nscss是sass的一个升级版本，完全兼容sass之前的功能，又有了些新增能力。语法形式上有些许不同，最主要的就是sass是靠缩进表示嵌套关系，scss是花括号")]),t._v(" "),s("p",[s("strong",[t._v("面包屑")]),t._v("\n面包屑导航  百度知道>电脑/网络>互联网")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("  最右端的地址为当前浏览页，最左端的为起始页面，这种结构使得用户对于所访问页的层次结构一目了然。面包屑导航不仅可改善网站的实用性，同时亦可提高网站对搜索引擎的友好性。访客使用面包屑导航可以快速返回上层目录，查看其它需要的内容。在许多关于网站用户使用体验的调查报告中也得出，如果超过3次点击，访客还没有找到需要的信息，那么有大约80%的访客会离开网站。这一点对搜索引擎来说也不例外。提供良好的返回导航连接可帮助搜索引擎更好地检索整个网站。而且，“面包屑型”导航连接中的锚文本还可以增进链接页的权重。\n")])])]),s("p",[s("strong",[t._v("组件传值")]),t._v("：\n父到子：  子组件中props   父组件通过v-bind为子组件的prop设置函数\n"),s("strong",[t._v("Vue组件懒加载")]),t._v("\ncomponent: resolve => require(['@/view/index.vue'], resolve) 与component: index区别\nrequire: 运行时调用，理论上可以运用在代码的任何地方，\nimport：编译时调用，必须放在文件开头\n懒加载：component: resolve => require(['@/view/index.vue'], resolve)\n用require这种方式引入的时候，会将你的component分别打包成不同的js，加载的时候也是按需加载，只用访问这个路由网址时才会加载这个js\n非懒加载：component: index\n如果用import引入的话，当项目打包时路由里的所有component都会打包在一个js中，造成进入首页时，需要加载的内容过多，时间相对比较长\nvue的路由配置文件(routers.js)，一般使用import引入的写法，当项目打包时路由里的所有component都会打包在一个js中，在项目刚进入首页的时候，就会加载所有的组件，所以导致首页加载较慢，\n而用require会将component分别打包成不同的js，按需加载，访问此路由时才会加载这个js，所以就避免进入首页时加载内容过多。")]),t._v(" "),s("p",[s("strong",[t._v("Vue动态组件")]),t._v("\nhttps://cn.vuejs.org/v2/guide/components-dynamic-async.html\n一个多标签的界面中使用 is attribute 来切换不同的组件")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("component v-bind:is"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"currentTabComponent"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("当在这些组件之间切换的时候，你有时会想保持这些组件的状态，以避免反复重渲染导致的性能问题。   使用keep-alive失活的组件将会被缓存")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("keep-alive"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("component v-bind:is"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"currentTabComponent"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/keep-alive"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Vue组件中name的作用")]),t._v("\nhttps://www.jb51.net/article/140702.htm\nname非必选项\n用处：")]),t._v(" "),s("ol",[s("li",[t._v("项目使用keep-alive时，可搭配组件name进行缓存过滤")]),t._v(" "),s("li",[t._v("DOM做递归组件时")]),t._v(" "),s("li",[t._v("vue-devtools调试工具里显示的组见名称是由vue中组件name决定的")]),t._v(" "),s("li")]),t._v(" "),s("p",[s("strong",[t._v("SDK与API")])]),t._v(" "),s("p",[t._v("参考博客"),s("a",{attrs:{href:"https://www.zhihu.com/question/21691705",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.zhihu.com/question/21691705"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("Vue内置组件 keep-alive")])]),t._v(" "),s("p",[t._v("在设置keep-alive缓存的组件中，首次进入组件，会一次调用组件的钩子函数：created --\x3e mounted --\x3eactivated 再次进入时，只触发activated钩子函数")]),t._v(" "),s("p",[s("strong",[t._v("其他：")])]),t._v(" "),s("ol",[s("li",[t._v("Vue filter 过滤器")]),t._v(" "),s("li",[t._v("Html标签内小于大于号用<>替换")]),t._v(" "),s("li",[t._v("不设置a标签跳转链接（创建元素）\n封装函数 在需要跳转时调用")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ele "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      ele"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hemaOrigin"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      ele"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_blank"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      ele"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("模块内容迁移总结")])]),t._v(" "),s("ol",[s("li",[t._v("js文件中抛出的函数 引入时需使用解构  {   }")]),t._v(" "),s("li",[t._v("路径一般后面加/")]),t._v(" "),s("li",[t._v("qiankun处理子应用间传参 主应用中定义传参格式")]),t._v(" "),s("li",[t._v("element-ui最好按需引入 否则容易造成包体过大 打包失败")]),t._v(" "),s("li")]),t._v(" "),s("p",[t._v("前端项目越来越大，最近在执行serve和build命令时出现了")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory\n")])])]),s("p",[t._v("错误。这是因为在webapck打包过程中占用的内存堆栈超出了node.js中采用的V8引擎对内存的限制导致的。V8引擎对内存的使用的默认大小限制是1.4G，可以通过node.js命令设置限制来解决这个问题。具体如下。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"serve"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npx --max_old_space_size=6144 vue-cli-service serve"')]),t._v(",\n\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npx --max_old_space_size=6144 vue-cli-service build --modern"')]),t._v("\n")])])]),s("p",[t._v("注意：数字的大小不是固定的，可以按照电脑内存的大小以及项目编译时需要的大小来设置")])])}),[],!1,null,null,null);s.default=e.exports}}]);