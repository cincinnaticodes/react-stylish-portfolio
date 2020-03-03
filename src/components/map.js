import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const MapSection = () => (
  <ScrollableAnchor>
    <section className="map">
      <iframe
        title="where-we-are-located"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Google,+Inc.,+Market+Street,+Austin,+TX&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Google,+Inc.,+Austin,+TX&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"
      />
      <br />
    </section>
  </ScrollableAnchor>
);
export default MapSection;
