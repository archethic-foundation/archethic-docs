// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Archethic',
  tagline: 'Welcome to the Internet of Trust',
  url: 'https://archethic-foundation.github.io/archethic-docs',
  baseUrl: '/archethic-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'archethic-foundation', // Usually your GitHub org/user name.
  projectName: 'archethic-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',

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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false
      },
      navbar: {
        title: 'Archethic',
        logo: {
          alt: 'Archethic Logo',
          src: 'img/archethic-white2.png',
        },
        items: [
          {
            label: "Learn",
            to: "learn/archethic-intro",
            activeBaseRegex: '^/learn/.*'
          },
          {
            label: "Build",
            to: "build/smart-contracts",
            activeBaseRegex: '^/build/.*'
          },
          {
            label: "Research",
            to: "research/research-intro",
            activeBaseRegex: '^/research/.*'
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
      },
    }),
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false,
        language: "en"
      }
    ]
  ]
};

module.exports = config;
