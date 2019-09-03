import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import './arrows.css';

const RightArrow = (props) => {
  return (
    <div className="arrow" onClick={props.action}>
      <FaAngleRight />
    </div>
  );
}

export default RightArrow;