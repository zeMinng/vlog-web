// import { defineConfig } from 'vitepress'
/**
 * 见：https://emersonbottero.github.io/vitepress-plugin-mermaid/
 * 见：https://blog.csdn.net/m0_52316372/article/details/147746863
 */
import { withMermaid } from 'vitepress-plugin-mermaid'
import nav from './script/Nav'
import Sidebar from './script/Sidebar'
import search from './script/Search'
import { createVitePlugins } from '../build/vite'

export default withMermaid({
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: 'mermaid my-class', // set additional css classes for parent container
  },
  /** 以下为 VitePress 的配置 */
  lang: 'zh-CN',
  title: 'zeMing',
  description: 'vlog - 小棱镜 快速入门指南',
  // base: '/',
  // srcDir: 'src',
  // outDir: './public',  // 保证输出文件不干扰 public 目录
  cleanUrls: true, //是否启用干净的URL，例如/about代替/about.html
  locales: {
    root: { label: '简体中文' },
    // en: { label: 'English', link: 'https://vitejs.dev' },
  },
  markdown: {
    lineNumbers: true,
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/img/logo.svg' }],
    ['link', { rel: 'stylesheet', href: '/style/index.css' }],
    ['link', { rel: 'preconnect', href: 'https://2HEGWEY7SW-dsn.algolia.net' }],
    ['script', { src: '/js/baidu-analytics.js' }],
    // ['script', { src: '/js/watermark.js', defer: '' }],
  ],
  themeConfig: {
    nav, // 导航栏配置
    sidebar: Sidebar(), // 侧边栏配置
    search: {
      provider: 'algolia',
      options: {
        appId: '2HEGWEY7SW',
        apiKey: '2e4d854dceb221dedc1ecb0b397a8373',
        indexName: 'vlogxiao',
        locales: { ...search },
      },
    }, // 搜索配置
    logo: { light: '/img/logo.svg', dark: '/img/logoFFF.svg', width: 24, height: 24 },
    socialLinks: [{ icon: 'github', link: 'https://github.com/zeMinng' }],
    // 文章底部链接
    editLink: {
      // pattern: 'https://gitee.com/zeminga/vlog/tree/master/docs/:path', // 不这么做，因为查看代码太过方便，不利于文档安全性
      pattern: 'https://gitee.com/zeminga/vlog',
      text: '在gitee上编辑此页面',
    },
    footer: {
      message: '小小棱镜，无限可能 | CC BY-NC-SA 4.0 协议',
      copyright: `Copyright© 2023-${new Date().getFullYear()} zeMing`,
    },
    docFooter: { prev: '上一页', next: '下一页' }, // 自定义上一个和下一个链接上方显示的文本
    outline: [2, 4], // 设置标题的大纲深度，即显示到哪一级标题
    lastUpdated: {
      text: '更新时间',
      formatOptions: {
        dateStyle: 'short',
        // dateSty用于指定日期的样式，可选值包括 'full'、'long'、'medium' 和 'short'
        timeStyle: 'medium',
        // timeStyle用于指定时间的样式，可选值包括 'full'、'long'、'medium' 和 'short'
      },
    }, // 允许自定义最后更新文本和日期格式
    langMenuLabel: '多语言',
    returnToTopLabel: '返回顶部',
    outlineTitle: '本页目录',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '切换外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    notFound: {
      title: '',
      quote: '曾经有个页面摆在你面前你没有珍惜，直到它404了...',
      linkLabel: 'go to home',
      linkText: '回到首页',
      code: '404',
    },
  },
  vite: {
    plugins: createVitePlugins(),
    server: {
      host: true,
      open: '/',
    },
  },
})
