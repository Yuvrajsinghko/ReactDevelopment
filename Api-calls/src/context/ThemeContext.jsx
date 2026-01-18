import React, { createContext } from 'react'

export const ThemeDataContext = createContext()
const ThemeContext = ({children}) => {
  return (
    <div>
      <ThemeDataContext.Provider value="Ragnar">
        {children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext