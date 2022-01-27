import React, { useRef } from 'react';
import './effects.css';

function FocusScreen() {

    const inputRef = useRef();
    
    const handleOnClick = () => {
        inputRef.current.select();
    }
  
  
    return (
      <>
        <h1> Focus Screen </h1>
        <hr/>

        <input 
            ref = { inputRef }
            className = "form-control"
            placeholder = "Your Name"
        
        />

        <button 
            className="btn btn-outline-primary mt-2"
            onClick = {handleOnClick}
        >
            Focus 
        </button>

      </>
  );
}

export default FocusScreen;
