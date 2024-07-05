import React, { useEffect } from 'react';
import { useBooleanContext } from '../context/context';

const Modal = ({ children, onClose }) => {
  const { toastBool } = useBooleanContext();

  useEffect(() => {
    if (toastBool) {
      onClose()
    }
  }, [toastBool])


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
