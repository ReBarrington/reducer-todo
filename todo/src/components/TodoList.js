import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/reducer';
import Todo from "./Todo";

const TodoList = () => {

    // setting up state using the reducer hook:
    const [state, dispatch] = useReducer(reducer, initialState);

    // setting up initial state for new todo text:
    const [newTodoText, setNewTodoText] = useState('');

    const handleChanges = e => {
        setNewTodoText(e.target.value);
    };

    return (
        <div className='todo-list'>

            <div className='form'>
                <input 
                    className='input'
                    type='text'
                    name='newTodoText'
                    value={newTodoText}
                    onChange={handleChanges}
                />
                <button
                    onClick={() => 
                        dispatch({ type: 'UPDATE_TODO', payload: newTodoText })
                    }
                >Add New Todo</button>
                <Todo item={state.item} completed={state.completed} id={state.id}/>
            </div>
        </div>
    )


}

export default TodoList;