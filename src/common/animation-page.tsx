import { ReactNode } from "react"

type AnimationWrapperprop={
          child:ReactNode
}
 const AnimationWrapper = ({child}:AnimationWrapperprop) => {
  return (
    <div>
          {child}
    </div>
  )
}
export default AnimationWrapper