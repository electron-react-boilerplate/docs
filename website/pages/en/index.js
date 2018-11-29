const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

const { MarkdownBlock, GridBlock, Container } = CompLibrary;

function imgUrl(img) {
  return `${siteConfig.baseUrl}${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self'
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('logo/logo.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('installation.html', language)}>
              Try It Out
            </Button>
            <Button href={siteConfig.repoUrl}>GitHub</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}
  >
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn">
    {[
      {
        content:
          'Make changes to your app and preview the changes without having to refresh your app. Changes are made so that the state of your app is not lost.',
        image: imgUrl('logo/logo.png'),
        imageAlign: 'top',
        title: 'Faster Iteration: Hot Reloading'
      },
      {
        content:
          'Bulding scalable apps without types can only go so far. Get type errors while developing your app. Errors are thrown during compile-time and runtime',
        image: imgUrl('logo/logo.png'),
        imageAlign: 'top',
        title: 'Scalable: Incremental Typing'
      },
      {
        content:
          'Optimization and minification of code with webpack comes out of the box. This avoids running into perforamnce bottlenecks associated with traditional electron apps',
        image: imgUrl('logo/logo.png'),
        imageAlign: 'top',
        title: 'Performance: Build Optimizations'
      }
    ]}
  </Block>
);

const features = [
  {
    content:
      'Make changes to your app and preview the changes without having to refresh your app. Changes are made so that the state of your app is not lost.',
    imageAlign: 'top',
    title: 'Faster Iteration: Hot Reloading'
  },
  {
    content:
      'Bulding scalable apps without types can only go so far. Get type errors while developing your app. Errors are thrown during compile-time and runtime',
    imageAlign: 'top',
    title: 'Scalable: Incremental Typing'
  },
  {
    content:
      'Optimization and minification of code with webpack comes out of the box. This avoids running into perforamnce bottlenecks associated with traditional electron apps',
    imageAlign: 'top',
    title: 'Performance: Build Optimizations'
  }
];

const FeatureCallout = () =>
  features.map(({ title, content }, index) => (
    <Block background={index % 2 === 0 ? 'dark' : 'light'}>
      {[
        {
          content,
          title
        }
      ]}
    </Block>
  ));

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users
    .filter(user => user.pinned)
    .map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
        </div>
      </div>
    );
  }
}

module.exports = Index;
