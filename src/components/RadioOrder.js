import React from 'react';

export default function RadioOrder(props) {
  const { handleOrder } = props;
  return (
    <div className='control'>
      <label className='radio' htmlFor='sort'>
        <input
          type='radio'
          name='answer'
          id='sort'
          value='ASC'
          data-testid='column-sort-input'
          onChange={ (e) => handleOrder(e) }
        />
        ASC
      </label>
      <label className='radio'>
        <input
          type='radio'
          name='answer'
          id='sort'
          value='DESC'
          data-testid='column-sort-input'
          onChange={ (e) => handleOrder(e) }
        />
        DESC
      </label>
    </div>
  );
}
