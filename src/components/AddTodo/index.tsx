import React, { useState } from 'react';

// Redux
import { RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../store/actions/todo';

// Styles
import { Input, Button, Wrapper } from './AddTodo';

import ITodo from '../../interfaces/ITodo';

const AddTodo: React.FC = () => {

    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todos);

    const [todoText, setTodoText] = useState('');

    const handleAddTodo = () => {

        if (todoText === '' || null) {
            alert('Todo can not be empty')
        } else {

            const newTodo: ITodo = {
                id: todos.length + 1,
                text: todoText
            }

            dispatch(addTodo(newTodo));
            setTodoText('');
        }
    }

    return (
        <Wrapper>
            <Input type="text" onChange={(e) => setTodoText(e.target.value)} value={todoText} />
            <Button onClick={handleAddTodo}>Add</Button>
        </Wrapper>
    )
}

export default AddTodo;