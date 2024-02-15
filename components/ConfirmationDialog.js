import React from "react";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
    return (
        isOpen && (
            <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
                {/*<div className="relative w-1/2 mx-auto my-6 p-8 bg-white rounded-lg shadow-md">*/}
                {/*    <p className="mb-4">are u sure </p>*/}
                {/*    <div className="flex justify-end">*/}
                {/*        <button*/}
                {/*            className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md"*/}
                {/*            onClick={() => {*/}
                {/*                onConfirm();*/}
                {/*                onClose();*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            Confirm*/}
                {/*        </button>*/}
                {/*        <button*/}
                {/*            className="px-4 py-2 bg-gray-400 text-white rounded-md"*/}
                {/*            onClick={onClose}*/}
                {/*        >*/}
                {/*            Cancel*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div
                    className="max-w-xs bg-gray-100 border border-gray-200 text-sm text-gray-800 rounded-lg dark:bg-white/10 dark:border-white/20 dark:text-white"
                    role="alert">
                    <div className="flex p-4">
                        Are u sure you want to delete this item ?.
                    </div>
                    <div className="flex justify-center mb-2">
                        <button
                            className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md"
                            onClick={() => {
                                onConfirm();
                                onClose();
                            }}
                        >
                            Confirm
                        </button>
                        <button
                            className="px-4 py-2 bg-gray-400 text-white rounded-md"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>


        )
    );
};

export default ConfirmationModal;
