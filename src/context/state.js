import { useState } from 'react'
import { Context } from './context'

const State = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  const [counter, setCounter] = useState(0)

  // const toggleTheme = () => {
  //   setTheme(theme === 'dark' ? 'light' : 'dark')
  // }

  const light = () => {
    setTheme('light')
  }

  const dark = () => {
    setTheme('dark')
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
    <Context.Provider value={{ counter, increment, decrement, reset, theme: [theme], light, dark }}>
      {children}
    </Context.Provider>
  )
}

export default State
