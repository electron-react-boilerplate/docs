const users = [];

const siteConfig = {
  title: 'Electron React Boilerplate',
  tagline: 'A Foundation for Scalable Cross-Platform Apps',
  url: 'https://electron-react-boilerplate.js.org',
  cname: 'electron-react-boilerplate.js.org',
  baseUrl: '/',
  projectName: 'site',
  organizationName: 'electron-react-boilerplate',
  repoUrl:
    'https://github.com/electron-react-boilerplate/electron-react-boilerplate',

  headerLinks: [
    { doc: 'installation', label: 'Docs' },
    { doc: 'app-showcase', label: 'Showcase' },
    {
      href:
        'http://github.com/electron-react-boilerplate/examples#table-of-contents',
      label: 'Examples'
    },
    { page: 'help', label: 'Help' },
    { blog: true, label: 'Blog' }
  ],

  users,

  headerIcon: 'logo/logo.svg',
  footerIcon: 'logo/logo.svg',
  favicon: 'logo/logo.png',

  /* Colors for website */
  colors: {
    primaryColor: '#292929',
    secondaryColor: '#205C3B'
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Electron React Boilerplate`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'tomorrow'
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
  gaTrackingId: 'UA-127797742-1',

  // Open Graph and Twitter card images.
  ogImage: 'logo/logo.png',

  twitterImage: 'logo/logo.png',
  twitter: true,
  twitterUsername: 'eBoilerplate'
};

module.exports = siteConfig;
