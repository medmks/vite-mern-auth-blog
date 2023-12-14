import { ReactNode } from "react"

type InputBoxprops={
          name :string,
           placeholder:string ,
           id :string,
            value:string ,
            type:string,
            child : ReactNode  
}
const InputBox = ({name ,type, placeholder ,id , value ,child}:InputBoxprops) => {
  return (
    <div className="relative w-[100%] mb-4 ">
          <input className="input-box" type={type} defaultValue={value} id={id} placeholder={placeholder} name={name} />
          {child}
    </div>
   
  )
}

export default InputBox