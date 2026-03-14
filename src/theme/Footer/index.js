import React from 'react';
import Footer from '@theme-original/Footer';
import FooterContributeCTA from '@site/src/components/FooterContributeCTA';

export default function FooterWrapper(props) {
  return (
    <div className="footer-secret-shell">
      <FooterContributeCTA />
      <Footer {...props} />
    </div>
  );
}
