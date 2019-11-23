module.exports = {
  title: 'Electron React Boilerplate',
  tagline: 'A Foundation for Scalable Cross-Platform Apps',
  url: 'https://electron-react-boilerplate.js.org/',
  baseUrl: '/',
  favicon: 'logo/logo.png',
  organizationName: 'electron-react-boilerplate', // Usually your GitHub org/user name.
  projectName: 'site', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Electron React Boilerplate',
      logo: {
        alt: 'ERB Logo',
        src: 'logo/logo.png'
      },
      links: [
        { to: 'docs/installation', label: 'Docs' },
        { to: 'docs/app-showcase', label: 'Showcase' },
        {
          href:
            'http://github.com/electron-react-boilerplate/examples#table-of-contents',
          label: 'Examples'
        },
        {
          href:
            'http://github.com/electron-react-boilerplate/electron-react-boilerplate',
          label: 'GitHub'
        },
        {
          href: 'https://opencollective.com/electron-react-boilerplate-594',
          label: 'Donate'
        },
        { page: 'help', label: 'Help' },
        { blog: true, label: 'Blog' }
      ]
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Getting Started',
      //         to: 'getting-started'
      //       },
      //       {
      //         label: 'Examples',
      //         url: 'https://github.com/neon-bindings/examples'
      //       },
      //       {
      //         label: 'API Reference',
      //         to: 'https://neon-bindings.com/api/neon/index.html'
      //       }
      //     ]
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Community Chat',
      //         url: 'https://rust-bindings-slackin.herokuapp.com'
      //       },
      //       {
      //         label: 'Twitter',
      //         to: 'https://twitter.com/rustneon'
      //       }
      //     ]
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'GitHub',
      //         to: 'https://github.com/neon-bindings/neon'
      //       }
      //     ]
      //   }
      // ],
      logo: {
        alt: 'ERB Logo',
        src: 'logo/logo.svg'
      },
      copyright: `Copyright © ${new Date().getFullYear()} Electron React Boilerplate`
    },

    algolia: {
      // "Search only api key". Safe to keep this public
      apiKey: '7989826be21123972626ebaacdc71b1a',
      indexName: 'electron-react-boilerplate'
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        googleAnalytics: {
          trackingID: 'UA-127797742-1'
        }
      }
    ]
  ]
};
