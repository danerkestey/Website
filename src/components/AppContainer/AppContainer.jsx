import React from 'react'
import './AppContainer'

const AppContainer = ({children}) => {
    return (
        <div className="app-container">
            {children}
        </div>
    )
}

export default AppContainer;