/*
 * @Author: 41
 * @Date: 2022-05-05 08:24:23
 * @LastEditors: 41
 * @LastEditTime: 2022-05-05 10:07:58
 * @Description: 
 */
// .vuepress/config.js
module.exports = {
  title: 'Kamen-UI组件库',
  base: '/KamenUI-docs/',
  themeConfig: {
    nav: [{
      text: 'Home', link: '/'
    }, {
      text: 'Github', link: 'https://github.com/KamenRider41/KamenUI'
    }, {
      text: 'Github-docs', link: 'https://github.com/KamenRider41/KamenUI-docs'
    }, {
      text: 'Npm', link: 'https://www.npmjs.com/package/kamen-ui'
    }],
    sidebar: [
      '/',
      '/componentDocs/card'
    ]
  }
}