import { useContext } from 'react'

import { Context } from '../context/context'

import { Light, Dark } from '../assets'

function Theme() {
  const { light, dark } = useContext(Context)

  return (
    <div>
      <div className='theme'>
        {/* <h2>Theme</h2> */}
        {/* <p>{theme}</p> */}
        <span
          className='light'
          onClick={() => light()}
        >
          <Light />
        </span>
        <span
          className='dark'
          onClick={() => dark()}
        >
          <Dark />
        </span>

        {/* <button onClick={() => toggleTheme()}>Toggle Theme</button> */}
      </div>
      {/* <div className='slider'>
        <span style={{ background: 'red' }}> </span>
      </div> */}
    </div>
  )
}

export default Theme
