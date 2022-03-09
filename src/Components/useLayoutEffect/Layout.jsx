import React, { useState, useLayoutEffect, useRef } from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './effects.css';

const Layout = () => {
  
    const { state, increment, decrement } = useCounter(1)

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    // console.log(state);
                           // !! --> La doble negación significa false, una negación ( ! ) sifnifica true
                          //  && --> El doble ampeson, significa si el valor de la izquierda es true se ejecuta lo de la derecha    
    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [ boxzing, setBoszing ] = useState( {} );

    useLayoutEffect( () => {

        setBoszing( pTag.current.getBoundingClientRect() );

    }, [quote])

    // console.log(author, quote);

    return (
        <div>

            <h2> Layout Effect </h2>
            <hr/>


            <blockquote className="blockquote text-right">
                <p 
                    ref={pTag}
                    className="mb-2"
                > 
                    { quote } 
                </p>
            </blockquote>


            <button className="btn btn-primary" onClick={ () => increment(1) }>
                Next quote
            </button>

            <button className="btn btn-primary" onClick={ () => decrement(1) }>
                Back quote
            </button>

            <pre>
                {
                    JSON.stringify(boxzing, null, 3)
                }
            </pre>

        </div>
        
  );
};

export default Layout;
