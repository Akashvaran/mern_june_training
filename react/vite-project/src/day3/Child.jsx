import React from 'react'

export const Child = ({username,userage}) => {//props
  return (
    <div>
    <li>{username}</li>
    <li>{userage}</li>
    </div>
  )
}
