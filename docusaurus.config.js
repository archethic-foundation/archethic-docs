// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Archethic',
  tagline: 'Digital sovereignty at your fingertips',
  url: 'https://wiki.archethic.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'archethic-foundation', // Usually your GitHub org/user name.
  projectName: 'archethic-docs', // Usually your repo name.
  scripts: [{ src: 'https://plausible.io/js/script.js', defer: true, 'data-domain': 'wiki.archethic.net' }],
  deploymentBranch: 'gh-pages',
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          remarkPlugins: [require('mdx-mermaid')]
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false
    },
    mermaid: {
      theme: { light: 'forest', dark: 'dark' },
    },
    navbar: {
      title: 'Archethic',
      logo: {
        alt: 'Archethic Logo',
        src: 'img/archethic-white.png',
        srcDark: 'img/archethic-black.png',
      },
      items: [
        {
          label: "Learn",
          to: "learn",
          activeBaseRegex: '^/learn/.*'
        },
        {
          label: "Participate",
          to: "category/participate",
          activeBaseRegex: '^/participate/.*'
        },
        {
          label: "Build",
          to: "category/build",
          activeBaseRegex: '^/build/.*'
        },
        {
          label: "FAQ",
          to: "category/FAQ",
          activeBaseRegex: '^/FAQ/.*'
        },
        {
          href: 'https://github.com/archethic-foundation/archethic-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'Archethic Node',
              href: 'https://github.com/archethic-foundation/archethic-node',
            },
            {
              label: 'Archethic Javascript SDK',
              href: 'https://github.com/archethic-foundation/libjs',
            },
            {
              label: 'Archethic Dart SDK',
              href: 'https://github.com/archethic-foundation/libdart',
            },
            {
              label: 'Archethic Wallet',
              href: 'https://github.com/archethic-foundation/archethic-wallet',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Archethic Foundation. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['elixir', 'json', 'dart']
    },
    imageZoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
      selector: '.markdown img',
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        margin: 24,
        background: '#BADA55',
        scrollOffset: 0,
        container: '#zoom-container',
        template: '#zoom-template',
      },
    },
  },
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false,
        language: "en"
      }
    ],
    [
      "@graphql-markdown/docusaurus",
      {
        schema: "https://mainnet.archethic.net/api",
        rootPath: "./docs/build/api",
        baseUrl: "api",
        docOptions: {
          pagination: true,
          toc: true,
          index: true
        },
        linkRoot: "/build/api",
        //homepage: "./docs/build/api.md",
        loaders: {
          UrlLoader: "@graphql-tools/url-loader"
        }
      }
    ],
    'plugin-image-zoom'
  ]
};

module.exports = config;
