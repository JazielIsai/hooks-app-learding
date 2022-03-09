import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import './effects.css';
import useForm from '../../hooks/useForm';

const initialState = [{
    id: new Date().getTime(),
    description: 'Aprender React',
    done: false
}]

const init = () =>{
    
    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     description: 'Aprender React',
    //     done: false
    // }]
}

const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);
    
    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) );
    }, [todos])
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if ( description.trim().length <= 1 ){
            return;
        }

        console.log('Nueva tarea')

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action )
        reset()
    }

  return (
    <div>
        <h1> TodoApp { todos.length } </h1>
        <hr/>
        
        <div className="row">

            <div className="col-7">
                <ol className = 'list-group list-group-flush'>
                    {
                        todos.map( (todo, i) => (
                            <li
                                key={todo.id}
                                className='list-group-item'
                            >
                                <p className='text-center'> { i + 1 }.  { todo.description } </p>
                                <button
                                    className="btn btn-outline"
                                >
                                    🗑️
                                </button>
                            </li>
                        ))
                    }
                </ol>
            </div>
            <div className="col-5">
                <h4> Agregar TODOs </h4>
                <hr/>
                
                <form onSubmit={ handleSubmit }>

                    <input 
                        type="text" 
                        name="description"
                        className="form-control"
                        placeholder="Aprender..."
                        autoComplete = "off"
                        value={ description }
                        onChange={ handleInputChange }
                    />

                    <button
                        type="submit"
                        className="btn btn-outline-primary mt-2 btn-block"
                    >
                        Agregar ✅
                    </button>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default TodoApp