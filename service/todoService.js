import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_URI;

export  const todoService = {

    saveTodo: async (todoData) => {
        try {
            const response = await axios.post(`${BASE_URL}/todos`, todoData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    updateTodo: async (id, updatedTodoData) => {
        try {
            const response = await axios.put(`${BASE_URL}/todos/${id}`, updatedTodoData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    deleteTodo: async (id) => {
        try {
            const response = await axios.delete(`${BASE_URL}/todos/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getTodoById: async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/todos/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getAllTodos: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/todos`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

