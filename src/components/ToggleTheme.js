// import './Toggle.css'

import { Light, Dark } from '../assets'

export const ToggleTheme = ({ handleChange, isChecked }) => {
  return (
    <div className='toggle-container'>
      <Light />
      <input
        type='checkbox'
        id='check'
        className='toggle'
        onChange={handleChange}
        checked={isChecked}
      />
      <Dark />
      <label htmlFor='check'>Dark Mode</label>
    </div>
  )
}

export default ToggleTheme
