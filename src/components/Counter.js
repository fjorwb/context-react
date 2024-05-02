import { useContext } from 'react'

import { Context } from '../context/context'

function Counter() {
  const { counter, increment, decrement, reset } = useContext(Context)

  return (
    <div className='counter'>
      <h2>Counter</h2>
      <p>{counter}</p>
      <div className='buttons-container'>
        <button
          className='btn'
          onClick={() => increment()}
        >
          +
        </button>
        <button
          className='btn'
          onClick={() => decrement()}
        >
          -
        </button>
        <button
          className='btn'
          onClick={() => reset()}
        >
          reset
        </button>
      </div>
    </div>
  )
}

export default Counter
