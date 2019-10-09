import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className='button'
        onClick={() => {
          props.remove(props.feature);
        }}>
        {' '}
        ☓
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AddedFeature;
