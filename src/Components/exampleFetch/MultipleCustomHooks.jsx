import React from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './effects.css';

const MultipleCustomHooks = () => {
  
    const { state, increment, decrement } = useCounter(1)

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    // console.log(state);
                           // !! --> La doble negación significa false, una negación ( ! ) sifnifica true
                          //  && --> El doble ampeson, significa si el valor de la izquierda es true se ejecuta lo de la derecha    
    const { author, quote } = !!data && data[0];

    // console.log(author, quote);

    return (
        <div>

            <h2> Breaking Bad Quotes </h2>
            <hr/>

            {

                loading 
                ?
                    (

                        <div className="alert alert-info text-center">
                            Loading...
                        </div>

                    )
                :
                    (

                        <blockquote className="blockquote text-right">
                            <p className="mb-2"> { quote } </p>
                            <footer className="blockquote-footer"> { author } </footer>
                        </blockquote>

                    )

            }

            <button className="btn btn-primary" onClick={ () => increment(1) }>
                Next quote
            </button>

            <button className="btn btn-primary" onClick={ () => decrement(1) }>
                Back quote
            </button>

        </div>
        
  );
};

export default MultipleCustomHooks;
