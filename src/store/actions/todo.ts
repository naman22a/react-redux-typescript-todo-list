import { ADD_TODO , DELETE_TODO } from './todoTypes';
import ITodo from '../../interfaces/ITodo';

export const addTodo = (todo: ITodo) => {
    return {
        type: ADD_TODO,
        todo
    }
}

export const deleteTodo = (id: number) => {
    return {
        type: DELETE_TODO,
        id
    }
}