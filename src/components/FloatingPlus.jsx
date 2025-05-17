import React from 'react'

export default function FloatingPlus({handleModal}) {
  return (
    <div className='floating-plus'>
      <i onClick={() => {handleModal(true)}} className="floating-icon fs-sm-1 bi bi-plus-square-fill"></i>
    </div>
  )
}
