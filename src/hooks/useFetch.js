import { useEffect, useState, useRef } from "react";


const useFetch = ( url ) =>{

    //Cuanto es true es que esta montado, o esta vivo 
    const isMounted = useRef(true);

    const [state, setState] = useState( {
        data: null,
        loading: true,
        error: null
    } );

    useEffect( ()=> {

        return () => { //Si el componente deja de estar montado o se cancela el proceso, para que no nos marque error, lo vamos a poner en falso, diciendo que no esta montado
            isMounted.current = false;
        }
    }, [])

    useEffect( ()=> {

        setState( { 
            data: null,
            loading: true,
            error: null
        } )

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                //Si esta montado (true) entonces seguimos solicitando los datos
                if( isMounted.current ){
                    setState({
                        loading: false,
                        error: null,
                        data: data
                    });
                }

            })
            .catch( e => console.log(e) )

    }, [url] )

    return state;

}

export default useFetch;