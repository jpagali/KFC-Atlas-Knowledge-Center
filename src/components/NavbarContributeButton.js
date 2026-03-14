import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const LABELS = {
  'en-US': 'Contribute',
  'ja-JP': '寄稿',
};

export default function NavbarContributeButton() {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const to = useBaseUrl('/contribute');

  return (
    <Link className="navbar-contribute-button" to={to}>
      <span className="navbar-contribute-button__spark" aria-hidden="true" />
      <span>{LABELS[currentLocale] ?? LABELS['en-US']}</span>
    </Link>
  );
}
