import React, { useState ,useRef, useEffect} from 'react'
type Troutes = {
          routes:string[]
          defaultIndex?:number
          defaulthidden:string[]
          children : React.ReactNode
}

 const InPageNavigation = ({routes, defaultIndex = 0, defaulthidden ,children}:Troutes) => {
          const [indexroute , setindexroute ] = useState(defaultIndex)
          const Activelineref = useRef<HTMLHRElement>(null)
          const ActiveTab = useRef<HTMLButtonElement>(null)
          const Changepagestate = (btn:EventTarget, index:number) => {
            if (btn instanceof HTMLButtonElement && Activelineref.current) {
                Activelineref.current.style.width = btn.offsetWidth + "px"
                Activelineref.current.style.left = btn.offsetLeft + "px" 
                console.log("offset left" +btn.offsetLeft + "px");
                console.log("offset width" +btn.offsetWidth + "px")
              }
                        setindexroute(index) 
          }
          useEffect(()=>{
            if(ActiveTab.current && Activelineref.current){
                Changepagestate(ActiveTab.current,defaultIndex)
              }
                
          },[])
  return (
    <>
    
    
        <div className='relative mb-8 bg-white border-b border-grey flex flex-nowrap  overflow-x-auto'>
              {
                        routes.map((route ,i) =>{
                            return <button key={i} ref={defaultIndex === i ? ActiveTab :null} onClick={(e) => Changepagestate(e.target,i)} className={"p-4 px-5 capitalize font-medium " + ( indexroute === i ? "text-black " : "text-dark-grey ") + (defaulthidden.includes(route) ? " md:hidden " :"")} >{route}</button>
                        })
              }
              <hr className=' absolute bottom-0  duration-300' ref={Activelineref} />
        </div>    
                {Array.isArray(children)? children[indexroute] : children}
    </>
  )
}
export default InPageNavigation