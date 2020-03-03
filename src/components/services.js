import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
const ServicesOffered = [
  {
    title: 'Leadership Development',
    description:
      'Problem solving sessions with consultants where client problems and challenges are presented, solutions developed, and implementation programs created by tapping into the collective knowledge and experience of our team.',
    icon: 'icon-screen-smartphone'
  },
  {
    title: 'Employee Training',
    description:
      'Our Employee Training Exercises are highly-customizable, hands-on, real world training on Accountability Principles. Our clients are put in relevant, challenging, and unfamiliar situations that bring to purpose to working remotely from home.',
    icon: 'icon-pencil'
  },
  {
    title: 'Workshops',
    description:
      'Workshops vary greatly based on client objectives, duration, number of attendees, and type of engagement. We work with each client to build a program tailored to their needs, identifying the key concepts and principles for each specific group of attendees.',
    icon: 'icon-like'
  },
  {
    title: 'Technology',
    description:
      'Deep dive into Extreme Ownership leadership principles that clearly outline the behaviors and mindsets of the best leaders and teams. Test your ability to apply these principles through interactive scenarios that cover common business challenges.',
    icon: 'icon-mustache'
  }
];
const ServicesSections = () => (
  <ScrollableAnchor id="services">
    <section className="content-section bg-primary text-white text-center">
      <div className="container">
        <div className="content-section-heading">
          <h3 className="text-secondary mb-0">Services</h3>
          <h2 className="mb-5">What We Offer</h2>
        </div>
        <div className="row">
          {ServicesOffered.map((service, index) => (
            <div
              className="col-lg-3 col-md-6 mb-5 mb-lg-0"
              key={`service_${index}`}
            >
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className={service.icon} />
              </span>
              <h4>
                <strong>{service.title}</strong>
              </h4>
              <p className="text-faded mb-0">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);
export default ServicesSections;
