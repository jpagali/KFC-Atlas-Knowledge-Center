import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const COPY = {
  'en-US': {
    eyebrow: 'The 12th Secret',
    title: 'Contribute to the Knowledge Center',
    body: 'Share the next playbook, guide, or process your team should know.',
    cta: 'Open the Studio',
  },
  'ja-JP': {
    eyebrow: '12番目のシークレット',
    title: 'Knowledge Center に寄稿する',
    body: '次にチームへ共有したい手順書、ガイド、プレイブックを追加しましょう。',
    cta: 'Studio を開く',
  },
};

export default function FooterContributeCTA() {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const content = COPY[currentLocale] ?? COPY['en-US'];
  const to = useBaseUrl('/contribute');

  return (
    <section className="footer-contribute-cta" aria-label={content.eyebrow}>
      <div className="footer-contribute-cta__content">
        <p className="footer-contribute-cta__eyebrow">{content.eyebrow}</p>
        <h2 className="footer-contribute-cta__title">{content.title}</h2>
        <p className="footer-contribute-cta__body">{content.body}</p>
      </div>
      <Link className="footer-contribute-cta__button" to={to}>
        {content.cta}
      </Link>
    </section>
  );
}
