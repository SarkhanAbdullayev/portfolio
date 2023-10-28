import React from 'react'

const Tab = ({icon, text}) => {
  return (
    <div className='tab'>
      {icon}
      <p>{text}</p>
    </div>
  )
}

export default Tab