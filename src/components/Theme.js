import { useContext } from 'react'

import { Context } from '../context/context'

import { Light, Dark } from '../assets'

function Theme() {
  const { toggleTheme } = useContext(Context)

  return (
    <div>
      <div className='theme'>
        <span
          className='light'
          onClick={() => toggleTheme()}
        >
          <Light />
        </span>
        <span
          className='dark'
          onClick={() => toggleTheme()}
        >
          <Dark />
        </span>
      </div>
    </div>
  )
}

export default Theme
