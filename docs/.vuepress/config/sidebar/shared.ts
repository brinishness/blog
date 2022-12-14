import { SidebarConfigArray } from 'vuepress/config'

export function getPluginSidebar(
  pluginTitle: string,
  pluginIntro: string,
  officialPluginTitle: string
): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: pluginTitle,
      collapsable: false,
      children: [
        ['', pluginIntro],
        'using-a-plugin',
        'writing-a-plugin',
        'life-cycle',
        'option-api',
        'context-api'
      ]
    },
    {
      title: officialPluginTitle,
      collapsable: false,
    }
  ]
  return sidebar
}

export function getThemeSidebar(
  groupA: string,
  introductionA: string
): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['', introductionA],
        'using-a-theme',
        'writing-a-theme',
        'option-api',
        'default-theme-config',
        'blog-theme',
        'inheritance'
      ]
    }
  ]
  return sidebar
}

export function getApiSidebar(): SidebarConfigArray {
  // return ['cli', 'node']
  return ['intro', 'intro1', 'intro2']
}

export function getIntroSidebar(): SidebarConfigArray {
  // return ['cli', 'node']
  const sidebar: SidebarConfigArray = [
    {
      title: "介绍",
      collapsable: false,
      children: [
        '',
        'intro',
        'intro1',
        'intro2'
      ]
    }
  ]
  return sidebar;
}


export function getGuideSidebar(groupA, groupB): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'directory-structure',
        'basic-config',
        'typescript-as-config',
        'assets',
        'markdown',
        'using-vue',
        'i18n',
        'deploy'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'frontmatter',
        'permalinks',
        'markdown-slot',
        'global-computed'
      ]
    }
  ]

  return sidebar
}
