import React from 'react';
import './index.css';
function Spinner({ load }) {
  console.log('props.load', load);
  return <div className={load ? 'spinner' : null}></div>;
}

export default Spinner;
