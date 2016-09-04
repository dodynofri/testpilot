import React from 'react';

import { sendToGA } from '../lib/utils';

export default class Footer extends React.Component {

  render() {
    return (
      <div id="footer-links">
        <div className="legal-links">
          <a href="https://www.mozilla.org" className="mozilla-logo"></a>
          <a data-l10n-id="footerLinkLegal" href="https://www.mozilla.org/about/legal/" className="boilerplate">Legal</a>
          <a data-l10n-id="footerLinkPrivacy" href="/privacy" className="boilerplate">Privacy</a>
          <a data-l10n-id="footerLinkTerms" href="/terms" className="boilerplate">Terms</a>
          <a data-l10n-id="footerLinkCookies" href="https://www.mozilla.org/privacy/websites/#cookies" className="boilerplate">Cookies</a>
        </div>
        <div className="social-links">
          <a onClick={(e) => this.eventToGA(e)} href="https://github.com/mozilla/testpilot"
            target="_blank" className="link-icon github" title="GitHub"></a>
          <a onClick={(e) => this.eventToGA(e)} href="https://twitter.com/FxTestPilot"
            target="_blank" className="link-icon twitter" title="Twitter"></a>
        </div>
     </div>
    );
  }

  eventToGA(e) {
    const label = e.target.getAttribute('title');
    sendToGA('event', {
      eventCategory: 'FooterView Interactions',
      eventAction: 'social link clicked',
      eventLabel: label
    });
  }

}
