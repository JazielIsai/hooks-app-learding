import { cleanup } from '@testing-library/react';
import React, { useState, useEffect } from 'react';


function Messaje () {

    const [coords, setCoords] = useState({
        x:0,
        y:0
    });

    const { x, y } = coords;

    useEffect( () => {

        const mouseMove = (e) => {
            //console.log(e);
            const coords = {
                x: e.x,
                y: e.y
            }

            setCoords(coords);
            
        }

        window.addEventListener('mousemove', mouseMove);

        return () =>{
            window.removeEventListener('mousemove', mouseMove);
        } 
    }, [])

    return(
        <div>
            <h3> Eres Genial </h3>
        
            <p>
                x: {x} 
                y: {y}
            </p>
        </div>
    )
}


export default Messaje;