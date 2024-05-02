import React from 'react'
// import useLocalStorage from 'use-local-storage'

import './App.css'

import { useContext } from 'react'
// import State from './context/state'
import { Context } from './context/context'

// import { ToggleTheme } from './components/ToggleTheme'

import Counter from './components/Counter'
import Theme from './components/Theme'

const themes = {
  dark: {
    background: '#000000',
    color: '#FFFFFF',
  },
  light: {
    background: '#FFFFFF',
    color: '#000000',
  },
}

export function App() {
  const { isDark } = useContext(Context)
  // const preference = window.matchMedia('(prefers-color-scheme: dark)').matches
  // const [isDark, setIsDark] = useLocalStorage('isDark', preference || false)

  const background = isDark ? themes.dark.background : themes.light.background
  const color = isDark ? themes.dark.color : themes.light.color

  return (
    <div
      className='App'
      data-theme={isDark ? 'dark' : 'light'}
      style={{ background, color }}
    >
      <div className='container'>
        <Theme />
        {/* <ToggleTheme
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)}
        /> */}
        <h1>React Context</h1>
        <Counter />
      </div>
    </div>
  )
}

export default App
