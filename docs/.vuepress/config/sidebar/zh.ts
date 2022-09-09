import { SidebarConfig4Multiple } from 'vuepress/config'
import {
  getApiSidebar,
  getGuideSidebar,
  getIntroSidebar,
  getPluginSidebar,
  getThemeSidebar
} from './shared'

export const Sidebar4ZH: SidebarConfig4Multiple = {
  '/zh/intro/': getIntroSidebar(),
  '/zh/guide/': getGuideSidebar('指南', '深入'),
  '/zh/plugin/': getPluginSidebar('插件', '介绍', '官方插件'),
  '/zh/theme/': getThemeSidebar('主题', '介绍')
}

