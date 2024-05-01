import './App.css'

import { useContext } from 'react'

// import State from './context/state'
import { Context } from './context/context'

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

function App() {
  const { isDark } = useContext(Context)

  const background = isDark ? themes.dark.background : themes.light.background
  const color = isDark ? themes.dark.color : themes.light.color

  return (
    <div
      className='App'
      style={{ background, color }}
      // data-style={theme}
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
