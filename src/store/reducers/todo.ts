import { ADD_TODO, DELETE_TODO } from '../actions/todoTypes';
import ITodo from '../../interfaces/ITodo';

let initialTodos: ITodo[];

let localStoreage_Todos = JSON.parse(localStorage.getItem('todos')!);

if (!localStoreage_Todos) {
    initialTodos = [];
    localStorage.setItem('todos', JSON.stringify(initialTodos));
} else {
    initialTodos = localStoreage_Todos
    localStorage.setItem('todos', JSON.stringify(initialTodos));
}


type Action = {
    type: typeof ADD_TODO,
    todo: ITodo
} | {
    type: typeof DELETE_TODO,
    id: number
}

const todoReducer = (state: ITodo[] = initialTodos, action: Action) => {
    switch (action.type) {
        case ADD_TODO:
            localStorage.setItem('todos', JSON.stringify([action.todo, ...state]));
            return [action.todo, ...state];

        case DELETE_TODO:
            const filteredTodos = state.filter(todo => todo.id !== action.id);
            localStorage.setItem('todos', JSON.stringify(filteredTodos));
            return filteredTodos;

        default:
            return state
    }
}

export default todoReducer;