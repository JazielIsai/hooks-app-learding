import React, { useState } from "react";
import './counter.css';

function CounterApp(){

    const [ state , setState] = useState( {
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    } );

    const { counter1, counter2 } = state;
 
    const handleOnClick = () => {
        setState( {
            ...state,
            counter1: counter1 + 1
        })

        //Opcion de poder dejar los valores como estan
        // setState( ( els ) => {
        //     return {
        //         ...els,
        //         counter1: counter1 + 1, 
        //     };
        // });
    }

    return(
        <>
            <h1> Counter { counter1 } </h1>
            <h1> Counter { counter2 } </h1>

            <hr/>

            <button 
                className="btn btn-primary"
                onClick = { handleOnClick }
            >
                +1
            </button>

        </>
    )
}

export default CounterApp;