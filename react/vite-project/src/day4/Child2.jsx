import React from 'react'
import { Child3 } from './Child3'

export const Child2 = (props) => {
  return (
    <div>Child2<Child3 uname={props.uname}/>
    </div>
  )
}
