import { useState } from 'react'
import { Context } from './context'

const State = ({ children }) => {
  const [isDark, setIsDark] = useState(true)
  const [counter, setCounter] = useState(0)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  const reset = () => {
    setCounter(0)
  }

  return (
    <Context.Provider value={{ counter, increment, decrement, reset, isDark, toggleTheme }}>
      {children}
    </Context.Provider>
  )
}

export default State
