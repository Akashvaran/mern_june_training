import React from 'react'
import { Child1 } from './Child1'

export const Parent = () => {
    const uname="Akash"

  return (
    <div>
        Parent

        <Child1 uname={uname}/>
    </div>
  )
}
