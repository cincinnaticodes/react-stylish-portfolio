import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const AboutSection = () => (
  <ScrollableAnchor id="about">
    <section className="content-section bg-light">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>WHO WE ARE</h2>
            <p className="lead mb-5">
              Professional, experienced consultants with knowledge in building,
              training and leading high-performance remote teams. Our mission at
              Remote Assured is to help you build your own high-performance team
              and win from any location. We customize training to your specific
              needs through far-reaching leadership courses, single or multi-day
              workshops, speaking, strategic advising, and our web-based
              training program.
            </p>
            <a
              className="btn btn-dark btn-xl js-scroll-trigger"
              href="#services"
            >
              What We Offer
            </a>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default AboutSection;
