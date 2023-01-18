import Modal from 'react-modal';
import '../index.css'
import React from "react";

function PopupMessageBox({onClose,prop}) {
    console.log("Opening...")
    return (
        <Modal
            isOpen={true}
            onRequestClose={onClose}
            ariaHideApp={false}
            hasBackdrop={false}
            className="mymodal"
            overlayClassName="myoverlay"
            closeTimeoutMS={500}
        >
            <div className="modal-content bg-white rounded-md shadow-md p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
                <h2 className="text-2xl font-bold mb-4">Confirmation</h2>
                <p className="text-gray-700 mb-2">Are you sure you want to choose {prop.topic_title}?</p>
                <div className="flex mt-4 gap-x-4">
                    <button
                        onClick={() => onClose(false)}
                        className="btn btn-gray feedback-card font-poppins"
                    >
                        Close
                    </button>

                    <button
                        onClick={() => onClose(true)}
                        className="btn btn-gray feedback-card font-poppins"
                    >
                        Ok
                    </button>
                </div>
            </div>
        </Modal>


    );
}

export default PopupMessageBox;