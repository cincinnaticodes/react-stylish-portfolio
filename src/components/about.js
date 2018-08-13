import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const AboutSection = () => (
  <ScrollableAnchor id="about">
    <section className="content-section bg-light">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>
              Stylish Portfolio is the perfect theme for your next project!
            </h2>
            <p className="lead mb-5">
              This theme features a flexible, UX friendly sidebar menu and stock
              photos from our friends at
              <a href="https://unsplash.com/">Unsplash</a>!
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
