import { Child2 } from "./Child2"

export const Child1 = ({uname}) => {
  return (
    <div>Child1

        <Child2 uname={uname}/>
    </div>
  )
}
