import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
const portfolioItems = [
  {
    imgSrc: "./img/portfolio-1.jpg",
    heading: "Stationary",
    description: "A yellow pencil with envelopes on a clean, blue backdrop!"
  },
  {
    imgSrc: "./img/portfolio-2.jpg",
    heading: "Ice Cream",
    description:
      "A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!"
  },
  {
    imgSrc: "./img/portfolio-3.jpg",
    heading: "Strawberries",
    description:
      "Strawberries are such a tasty snack, especially with a little sugar on top!"
  },
  {
    imgSrc: "./img/portfolio-4.jpg",
    heading: "Workspace",
    description:
      "A yellow workspace with some scissors, pencils, and other objects."
  }
];
const PortfolioSection = () => (
  <ScrollableAnchor id="portfolio">
    <section className="content-section">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Portfolio</h3>
          <h2 className="mb-5">Recent Projects</h2>
        </div>
        <div className="row no-gutters">
          {portfolioItems.map((project, index) => (
            <div className="col-lg-6" key={`portfolio_item_${index}`}>
              <a className="portfolio-item" href="">
                <span className="caption">
                  <span className="caption-content">
                    <h2>{project.heading}</h2>
                    <p className="mb-0">{project.description}</p>
                  </span>
                </span>
                <img className="img-fluid" src={project.imgSrc} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default PortfolioSection;
