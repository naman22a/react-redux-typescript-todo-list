import React from 'react';

// Redux
import { RootState } from '../../store'
import { useSelector } from 'react-redux';

// Components
import TodoItem from '../TodoItem/index';

// Styles
import { Wrapper , NoTodos } from "./TodoList";

const TodoList: React.FC = () => {

    const todos = useSelector((state: RootState) => state.todos);

    return (
        <Wrapper>
            {todos.length !== 0 && todos.map(todo => (
                todo &&
                <TodoItem todo={todo} />
            ))}
            {todos.length === 0 && 
                <NoTodos>No Todos</NoTodos>
            }
        </Wrapper>
    )
}

export default TodoList;
