import React from 'react';

// Components
import AddTodo from './components/AddTodo/index';
import TodoList from './components/TodoList/index';

const App: React.FC = () => {
    return (
        <div className='App'>
            <h1>Todo List</h1>
            <AddTodo/>
            <TodoList/>
        </div>
    )
}

export default App;
