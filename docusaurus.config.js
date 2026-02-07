// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '[DD] Documentation',
  tagline: 'Official Documentation for Dice & Dragons Add-ons',
  favicon: 'img/dragon.png',

  // Set the production url of your site here
  url: 'https://cv6.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/dd-docs/',

  // GitHub pages deployment config.
  organizationName: 'cv6', 
  projectName: 'dd-docs', 

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization (i18n)
i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      de: {
        label: 'Deutsch',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/cv6/dd-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/cv6/dd-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '[DD] Docs',
        logo: {
          alt: 'Dice & Dragons Logo',
          src: 'img/dragon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Add-ons',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/cv6',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Add-ons',
            items: [
              {
                label: '[DD] Core',
                to: '/docs/core',
              },
              {
                label: '[DD] Make Connector',
                to: '/docs/make',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Support Forum',
                href: 'https://forum.dice-dragons.de',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/cv6',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dice & Dragons (cv6). Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php', 'json', 'bash'],
      },
    }),
};

export default config;