/**
 * 此文件根据 scripts/components-page.ejs 生成，不要手动修改
 */
import React from 'react'
import navable from 'docs/Navable'
import MarkDown from 'docs/MarkDown'

import locate from 'doc/locate'

import cn from 'doc/pages/components/Tag/cn.md'
import en from 'doc/pages/components/Tag/en.md'

const source = locate(cn, en)

const examples = [
  {
    name: '1-base',
    isTs: true,
    isTest: false,
    title: locate(
      '基本用法 \n 基本的使用',
      'Base \n Basic usage'
    ),
    component: require('doc/pages/components/Tag/example-1-base.tsx').default,
    rawText: require('!raw-loader!doc/pages/components/Tag/example-1-base.tsx'),
    parseTsText: require('!raw-loader!ts-loader!doc/pages/components/Tag/example-1-base.tsx'),

  },
  {
    name: '2-type',
    isTs: true,
    isTest: false,
    title: locate(
      '类型 \n 内置了 4 种类型（样式），[default,success, info, warning, danger]，默认为 default',
      'type \n There are four built-in types (styles), [default,success, info, warning, danger], the default value is default.'
    ),
    component: require('doc/pages/components/Tag/example-2-type.tsx').default,
    rawText: require('!raw-loader!doc/pages/components/Tag/example-2-type.tsx'),
    parseTsText: require('!raw-loader!ts-loader!doc/pages/components/Tag/example-2-type.tsx'),

  },
  {
    name: '3-bgcolor',
    isTs: true,
    isTest: false,
    title: locate(
      '背景色 \n 可以通过backgroundColor, 和style去设置自己想要的样式',
      'background color \n You can set the style you want with backgroundColor, and style.'
    ),
    component: require('doc/pages/components/Tag/example-3-bgcolor.tsx').default,
    rawText: require('!raw-loader!doc/pages/components/Tag/example-3-bgcolor.tsx'),
    parseTsText: require('!raw-loader!ts-loader!doc/pages/components/Tag/example-3-bgcolor.tsx'),

  },
  {
    name: '4-close',
    isTs: true,
    isTest: false,
    title: locate(
      '关闭 \n 设置 onClose 属性时，显示关闭按钮 \n onClose 为 true 时，只关闭提示，不处理 \n onClose 为函数时，关闭后调用此函数',
      'onClose \n When the onClose property is set, the close button is displayed. \n When the onClose property is true, only hide the component. \n When the onClose is a function, call this function after hiding it.'
    ),
    component: require('doc/pages/components/Tag/example-4-close.tsx').default,
    rawText: require('!raw-loader!doc/pages/components/Tag/example-4-close.tsx'),
    parseTsText: require('!raw-loader!ts-loader!doc/pages/components/Tag/example-4-close.tsx'),

  },
  {
    name: '5-disabled',
    isTs: true,
    isTest: false,
    title: locate(
      '禁用 \n 禁用tag',
      'disabled \n disabled the tag'
    ),
    component: require('doc/pages/components/Tag/example-5-disabled.tsx').default,
    rawText: require('!raw-loader!doc/pages/components/Tag/example-5-disabled.tsx'),
    parseTsText: require('!raw-loader!ts-loader!doc/pages/components/Tag/example-5-disabled.tsx'),

  },
  {
    name: '6-dynamic',
    isTs: true,
    isTest: false,
    title: locate(
      '动态用法 \n 通过数组生成tags,动态增改',
      'Dynamic usage \n create tags by use array, add and remove'
    ),
    component: require('doc/pages/components/Tag/example-6-dynamic.tsx').default,
    rawText: require('!raw-loader!doc/pages/components/Tag/example-6-dynamic.tsx'),
    parseTsText: require('!raw-loader!ts-loader!doc/pages/components/Tag/example-6-dynamic.tsx'),

  },
  {
    name: '7-editable',
    isTs: true,
    isTest: false,
    title: locate(
      '可编辑 \n onCompleted 不为空时，可编辑',
      'editable \n editable when onCompleted is not empty'
    ),
    component: require('doc/pages/components/Tag/example-7-editable.tsx').default,
    rawText: require('!raw-loader!doc/pages/components/Tag/example-7-editable.tsx'),
    parseTsText: require('!raw-loader!ts-loader!doc/pages/components/Tag/example-7-editable.tsx'),

  },
]

const codes = undefined

export default navable(props => (
  <MarkDown {...props} codes={codes} source={source} examples={examples} />
))
