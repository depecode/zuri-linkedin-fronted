import React, {useState, useContext, useEffect } from 'react'
import { useCallback  } from 'react'

const url = 'https://the-netflix-clone.herokuapp.com/accounts/'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)





    return <AppContext.Provider value="hello">{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}