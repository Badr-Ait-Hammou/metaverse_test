// UpdateModal.js
import { useState } from 'react';

export const UpdateModal = ({ isOpen, onClose, onUpdate }) => {
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');

    const handleUpdate = () => {
        const updatedTodoData = {
            title: updatedTitle,
            description: updatedDescription,
        };
        onUpdate(updatedTodoData);
    };

    return (
        isOpen && (
            <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
                <div className="relative w-1/2 mx-auto my-6 p-8 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Update Todo</h2>
                    <label htmlFor="updatedTitle">Title:</label>
                    <input
                        type="text"
                        id="updatedTitle"
                        value={updatedTitle}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <label htmlFor="updatedDescription">Description:</label>
                    <textarea
                        id="updatedDescription"
                        value={updatedDescription}
                        onChange={(e) => setUpdatedDescription(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <button
                        onClick={handleUpdate}
                        className="mx-2  inline-flex p-2 text-white capitalize   bg-teal-400 rounded-full ">
                        Update
                    </button>
                    <button
                        onClick={onClose}
                        className="mx-2  inline-flex p-2 text-white capitalize   bg-orange-400 rounded-full ">
                        close
                    </button>
                </div>
            </div>
        )
    );
};

