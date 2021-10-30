module.exports = {
  title: "Electron React Boilerplate",
  tagline: "A Foundation for Scalable Cross-Platform Apps",
  url: "https://electron-react-boilerplate.js.org/",
  baseUrl: "/",
  favicon: "logo/logo.png",
  organizationName: "electron-react-boilerplate",
  projectName: "site",
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    hideOnScroll: true,
    navbar: {
      title: "Electron React Boilerplate",
      logo: {
        alt: "ERB Logo",
        src: "logo/logo.png",
      },
      items: [
        { to: "docs/installation", label: "Docs", position: "left" },
        { to: "docs/app-showcase", label: "Showcase", position: "left" },
        { to: "docs/roadmap", label: "Roadmap", position: "left" },
        {
          position: "left",
          href: "http://github.com/electron-react-boilerplate/examples#table-of-contents",
          label: "Examples",
        },
        {
          position: "left",
          href: "http://github.com/electron-react-boilerplate/electron-react-boilerplate",
          label: "GitHub",
        },
        {
          position: "left",
          href: "https://opencollective.com/electron-react-boilerplate-594",
          label: "Donate",
        },
        { to: "blog", label: "Blog" },
      ],
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/installation",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Showcase",
              to: "docs/app-showcase",
            },
            {
              label: "Community Chat",
              to: "https://spectrum.chat/electron-react-blpt",
            },
            {
              label: "Twitter",
              to: "https://twitter.com/eBoilerplate",
            },
            {
              label: "Blog",
              to: "blog",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              to: "https://github.com/electron-react-boilerplate/electron-react-boilerplate",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Electron React Boilerplate`,
    },
    algolia: {
      // "Search only api key". Safe to keep this public
      apiKey: "7989826be21123972626ebaacdc71b1a",
      indexName: "electron-react-boilerplate",
    },
    googleAnalytics: {
      trackingID: "UA-127797742-1",
    },
    gtag: {
      trackingID: "UA-127797742-1",
    },
  },
  scripts: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
      async: true,
    },
    "/js/ads.js",
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/electron-react-boilerplate/site/edit/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
