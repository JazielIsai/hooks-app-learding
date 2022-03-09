
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const AboutScreen = () => {
  
  const { user, setUser } = useContext(UserContext);

  const handleOnClick = () => {
      setUser({

      });
  }

  return (
        <div>
            <h1> About Screen </h1>
            <hr/>

            <pre>
              { JSON.stringify(user, null, 3) }
            </pre>

            <button 
              class="btn btn-warning"
              onClick={ handleOnClick }
            >
                Logout
            </button>

        </div>
  );
};
