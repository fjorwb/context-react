import './App.css'

import { useContext } from 'react'

// import State from './context/state'
import { Context } from './context/context'

import Counter from './components/Counter'
import Theme from './components/Theme'

const themes = {
  dark: {
    background: '#000000',
    color: '#ffffff',
  },
  light: {
    background: '#ffffff',
    color: '#000000',
  },
}

function App() {
  const { theme } = useContext(Context)

  const background = themes[theme].background
  const color = themes[theme].color

  return (
    <div
      className='App'
      style={{ background, color }}
    >
      <div className='container'>
        <Theme />
        <h1>React Context</h1>
        <Counter />
      </div>
    </div>
  )
}

export default App
