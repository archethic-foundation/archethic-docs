import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

import { useHistory } from 'react-router-dom';

const FeatureList = [
  {
    title: 'Learn',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Discover Archethic, the TransactionChain, the new ARCH Consensus,
        why it helps to build the more secure and decentralized P2P network
      </>
    ),
    link: 'learn'
  },
  {
    title: 'Participate',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Join the network and use existing solutions build on Archethic.
      </>
    ),
    link: 'category/participate'
  },
  {
    title: 'Build',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Access documentation and guides to build on Archethic or to contribute to the core development
      </>
    ),
    link: 'category/build'
  },
];

function Feature({ Svg, title, description, link }) {

  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault()
    history.push(link)
  }

  return (
    <div className={clsx('col margin-vert--md')} >
      <div className={clsx('card card--full-height card--pointer')} onClick={handleClick}>
        <div className='text--center'>
          {
            // <Svg className={styles.featureSvg} alt={title} />
          }
        </div>
        <div className={clsx('card__body padding-horiz--lg padding-bottom--lg')}>
          <h3 className='text--center'>{title}</h3>
          <p>{description}</p>
        </div>
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
