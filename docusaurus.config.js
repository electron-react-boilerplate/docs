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
        { to: 'docs/roadmap', label: 'Roadmap' },
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
        { blog: true, label: 'Blog' }
      ]
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/installation'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Showcase',
              to: 'docs/app-showcase'
            },
            {
              label: 'Community Chat',
              to: 'https://spectrum.chat/electron-react-blpt'
            },
            {
              label: 'Twitter',
              to: 'https://twitter.com/eBoilerplate'
            },
            {
              label: 'Blog',
              to: 'blog'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              to:
                'https://github.com/electron-react-boilerplate/electron-react-boilerplate'
            }
          ]
        }
      ],
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
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        googleAnalytics: {
          trackingID: 'UA-127797742-1'
        }
      }
    ]
  ]
};
