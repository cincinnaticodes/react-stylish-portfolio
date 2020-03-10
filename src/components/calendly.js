import React from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';

class CalendlyEmbed extends React.Component {
  calendlyScriptSrc = 'https://assets.calendly.com/assets/external/widget.js'
  buildCalendlyUrl = (account, eventName) =>
    `https://calendly.com/${account}/${eventName}`

  componentDidMount() {
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.setAttribute('src', this.calendlyScriptSrc)
    head.appendChild(script)
  }

  componentWillUnmount() {
    const head = document.querySelector('head')
    const script = document.querySelector('script')
    head.removeChild(script)
  }
  render() {
    const { account, eventName } = this.props
    return (
        <section className="content-section bg-primary text-white" id="contact">
      <div id="schedule_form">
        <div
          className="calendly-inline-widget"
          data-url={this.buildCalendlyUrl(account, eventName)}
          style={{ minWidth: '480px', height: '700px' }}
        />
      </div>
      </section>
    )
  }
}

export default CalendlyEmbed