import React from 'react';

const Header = () => (
  <header className="masthead d-flex">
    <div className="container text-center my-auto">
      <h1 className="mb-1">Remote Assured</h1>
      <h3 className="mb-5">
        <em>Keeping your business moving while you're out of the office.</em>
      </h3>
      <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">
        Find Out More
      </a>
    </div>
    <div className="overlay" />
  </header>
);
export default Header;
