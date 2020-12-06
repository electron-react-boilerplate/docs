import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Faster Iteration: Hot Reloading</>,
    description: (
      <>
        Make changes to your app and preview the changes without having to
        refresh your app. Changes are made so that the state of your app is not
        lost.
      </>
    ),
  },
  {
    title: <>Scalable: Incremental Typing</>,
    description: (
      <>
        Bulding scalable apps without types can only go so far. Get type errors
        while developing your app. Errors are thrown during compile-time and
        runtime
      </>
    ),
  },
  {
    title: <>Performance: Build Optimizations</>,
    description: (
      <>
        Optimization and minification of code with webpack comes out of the box.
        This avoids running into performance bottlenecks associated with
        traditional electron apps
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames("button button--lg", styles.getStarted)}
              to={useBaseUrl("docs/installation")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props) => (
                  <Feature key={props.title} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
