import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import './arrows.css';

const LeftArrow = (props) => {
  return (
    <div className="arrow" onClick={props.action}>
      <FaAngleLeft />
    </div>
  );
}

export default LeftArrow;