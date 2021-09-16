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
            <DeleteBtn onClick={() => handleDelete(todo.id)}>Delete</DeleteBtn>
        </Todo>
    )
}

export default TodoItem;
