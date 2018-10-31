# cli3-living-admin

基于 `vue-cli3 + ElementUI` 的后台管理系统解决方案示例.

线上访问, 请电脑访问: [cli3-living-iview.open.tinytank.cn](http://cli3-living-iview.open.tinytank.cn)

--------------

### 基于Vue2前端技术栈
- [x] 前端VM框架: [vue2](https://github.com/vuejs/vue)
- [x] Vue 脚手架: [vue-cli3](https://github.com/vuejs/vue-cli)
- [x] 路由的处理: [vue-router](https://github.com/vuejs/vue-router)
- [x] 状态管理器: [vuex](https://github.com/vuejs/vuex)
- [x] 页面组件库: [element-ui](https://github.com/ElementFE/element)
- [x] 图表的处理: [vue-echarts](https://github.com/xlsdg/vue-echarts-v3)
- [x] MD的编辑器: [vue-simplemde](https://github.com/F-loat/vue-simplemde)
- [x] 富文本框框: [quillEditor](https://github.com/surmon-china/vue-quill-editor)
- [x] MD语法支持: [vue-markdown](https://github.com/miaolz123/vue-markdown)
- [x] 文件的上传: [iview内置](https://www.iviewui.com/components/upload)

其他
- [x] echarts 官方: [Echarts](https://github.com/apache/incubator-echarts)
- [x] markdown编辑: [MarkdownEditor](https://github.com/alecgorge/MarkdownEditor)

--------------

### 使用
```
npm i               // 安装依赖
npm run dev         // 本地开发
npm run build       // 生产部署
```
--------------

### 目录结构
	|-- public                                 // 静态文件目录
	|   |-- favicon.ico                        // 企业图标
	|   |-- index.html                         // 入口文件
	|-- src                                    // 源码目录
	|   |-- api                                // 接口请求统一管理器
	|   |-- assets                             // 主题/字体等静态资源
	|   |-- components                         // 组件
	|   |-- directive                          // 全局指令
	|   |-- filters                            // 全局过滤器
	|   |-- icons                              // 所有svg矢量图标
	|   |-- lang                               // 国际化语言库
	|   |-- mock                               // 模拟数据
	|   |-- router                             // 路由
	|   |-- store                              // 状态管理器
	|   |-- styles                             // 全局样式
	|   |-- vendor                             // 全局公用方法
	|   |-- views                              // 所有页面
	|   |-- App.vue                            // 页面入口
	|   |-- errorLog.js                        // 错误日志处理
	|   |-- main.js                            // 程序入口/初始化/加载组件
	|   |-- permission                         // 角色权限控制
	|-- .browserslistrc                        // browser配置
	|-- .editorconfig                          // 代码编写规格
	|-- .env                                   // 环境变量
	|-- .eslintrc.js                           // eslint配置
	|-- .gitignore                             // git忽略文件
	|-- babel.config.js                        // ES6语法编译配置
	|-- package.json                           // 依赖及配置
	|-- postcss.config.js                      // postcss配置
	|-- README.md                              // 简介
	|-- vue.config.js                          // Vue项目配置
	
--------------

### 截图预览
![1](https://github.com/erchoc/cli3-living-admin/static/screenshots/s1.png)

![2](https://github.com/erchoc/cli3-living-admin/static/screenshots/s2.png)

![3](https://github.com/erchoc/cli3-living-admin/static/screenshots/s3.png)

----------------

### 菜单栏TODOList 
- [x] Dashboard
- [x] 写文章
- [x] 菜单管理
- [x] 权限管理
- [x] 订单管理
- [x] 留言管理  
- [x] 企业信息
- [x] 系统日志
- [x] 微信配置
- [x] 用户管理
  - [x] 添加用户
  - [x] 用户列表
  - [x] 会员管理
    - [x] 添加会员
    - [x] 会员列表
- [x] 文章管理
  - [x] 添加文章
  - [x] 文章列表
  - [x] 文章类目
      - [x] 添加类目
      - [x] 类目列表
- [x] 产品管理
  - [x] 添加产品
  - [x] 产品列表
- [x] 友情链接
  - [x] 添加链接
  - [x] 友链列表

### 功能性TODOList
- [x] 登陆/注销
- [x] 简繁英i18n语言切换
- [x] 条目拖拽功能
- [x] 数据导入功能Excel/Txt
- [x] 数据导出功能Excel/Txt
- [x] 信息认证等级星标区分
- [x] 单/多文件上传功能
- [x] 单图上传裁剪/限制大小/分辨率
- [x] 权限判断/动态渲染菜单列
- [x] 可导入矢量图库/自定义矢量图标
- [x] 多种主题色切换功能
- [x] Web简历预览/导出doc/pdf/png

### 开源版TODO
- [x] 表格/表单
- [x] Tab选项卡
- [x] 富文本编辑器
- [x] Markdown编辑器
- [x] 单/多文件上传
- [x] 图片上传裁剪
- [x] 自定义图标
- [x] 主题色切换
- [x] 数据导入导出(xls,pdf,jpg)
- [x] Echarts图表
- [x] 拖拽列表
- [x] 403/404页面
- [x] 无访问权限页面

---------------

### 其他
- 部分内容参考了: [manage-system](https://github.com/lin-xin/manage-system)
- 有任何问题或建议欢迎提出issue.

---------------

### License
[MIT](https://opensource.org/licenses/MIT)
