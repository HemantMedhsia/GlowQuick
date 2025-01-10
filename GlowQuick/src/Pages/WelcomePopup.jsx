import React, { useState, useEffect } from "react";
import Button1 from "../Common/Button1/Button1";

function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(true);

  // Automatically show the modal when the component mounts
  useEffect(() => {
    setIsVisible(true);

    // Close the modal after 10 seconds if not closed manually
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 100000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {/* Modal */}
      {isVisible && (
        <div
          id="YOUR_ID"
          className="fixed z-50 inset-0 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background Overlay */}
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={closeModal}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* Spacer to align modal */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            {/* Modal Content */}
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              {/* Close Button */}
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                </button>
              </div>

              {/* Modal Body */}
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    Welcome to Our Website!
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    I am currently working on both the frontend and backend portions of this project. So far, only a small part of the UI has been implemented. Due to time constraints, progress has been slower than expected. Thank you for your patience and understanding as I continue working towards delivering the best results.
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  <Button1 name={"close"} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WelcomePopup;
