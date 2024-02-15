import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_URI;

export  const todoService = {

    saveTodo: async (todoData) => {
        try {
            const response = await axios.post(BASE_URL, todoData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    updateTodo: async (id, updatedTodoData) => {
        try {
            const response = await axios.put(`${BASE_URL}/${id}`, updatedTodoData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    deleteTodo: async (id) => {
        try {
            const response = await axios.delete(`${BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getTodoById: async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getAllTodos: async () => {
        try {
            const response = await axios.get(`${BASE_URL}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

