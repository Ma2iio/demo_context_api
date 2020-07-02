import React, { createContext, useState } from 'react'

export const AppContext = createContext({
    isClick: false,
    onClick: () => {},
})

export const AppProvider = ({ children }) => {
    const [isClick, setClick] = useState(false)
    const onClick = () => {
        setClick(true)
    }
    return <AppContext.Provider value={{
        isClick,
        onClick,
    }}>
        {children}
    </AppContext.Provider>
}

export const AppConsumer = AppContext.Consumer