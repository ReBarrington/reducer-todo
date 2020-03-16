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
                    onClick={() => {
                        dispatch({ type: 'NEW_TODO', payload: newTodoText })
                        console.log(state, ' state')
                    }}
                >Add New Todo</button>
                {state.map(note => (
                      <Todo item={note.item} completed={note.completed} id={note.id}/>
                ))}
            </div>
        </div>
    )


}

export default TodoList;