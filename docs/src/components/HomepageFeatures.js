import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Learn',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Discover ARCHEthic, the TransactionChain, the new ARCH Consensus, 
        why it helps to build the more secure and decentralized P2P network
      </>
    ),
  },
  {
    title: 'Participate',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Join the network and use existing solutions build on ARCHEthic
      </>
    ),
  },
  {
    title: 'Build',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Access documentation and guides to build on ARCHEthic or to contribute to the core development
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
