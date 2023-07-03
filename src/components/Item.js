import React from 'react';
import './Item.css';

const Item = (props) => {
    const name=props.name;
  return (
    <div>
        <p className='nirma'>{name}</p>
        {props.children}
    </div>
  )
}

export default Item