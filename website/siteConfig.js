const users = [];

const siteConfig = {
  title: 'Electron React Boilerplate',
  tagline: 'A Foundation for Scalable Cross-Platform Apps',
  // @TODO
  // url: 'https://electron-react-boilerplate.js.org',
  url: 'https://electron-react-boilerplate.github.io',
  // @TODO
  // baseUrl: '/',
  // Currently we have to use this until we move to custom domain name
  cname: 'electron-react-boilerplate.js.org',
  baseUrl: '/',
  projectName: 'site',
  organizationName: 'electron-react-boilerplate',

  headerLinks: [
    {doc: 'getting-started', label: 'Docs'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],

  users,

  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Electron React Boilerplate`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  algolia: {
    // "Search only api key". Safe to keep this public
    apiKey: '7989826be21123972626ebaacdc71b1a',
    indexName: 'electron-react-boilerplate'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Google analytics
  gaTrackingId: 'UA-127797742',

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',

  twitterImage: 'img/docusaurus.png',
  twitter: true,
  twitterUsername: 'eBoilerplate'
};

module.exports = siteConfig;
