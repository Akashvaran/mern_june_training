import React from 'react'
import { Child4 } from './Child4'

export const Child3 = ({uname}) => {
  return (
    <div>Child3

        <Child4 uname={uname}/>
    </div>
  )
}
