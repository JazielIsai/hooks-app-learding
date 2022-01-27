import React from "react";
import useCounter from '../../hooks/useCounter';


function CounterWithCustomHook () {

    const { state, increment, decrement, reset } = useCounter(100);

    return(
        <>
            <h2> Counter with custom hook { state } </h2>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={ () => increment(2) }
            >
                +1
            </button>
            <button
                className="btn "
                onClick={ reset }
            >
                reset
            </button>
            <button
                className="btn btn-success"
                onClick={ () => decrement(2) }
            >
                -1
            </button>        
        </>
    )

}

export default CounterWithCustomHook;