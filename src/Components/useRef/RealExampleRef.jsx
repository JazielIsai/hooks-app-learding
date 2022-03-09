import React from 'react';
import { useState } from 'react';
import MultipleCustomHooks from '../exampleFetch/MultipleCustomHooks';
import './effects.css'

export default function RealExampleRef() {

    const [ show, setShow ] = useState(false);

    const handleOnClick = () => {
        setShow( !show );
    }

  return (
      <div>
          <h1> Real Example Ref </h1>
          <hr/>
          { show && <MultipleCustomHooks /> }

          <button
            className="btn btn-primary mt-4"
            onClick={handleOnClick}
          >
              Show/Hide
          </button>
      </div>
  );
}
