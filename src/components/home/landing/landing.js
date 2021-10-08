import PropTypes from 'prop-types';
import React from 'react';



import './landing.css';

const Landing = ({
  author,
  description,
  links,
}) => (
  <div className="bg-image"/>
  

  
);

Landing.propTypes = {
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Landing;