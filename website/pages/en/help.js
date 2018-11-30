const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

const { Container, GridBlock } = CompLibrary;
const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

class Help extends React.Component {
  render() {
    const language = this.props.language || '';
    const supportLinks = [
      {
        title: 'Browse Docs',
        content: `Learn more using the [documentation on this site.](${docUrl(
          'doc1.html',
          language
        )})`
      },
      {
        title: 'Join the community',
        content:
          'Ask questions about the documentation and project [on Gitter](https://gitter.im/electron-react-boilerplate/Lobby)'
      },
      {
        title: 'Stay up to date',
        content: "Find out what's new with this project"
      }
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Need help?</h1>
            </header>
            <p>This project is maintained by a dedicated group of people.</p>
            <GridBlock contents={supportLinks} layout="threeColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Help;
