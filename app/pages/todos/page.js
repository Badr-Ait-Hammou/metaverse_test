"use client";
import {useEffect, useState} from "react";
import {todoService} from "@/app/service/todoService";
import {Button} from "primereact/button";
import {AddModal} from "@/app/components/AddModal";
import {UpdateModal} from "@/app/components/UpdateModal";

export default function Todos() {
    const [todos, setTodos] = useState([]);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const loadData = async () => {
        try {
            const allTodos = await todoService.getAllTodos();
            setTodos(allTodos.todos || []);
            console.log("data",allTodos);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {

        loadData();
    }, []);


    const formatCreatedAt = (createdAt) => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        };
        const formattedDate = new Date(createdAt).toLocaleDateString('en-US', options);
        return formattedDate;
    };




    const handleDeleteClick = async (id) => {
        try {
            await todoService.deleteTodo(id);
            loadData();
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdateClick = (todo) => {
        setSelectedTodo(todo);
        setIsUpdateModalOpen(true);
    };

    const handleAddClick = () => {
        setSelectedTodo(null);
        setIsAddModalOpen(true);
    };
    const handleAddClickClose = () => {
        setSelectedTodo(null);
        setIsAddModalOpen(false);
    };

    const handleUpdateModalClose = () => {
        setIsUpdateModalOpen(false);
        setSelectedTodo(null);
    };




    const updateTodo = async (updatedTodoData) => {
        try {
            await todoService.updateTodo(selectedTodo._id, updatedTodoData);
            loadData();
            handleUpdateModalClose();
        } catch (error) {
            console.log(error);
        }
    };

    const addTodo = async (newTodoData) => {
        try {
            const addedTodo = await todoService.saveTodo(newTodoData);
            loadData();
            console.log('Todo added:', addedTodo);
            handleAddClickClose();
        } catch (error) {
            console.log(error);
        }
    };

    const renderTodoItem = (todo) => (
        <div key={todo._id} className="w-full">
            <div className="w-full  p-3  rounded-lg ">
                <div className="p-8 shadow-md space-y-3 bg-white border-2 border-blue-400 dark:border-blue-300 rounded-xl">

                    <h1 className="text-3xl font-bold text-black capitalize ">{todo.title}</h1>
                    <h1 className="text-xl font-bold text-black capitalize ">{todo.description}</h1>

                    <p className="text-gray-500 dark:text-gray-300">{formatCreatedAt(todo.createdAt)}</p>

                    <div >
                    <button
                        onClick={() => handleDeleteClick(todo._id)}
                        className="inline-flex p-2 mt-5 text-red-500 capitalize transition-colors duration-200 transform bg-red-100 rounded-full dark:bg-red-500 dark:text-white  hover:text-white dark:hover:text-white">
                       delete
                    </button>

                    <button
                        onClick={() => handleUpdateClick(todo)}
                        className=" mx-2 inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white  hover:text-white dark:hover:text-white">
                        update
                    </button>
                    </div>

                </div>
            </div>
        </div>
    );

    return (
        <section className="bg-white">
            <div className="bg-gray-200 p-4 m-4 text-white  rounded-2xl  flex justify-between items-center">
                <h1 className="text-2xl text-black font-bold">TODO_LIST</h1>
                <button className="px-4 py-2 bg-teal-500 rounded-md text-white"  onClick={() => handleAddClick()}>Add</button>
            </div>

            <div className=" px-6 py-10 mx-auto  ">
                <div
                    className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                    {Array.isArray(todos) && todos.length > 0 ? (
                        todos.map(renderTodoItem)
                    ) : (
                        Array.from({length: 4}).map((_, index) => (
                            <div className="w-full animate-pulse" key={index}>
                                <div className="w-full h-56 bg-gray-300 rounded-lg dark:bg-gray-200"></div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <UpdateModal
                isOpen={isUpdateModalOpen}
                onClose={() => setIsUpdateModalOpen(false)}
                onUpdate={(updatedTodoData) => {
                    updateTodo(updatedTodoData).then(r => console.log("done"));
                }}
            />

            <AddModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onAdd={(newTodoData) => {
                    // Handle add logic
                    addTodo(newTodoData);
                }}
            />
        </section>
    );
}
