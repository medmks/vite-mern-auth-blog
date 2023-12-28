import { Link } from "react-router-dom"
import AnimationWrapper from "../common/animation-page"
import { remouveSession } from "../common/session"
import {UseUserAuthContext} from "../Hooks/UserContext"


const Usernavigation = () => {
          const { setuserAuth} = UseUserAuthContext()
          const SignOutUser = () => {
                    remouveSession({key:"user"})
                    setuserAuth({AccessToken:null,RefreshToken:null})
                    
                    }
          return (
                    <AnimationWrapper
                    transition={{duration:0.2}}   
                    className="  absolute right-0  z-50"
                    >
                              <div className=" bg-white absolute right-0 shadow-lg border border-grey w-60 overflow-hidden duration-200  ">
                                        <Link  className=" flex gap-2 link pl-8 py-4 " to={"/Editor"}>
                                                  {/*  TODO md:hidden  */}

                                                  <p>write</p>
                                        </Link>
                                        <Link  className=" flex gap-2 link pl-8 py-4 " to={"/profile"}>
                                                  <p>profile</p>
                                        </Link>
                                        <Link  className=" flex gap-2 link pl-8 py-4 " to={"/dashboard"}>
                                                  <p>Dashboard</p>
                                        </Link>
                                        <Link  className=" flex gap-2 link pl-8 py-4 " to={"/setting"}>
                                                  <p>Setting</p>
                                        </Link>
                                        <span className=" border-t border-grey w-[100%]  absolute"></span>
                                        <button onClick={() => SignOutUser() } className=" text-left  p-4 hover:bg-grey w-full pl-8 py-4 ">
                                                <h1 className=" font-semibold mg-1 text-xl ">Sign out</h1>  
                                                <p className=" text-dark-grey">@Mohamed</p>
                                        </button>
                              </div>
                     </AnimationWrapper>
          )
}
export default Usernavigation