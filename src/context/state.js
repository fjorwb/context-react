import { useState } from 'react'
// import useLocalStorage from 'use-local-storage'
import { Context } from './context'

const State = ({ children }) => {
  // const preference = window.matchMedia('(prefers-color-scheme: dark)').matches
  // const [isDark, setIsDark] = useLocalStorage('isDark', preference)

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
