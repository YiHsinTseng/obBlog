// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'YIHSIN',
  tagline: 'Obsidian.md + Docusaurus = ❤ ',
  favicon: 'img/yihsinblog.ico',
  baseUrl: '/obBlog/',
  url: 'https://yihsintseng.github.io',
  organizationName: 'yihsintseng', 
  projectName: 'obBlog', 
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // pages: {},
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          //sidebarCollapsed: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // routeBasePath: '/',
          showLastUpdateTime: true,
          tagsBasePath: "tags",
        },
        blog: {
          showReadingTime: true,
          // routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
        trackingID: 'G-3H54V80CKQ',
        anonymizeIP: true,
      },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/obsidiosaurus-social-card.jpg',
      navbar: {
        title: 'YIHSIN',
        logo: {
          alt: 'logo',
          src: 'img/yihsinblog.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'about',
          //   position: 'left',
          //   label: 'YIHSIN',
          // },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'portfolio',
          //   position: 'left',
          //   label: 'Portfolio',
          // },
          {
            type: 'docSidebar',
            sidebarId: 'main',
            position: 'left',
            label: '筆記',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          // {to: '/release_notes', label: 'Release Notes', position: 'left'},
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/YiHsinTseng',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} YI-HSIN TSENG. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      mermaid: {
        theme: {light: 'neutral', dark: 'dark'},
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '7V0RTC8NEO',
        // Public API key: it is safe to commit it
        apiKey: 'eac54a6eb4928d08ff03a44dec6f4ade',
        indexName: 'obBlog',
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //externalUrlRegex: 'external\\.com|domain\\.com',
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        //replaceSearchResultPathname: {
        //  from: '/docs/', // or as RegExp: /\/docs\//
        //  to: '/',
        //},
        // Optional: Algolia search parameters
        searchParameters: {},
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      },
    }),

    plugins: [
      [
        '@docusaurus/plugin-content-blog',
        {
          id: 'release_notes',
          routeBasePath: 'release_notes',
          path: './release_notes__blog',
        },
      ],
      [
        '@cookbookdev/docusaurus-jsx-runtime-fallback-plugin',
        {
          alias: {
            'react/jsx-runtime': 'react/jsx-runtime.js',
          },
        },
      ],
    ],
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
    
};



module.exports = config;
