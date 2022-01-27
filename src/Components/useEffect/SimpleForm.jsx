import React, { useState, useEffect } from 'react';
import Messaje from './Message';
import './effects.css';

function SimpleForm(){

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;


    useEffect( () => {
        // console.log('hey');
    }, [] );

    useEffect( () => {
        // console.log('formState cambio');
    }, [formState] );

    useEffect( () => {
        // console.log('E-mail cambio');
    }, [email] );

    const handleOnChange = ( { target } ) => {
        // console.log(target.name);
        // console.log(target.value);

        setFormState({
            ...formState,
            [target.name]: target.value,
        })
    }
 

    return(
        <>
            <h1> useEffect </h1>
            <hr/>

            <div className="form-group">
                <input 
                    type = "text"
                    name = "name"
                    className="form-control"
                    placeholder = "Your Name"
                    autoComplete = "off"
                    value = {name}
                    onChange = { handleOnChange }
                />
            </div>    

            <div className="form-group">
                <input 
                    type = "text"
                    name = "email"
                    className="form-control"
                    placeholder = "Your E-mail"
                    autoComplete = "off"
                    value = { email }
                    onChange = { handleOnChange }
                />
            </div>    

            { (name === '123') && <Messaje /> }
        </>
    )
}

export default SimpleForm;