/*
 * @Author: tears 596231290@qq.com
 * @Date: 2022-09-04 17:00:15
 * @LastEditors: tears 596231290@qq.com
 * @LastEditTime: 2022-09-04 19:31:19
 * @FilePath: /vuepress-starter/docs/.vuepress/config/sidebar/en.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { SidebarConfig4Multiple } from 'vuepress/config'
import {
  getApiSidebar,
  getGuideSidebar,
  getIntroSidebar,
  getPluginSidebar,
  getThemeSidebar
} from './shared'

export const Sidebar4EN: SidebarConfig4Multiple = {
  '/intro/': getIntroSidebar(),
  '/guide/': getGuideSidebar('Guide', 'Advanced'),
  '/plugin/': getPluginSidebar('Plugin', 'Introduction', 'Official Plugins'),
  '/theme/': getThemeSidebar('Theme', 'Introduction')
}
