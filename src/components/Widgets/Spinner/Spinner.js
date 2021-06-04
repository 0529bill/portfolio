import React from 'react';
import './index.css';
function Spinner({ load }) {
  return <div className={load ? 'spinner' : null}></div>;
}

export default Spinner;
