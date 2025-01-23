import React from 'react'

export default function Button({ Title, Type,submit}) {
    
  return (
    <div className='button-container'>
      <button id={Title} type={Type}onClick={(event) => handleChange(submit)}>Login</button>
    </div>
  )
}
