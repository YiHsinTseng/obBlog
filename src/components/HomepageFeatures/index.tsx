import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_obsidiosaurus_mountain.svg').default,
    description: (
      <>
      Obsidiosaurus was designed with the goal of seamlessly combining the power of Obsidian with the the UI & UX of Docusaurus.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_obsidiosaurus_tree.svg').default,
    description: (
      <>
      Once set up, Obsidiosaurus allows you to concentrate on creating valuable content. 
      Take advantage of rich markdown features, including callouts/admonitions, quotes, and more.
      </>
    ),
  },
  {
    title: 'Cutting Edge',
    Svg: require('@site/static/img/undraw_obsidiosaurus_react.svg').default,
    description: (
      <>
      Obsidiosaurus brings together the cutting-edge static website builder for documentation sites, Docusaurus, with the exceptional file-based markdown editor, Obsidian. 
      Experience the best of both worlds.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
