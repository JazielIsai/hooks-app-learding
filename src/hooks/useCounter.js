
import { useState } from 'react';


const useCounter = (inicialState = 10) => {

    const [state, setState] = useState(inicialState);

    const increment = (factor = 1) => {
        setState(state + factor);
    }

    const decrement = (factor = 1) => {
        setState(state - factor);
    }

    const reset = () => {
        setState(inicialState);
    }

    return {
        state: state,
        increment: increment,
        decrement: decrement,
        reset: reset,
    };
}

export default useCounter;