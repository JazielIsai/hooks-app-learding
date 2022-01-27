import { useState, useEffect } from 'react';

const useForm = ( inicialState = {} ) => { 

    const [ values, setValues ] = useState(inicialState);

    const handleInputChange = ( {target} ) =>{
        setValues({
            ...values,
            [target.name]: target.value
        })
    }


    return [ values, handleInputChange ];

}   

export default useForm;