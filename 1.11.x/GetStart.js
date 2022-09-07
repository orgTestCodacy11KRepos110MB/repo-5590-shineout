(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[25],{691:function(n,e,t){"use strict";t.r(e);var s=t(0),o=t.n(s),i=t(562),r=t(563),a=t(40),c=t(692),p=t.n(c),l=t(693),u=t.n(l),h=Object(a.b)(p.a,u.a),d=[{name:"locale",isTs:!1,isTest:!1,title:Object(a.b)("",""),component:t(694).default,rawText:t(695)}];e.default=Object(i.a)(function(n){return o.a.createElement(r.b,Object.assign({},n,{codes:void 0,source:h,examples:d}))})},692:function(n,e){n.exports="## 安装\n\n通过 npm 安装\n```\n$ npm install shineout\n```\n\n通过 CDN 引用\n```\n<script crossorigin src=\"https://unpkg.com/shineout/dist/shineout.min.js\"><\/script>\n<link rel=\"stylesheet\" href=\"https://unpkg.com/shineout/dist/theme.shineout.css\" />\n```\n\n## 使用\n``` lang-jsx\nimport { Table } from 'shineout'\n\n<Table />\n```\n\n## 配置\n\n### webpack\n\nnpm 安装的组件有三个目录，'es/'，'lib/'，'css/'，默认的目录是 'lib/'。\n\n- *es* - 目录下是 es5 版本的 esm 代码，支持 tree Shaking，需要自行配置 webpack 的 less-loader。\n\n- *lib* - 目录下 js 文件为 es5 版本代码，样式文件保留为 less，需要切换主题的用户可以选择这个版本，需要自行配置 webpack 的 less-loader。\n\n- *css* - 目录下 js 文件为 es5 版本代码，样式文件为 default 主题的 css 文件，不需要配置 webpack。\n\n\n### theme 主题\n\n除了自带的 shineout 主题，还内置支持了 default，和兼容 ant-design 的主题 'antd'（方便两个组件库混用的场景，只是配色接近，交互和接口参数不同）。\n\nnpm 安装的方式可以通过修改 webpack 的 less-loader 配置来切换主题。\n```\n{\n  loader: 'less-loader',\n  options: {\n    modifyVars: {\n      'so-theme': 'shineout'\n    }\n  }\n}\n```\n\nCDN 引用的方式，可以修改引用路径\n```\n<link rel=\"stylesheet\" href=\"https://unpkg.com/shineout/dist/theme.shineout.css\" />\n// or\n<link rel=\"stylesheet\" href=\"https://unpkg.com/shineout/dist/theme.default.css\" />\n// or\n<link rel=\"stylesheet\" href=\"https://unpkg.com/shineout/dist/theme.antd.css\" />\n```\n\n\n### CSS 前缀\n\n默认通过前缀来隔离 css 代码，默认的前缀是 'so'。通常情况下，不需要修改。如果想修改这个值，修改 webpack 的 less-loader 配置\n```\n{\n  loader: 'less-loader',\n  options: {\n    modifyVars: {\n      'so-prefix': 'your-prefix'\n    }\n  }\n}\n```\n\n在项目内设置 config\n\n```\nimport { setConfig } from 'shineout'\nsetConfig({\n  prefix: 'your-prefix'\n})\n```\n```\n// 或者修改webpack 的 process.env\nplugins: [\n  new webpack.DefinePlugin({\n    'process.env': {\n      SO_PREFIX: JSON.stringify('your-prefix'),\n    },\n  }),\n],\n```\n\n### CSS Module\n\n如果需要使用 CSS Module，首先修改 webpack 的 css-loader 配置\n```\n{\n  loader: 'css-loader',\n  options: {\n    modules: true,\n    localIdentName: '[local]--[hash:base64:5]'\n  }\n}\n```\n\n在应用入口设置 config.cssModule 为 true\n```\nimport { setConfig } from 'shineout'\nsetConfig({\n  cssModule: true\n})\n\n```\n```\n// 或者修改 webpack 的 process.env\nplugins: [\n  new webpack.DefinePlugin({\n    'process.env': {\n      CSS_MODULE: true\n    },\n  }),\n],\n```\n\n### 输入延迟\n\n输入延迟指的是用户输入触发 onChange 和校验间隔时间，Input、TextArea、EditableArea 组件具有该功能，默认为 400毫秒。\n\n可以通过设置 config.delay 改变全局的延迟时间。\n\n```\nimport { setConfig } from 'shineout'\nsetConfig({\n  delay: 0\n})\n\n```\n\n## 在 Create-React-App 中使用\n\n<br />\n\n[create-react-app](https://facebook.github.io/create-react-app/) 是由 Facebook 官方提供的 React 应用构建工具。\n\n### 安装及构建\n\n使用 create-react-app，需先在全局 npm 中安装：\n\n```\n$ npm i -g create-react-app\n```\n\n构建一个 React 环境的工程：\n\n```\n$ create-react-app first-shineout-demo\n```\n\n期间 create-react-app 会自动将相关依赖帮你安装好，无需执行 npm。\n\n进入目录，并运行：\n```\n$ cd first-shineout-demo\n$ npm start\n```\n\n此时浏览器会自动访问 http://localhost:3000/。\n\n\n### 引入 shineout\n\n现在安装并引入 shineout：\n\n```\n$ npm i shineout\n```\n\n修改 `src/App.js`，引入 shineout 中的 `<Button />` 组件。\n\n```\nimport React, { Component } from 'react';\nimport './App.css';\n+ import { Button } from 'shineout'\n\nclass App extends Component {\n  render() {\n    return (\n      <div className=\"App\">\n        + <Button type=\"success\">成功按钮</Button>\n      </div>\n    );\n  }\n}\n\nexport default App;\n```\n\n修改 `src/App.css`，在文件顶部引入 `shineout/dist/theme.shineout.css`。\n\n```\n+ @import '~shineout/dist/theme.shineout.css';\n\n.App {\n  text-align: center;\n}\n\n...\n```\n\n同时该项目兼容 `antd` 的样式，引入方式如下：\n\n```\n- @import '~shineout/dist/theme.shineout.css';\n- @import '~shineout/dist/theme.default.css';\n+ @import '~shineout/dist/theme.antd.css';\n\n.App {\n  text-align: center;\n}\n\n...\n```\n\n### 高级配置\n\n此时，项目中已经包含了 shineout 组件库的相关组件，但距离实际开发还存在一定的隐患，因为刚刚在 `src/App.css` 中引入了所有组件的所需的样式。但在实际开发中我们可能只使用一少部分组件，因此，针对 `create-react-app` 的配置进行一些调整。\n\n引入 [rescripts](https://github.com/harrysolovay/rescripts) 并修改 package.json（ rescripts 社区提供的 create-react-app 配置解决方案之一）。\n\n```\n$ npm i @rescripts/cli\n```\n\n修改 `package.json` 文件：\n\n```\n...\n\"scripts\": {\n-   \"start\": \"react-scripts start\",\n+   \"start\": \"rescripts start\",\n-   \"build\": \"react-scripts build\",\n+   \"build\": \"rescripts build\",\n-   \"test\": \"react-scripts test\",\n+   \"test\": \"rescripts test\",\n-   \"eject\": \"react-scripts eject\"\n}\n...\n```\n\n然后在项目根目录创建一个 `.rescriptsrc.js` 用于修改默认配置。\n\n```\nmodule.exports = [];\n```\n\n### 按需加载\n\nshineout 的 JS 代码默认支持基于 ES modules 的 tree shaking。\n\n### 修改Shineout主题\n\n因为修改主题需要编译 less ，因此需引入重写 less 相关的内容。\n\n1. 引入 `rescript-use-rewire` 和 `react-app-rewire-less`\n\n```\n$ npm i @rescripts/rescript-use-rewire react-app-rewire-less\n```\n\n2.修改 `.rescriptsrc.js` 文件\n\n```\n+ const rewireLess = require('react-app-rewire-less');\n\nmodule.exports = [\n+ [\n+   'use-rewire',\n+   rewireLess.withLoaderOptions({\n+     modifyVars: { 'so-theme': 'shineout' }, // 主题修改为 shineout\n+     javascriptEnabled: true\n+   })\n+ ]\n];\n```\n\n3. app.css 中不需要再引入 shineout 样式\n```\n- @import '~shineout/dist/theme.shineout.css';\n- @import '~shineout/dist/theme.default.css';\n- @import '~shineout/dist/theme.antd.css';\n\n.App {\n  text-align: center;\n}\n\n...\n```\n\n4. 重新执行 `npm start` 即可\n\n\n## I18N\n\n组件库中部分组件（Datepicker，Select，Modal等）内置了部分文字，暂时为简体中文（zh-CN）和英文（en-US）两组。默认为英文（en-US），可以通过 webpack 的 process.env 切换\n```\nplugins: [\n  new webpack.DefinePlugin({\n    'process.env': {\n      LOCALE: JSON.stringify('zh-CN'),\n    },\n  }),\n],\n```\n\nCDN 引用的版本可以调用 locale 的 setLocale 方法\n\n```\nimport { setLocale } from 'shineout'\nsetLocale('zh-CN')\n```\n\n其他语言或者部分设置，可以传入一个 Json 数据\n\n```\nsetLocale({ ok: 'yes' })\n```\n\n当前 locale 内容如下:\n\n<example name=\"locale\" />\n\n## RTL\n组件全面支持阿拉伯语模式需要在入口文件调用 setConfig 方法\n```\nimport { setConfig } from 'shineout'\nsetConfig({direction: 'rtl'})\n```\n"},693:function(n,e){n.exports="## Install\n\ninstall from npm\n```\n$ npm install shineout\n```\n\nuse tag from a CDN\n```\n<script crossorigin src=\"https://unpkg.com/shineout/dist/shineout.min.js\"><\/script>\n<link rel=\"stylesheet\" href=\"https://unpkg.com/shineout/dist/theme.default.css\" />\n```\n\n\n## Usage\n``` js\nimport { Table } from 'shineout'\n\n<Table />\n```\n\n## Configuration\n\n### theme\n\nIn addition to its own shineout theme, there are two sets of theme built in, default and the theme 'antd' that is compatible with ant-design(Convenient for the mixing of two component libraries and just the color matching is close, the interaction and interface parameters are different.)\n\nYou can switch topics by modifying the webpack's less-loader configuration.\n```\n{\n  loader: 'less-loader',\n  options: {\n    modifyVars: {\n      'so-theme': 'antd'\n    }\n  }\n}\n```\n\n### The prefix of css\n\nBy default, the css code is isolated by prefix. The default prefix is 'so' and does not need to modified normally. If you wang to modify this value, modify the less-loader configuration of the webpack.\n```\n{\n  loader: 'less-loader',\n  options: {\n    modifyVars: {\n      'so-prefix': 'your-prefix'\n    }\n  }\n}\n```\n\nSet config in the project.\n\n```\nimport { setConfig } from 'shineout'\nsetConfig({\n  prefix: 'your-prefix'\n})\n```\n```\n// or modify the process.env of webpack\nplugins: [\n  new webpack.DefinePlugin({\n    'process.env': {\n      SO_PREFIX: JSON.stringify('your-prefix'),\n    },\n  }),\n],\n```\n\n### CSS Module\n\nIf you need to use the CSS Module, modify the css-loader configuration of the webpack firstly.\n```\n{\n  loader: 'css-loader',\n  options: {\n    modules: true,\n    localIdentName: '[local]--[hash:base64:5]'\n  }\n}\n```\n\nSet the config.cssmodule to true at the application entrance\n```\nimport { setConfig } from 'shineout'\nsetConfig({\n  cssModule: true\n})\n\n```\n```\n// or modify the process.env of webpack\nplugins: [\n  new webpack.DefinePlugin({\n    'process.env': {\n      CSS_MODULE: true\n    },\n  }),\n],\n```\n\n### Input delay\n\nInput delay refers to the user's input trigger onchange and check interval. Input, Textarea and Editablearea components have this function, and the default is 400ms.\n\nYou can change the global delay time by setting config.delay.\n\n```\nimport { setConfig } from 'shineout'\nsetConfig({\n  delay: 0\n})\n\n```\n\n\n## Use Shineout In Create React App\n\n<br />\n\n[create-react-app](https://facebook.github.io/create-react-app/)  is the official React app build tool from Facebook.\n\n### Installation and Building\n\nYou need to install create-react-app with npm:\n\n```\n$ npm i -g create-react-app\n```\n\nCreate a new React project：\n\n```\n$ create-react-app first-shineout-demo\n```\n\nDuring the create-react-app will automatically help you to install dependencies without npm.\n\nThen we go inside first-shineout-demo and start it:\n\n```\n$ cd first-shineout-demo\n$ npm start\n```\n\nAt this point, the browser will automatically open http://localhost:3000/.\n\n\n### Import shineout\n\nVia npm install:\n\n```\n$ npm i shineout\n```\n\nModify `src/App.js`, import `<Button />` from shineout.\n\n```\nimport React, { Component } from 'react';\nimport './App.css';\n+ import { Button } from 'shineout'\n\nclass App extends Component {\n  render() {\n    return (\n      <div className=\"App\">\n        + <Button type=\"success\">Success Button</Button>\n      </div>\n    );\n  }\n}\n\nexport default App;\n```\n\nModify `src/App.css`, add `shineout/dist/theme.default.css` at the top of the file.\n\n```\n+ @import '~shineout/dist/theme.default.css';\n\n.App {\n  text-align: center;\n}\n\n...\n```\n\nYou can also import the style of antd:\n\n```\n- @import '~shineout/dist/theme.default.css';\n+ @import '~shineout/dist/theme.antd.css';\n\n.App {\n  text-align: center;\n}\n\n...\n```\n\nVisit other workflows of [create-react-app](https://facebook.github.io/create-react-app/) at its User Guide.\n\n### Advanced configuration\n\nThe relevant components of the shineout component library are already included in the project, but there are some hidden dangers from the actual development, because the required styles of all components have just been introduced in `src/App.css`. However, in actual development we may only use one components, so some adjustments are made to the configuration of `create-react-app`.\n\nImport [rescripts](https://github.com/harrysolovay/rescripts) and Modify package.json.\n\n```\n$ npm i @rescripts/cli\n```\n\nModify `package.json`:\n\n```\n...\n\"scripts\": {\n-   \"start\": \"react-scripts start\",\n+   \"start\": \"rescripts start\",\n-   \"build\": \"react-scripts build\",\n+   \"build\": \"rescripts build\",\n-   \"test\": \"react-scripts test\",\n+   \"test\": \"rescripts test\",\n-   \"eject\": \"react-scripts eject\"\n}\n...\n```\n\nCreate a `.rescriptsrc.js` in root directory.\n\n```\nmodule.exports = [];\n```\n\n### Use modularized shineout\n\nshineout supports ES modules tree shaking by default for JS part.\n\n\n\n### Modify Theme\n\nModifying the theme requires compiling less , it is necessary to introduce rewrite less related content.\n\n1. \bInstall `rescript-use-rewire` and `react-app-rewire-less`.\n\n```\n$ npm i @rescripts/rescript-use-rewire react-app-rewire-less\n```\n\n2. Modify `.rescript.js` file\n```\n+ const rewireLess = require('react-app-rewire-less');\n\nmodule.exports = [\n+ [\n+   'use-rewire',\n+   rewireLess.withLoaderOptions({\n+     modifyVars: { 'so-theme': 'antd' }, // change theme to antd\n+     javascriptEnabled: true\n+   })\n+ ]\n];\n```\n\n3. Re-run `npm start`.\n\n## I18N\n\nSome components (Datepicker, Select, Model, etc..) has build in text, default pack is 'es-US', set the webpack process.env to 'zh-CN' changes the language pack to Chinese.\n```\nplugins: [\n  new webpack.DefinePlugin({\n    'process.env': {\n      LOCALE: JSON.stringify('zh-CN'),\n    },\n  }),\n],\n```\n\nIf you use Shineout form a CDN, you can call the setLocale method of locale.\n\n```\nimport { setLocale } from 'shineout'\nsetLocale('zh-CN')\n```\n\nOther language or part of the set can be passed in a Json data.\n\n```\nsetLocale({ ok: 'yes' })\n```\n\nThe current locale content is as follows:\n\n<example name=\"locale\" />\n\n## RTL\nThe component fully supports Arabic mode and needs to call the setConfig method in the entry file\n```\nimport { setConfig } from 'shineout'\nsetConfig({direction: 'rtl'})\n```\n"},694:function(n,e,t){"use strict";t.r(e);var s=t(0),o=t.n(s),i=t(36);e.default=function(){return o.a.createElement("pre",null,JSON.stringify(Object(i.a)(),null,2))}},695:function(n,e){n.exports="import React from 'react'\nimport { getLocale } from 'shineout/locale'\n\nexport default function() {\n  return <pre>{JSON.stringify(getLocale(), null, 2)}</pre>\n}\n"}}]);