import React from 'react';

// Redux
import { deleteTodo } from '../../store/actions/todo';
import { useDispatch } from 'react-redux';

import ITodo from '../../interfaces/ITodo';

// Styles
import { Todo , Text , DeleteBtn } from './TodoItem'

interface Props {
    todo: ITodo
}

const TodoItem: React.FC<Props> = ({ todo }) => {

    const dispatch = useDispatch();

    const handleDelete = (id: number) => {
        dispatch(deleteTodo(id));
    }

    return (
        <Todo key={todo.id}>
            <Text>{todo.text}</Text>
            <DeleteBtn onClick={() => handleDelete(todo.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </DeleteBtn>
        </Todo>
    )
}

export default TodoItem;
