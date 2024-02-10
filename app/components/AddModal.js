import { useState } from 'react';

export const AddModal = ({ isOpen, onClose, onAdd }) => {
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleAdd = () => {
        const newTodoData = {
            title: newTitle,
            description: newDescription,
        };
        onAdd(newTodoData);
    };

    return (
        isOpen && (
            <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
                <div className="relative w-1/2 mx-auto my-6 p-8 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Add Todo</h2>
                    <label htmlFor="newTitle">Title:</label>
                    <input
                        type="text"
                        id="newTitle"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <label htmlFor="newDescription">Description:</label>
                    <textarea
                        id="newDescription"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />

                    <button
                        onClick={handleAdd}
                        className="  inline-flex p-1 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white  hover:text-white dark:hover:text-white">
                        Add
                    </button>
                    <button
                        onClick={onClose}
                        className="mx-2 inline-flex p-1 mt-5 text-red-500 capitalize transition-colors duration-200 transform bg-red-100 rounded-full dark:bg-red-500 dark:text-white  hover:text-white dark:hover:text-white">
                        close
                    </button>
                </div>
            </div>
        )
    );
};

