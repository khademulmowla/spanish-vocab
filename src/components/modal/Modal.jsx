import React from 'react';

const Modal = ({ modalData }) => {

    return (
        <div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box rounded-lg shadow-xl bg-gradient-to-r from-blue-100 via-sky-100 to-teal-100">
                    {modalData ? (
                        <>
                            <h3 className="font-bold text-2xl text-blue-900 mb-4">{modalData.word}</h3>
                            <div className="space-y-3 text-gray-700">
                                <p>
                                    <strong className="text-gray-900">Meaning:</strong> {modalData.meaning}
                                </p>
                                <p>
                                    <strong className="text-gray-900">When to Say:</strong> {modalData.when_to_say}
                                </p>
                                <p>
                                    <strong className="text-gray-900">Example:</strong>
                                    <span className="italic text-gray-800"> "{modalData.example}"</span>
                                </p>
                            </div>
                        </>
                    ) : (
                        <p className="text-center text-gray-500">Loading...</p>
                    )}

                    <div className="modal-action mt-6 flex justify-end">
                        <form method="dialog">
                            <button className="btn bg-blue-900 hover:bg-teal-600 text-white rounded-lg px-4 py-2 shadow-md">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Modal;