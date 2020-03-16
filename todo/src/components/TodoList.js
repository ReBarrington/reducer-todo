import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/reducer';
import '../App.css';

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
                    onClick={() => {
                        dispatch({ type: 'NEW_TODO', payload: newTodoText })
                        setNewTodoText('');
                    }}
                >Add New Todo</button>

                <button 
                    onClick={() => {
                        dispatch({ type: 'CLEAR_COMPLETED' })
                    }}
                >Clear Completed</button>

                {state.map((note, index) => (
                    <div 
                        // className={`note${note.completed ? " completed" : ""}`}
                        key={note.id}
                        onClick={() => {
                            dispatch({ type: 'TOGGLE_COMPLETE', index: index })
                        }}
                    >
                        <h3>{note.item}</h3>
                    </div>
                ))}

            </div>
        </div>
    )


}

export default TodoList;