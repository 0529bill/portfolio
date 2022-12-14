import './index.css';

import React from 'react';

function Spinner({ load }) {
  // return <div className={true ? 'spinner' : null}></div>;
  return (
    <div className={true ? 'lds-roller' : null}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Spinner;
