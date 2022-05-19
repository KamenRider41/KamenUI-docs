/*
 * @Author: 41
 * @Date: 2022-05-05 08:24:23
 * @LastEditors: 41
 * @LastEditTime: 2022-05-10 20:45:09
 * @Description: 
 */
const sidebar = require('./sidebar')
const nav = require('./nav')
module.exports = {
  title: 'Kamen-UI组件库',
  base: '/KamenUI-docs/',
  themeConfig: {
    logo: '/test.jpg',
    nav,
    sidebar,
    lastUpdated: 'lastUpdate',
    smoothScroll: true
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/nprogress'
  ]
}