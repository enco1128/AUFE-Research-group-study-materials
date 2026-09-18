import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

const vitePressOptions = {
  lang: 'zh-CN',
  title: '课题组科研入门',
  description: '深度学习 / 计算机视觉 / 医学影像 AI 科研全流程入门',
  lastUpdated: true,
  base: '/Research-group-study-materials/',
  themeConfig: {
    search: { provider: 'local' },
    nav: [
      { text: '首页', link: '/' },
      { text: '导论', link: '/1-导论/1-为何做科研' },
      { text: '8周路线', link: '/7-路线图/1-八周学习路径' },
      { text: '附录', link: '/8-附录/1-资源索引' },
      {
        text: '仓库',
        link: 'https://github.com/enco1128/Research-group-study-materials'
      }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/enco1128/Research-group-study-materials'
      }
    ],
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' }
  }
}

const vitePressSidebarOptions = {
  documentRootPath: '/docs',
  collapsed: false,
  collapseDepth: 2,
  sortMenusOrderNumericallyFromTitle: true,
  removePrefixAfterOrdering: true,
  prefixSeparator: '-'
}

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions))
