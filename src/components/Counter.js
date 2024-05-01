import { useContext } from 'react'

import { Context } from '../context/context'

function Counter() {
  const { counter, increment, decrement, reset } = useContext(Context)

  return (
    <div className='counter'>
      <h2>Counter</h2>
      <p>{counter}</p>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  )
}

export default Counter
