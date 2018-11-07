import React from 'react';
import './Section.scss';

export default (props) => (
  <div className={"section" + (props.hover ? " hover" : "")}>
    {props.children}
  </div>
)
