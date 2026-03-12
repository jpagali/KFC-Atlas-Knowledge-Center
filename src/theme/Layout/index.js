import React from 'react';
import Layout from '@theme-original/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function LayoutWrapper(props) {
  const { i18n } = useDocusaurusContext();
  const isJapanese = i18n.currentLocale === 'ja-JP';

  return (
    <Layout {...props}>
      {isJapanese ? (
        <div className="locale-disclaimer" role="note" aria-label="Japanese translation notice">
          日本語コンテンツは AI 翻訳を含みます。修正が必要な場合は Enablement へメールしてください。
        </div>
      ) : null}
      {props.children}
    </Layout>
  );
}
