import React, { createContext, useState, useContext } from 'react';

// Create the context
const BooleanContext = createContext();

// Create a custom hook to use the BooleanContext
export const useBooleanContext = () => {
    return useContext(BooleanContext);
};

// Create the provider component
export const BooleanProvider = ({ children }) => {
    const [toastBool, setToastBool] = useState(false)

    return (
        <BooleanContext.Provider value={{
            toastBool,setToastBool,
        }}>
            {/* <BooleanContext.Provider value={{ boolPopPhone, setBoolPopPhone, toggleBoolPopPhone }}> */}
            {children}
        </BooleanContext.Provider>
    );
};
