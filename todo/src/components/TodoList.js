import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/reducer';
import { useState, useReducer } from 'react';
import Todo from "./Todo";

const TodoList = () => {

    // setting up state using the reducer hook:
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='todo-list'>
            <Todo />
        </div>
    )


}

export default TodoList;