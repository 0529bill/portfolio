import React from 'react';
import './index.css';
function List({ data, id }) {
  return (
    <div className="list_bullet">
      <ul>
        <span key={id}>{data}</span>
      </ul>
    </div>
  );
}

export default List;
