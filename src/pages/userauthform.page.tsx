import { Link } from "react-router-dom";
import InputBox from "../components/input.component";

type UserAuthformProp = {
          types:string
}

const UserAuthform = ({types}:UserAuthformProp) => {
          const UserIcon=(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 input-icon">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
)
const EmailIcon=(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 input-icon">
<path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
</svg>
)
const passwordIcon=(
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 input-icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
</svg>

)
  return (
    <section className=" h-cover flex w-full items-center justify-center flex-col">
          <form action="" method="post" className=" w-[80%] max-w-[400px] flex flex-col gap-6 justify-center items-center">

                    <h1 className=" font-bold  font-gelasio capitalize text-4xl" >{types === "sign-in" ? 'Welcome Back' : "Join Us Today"} </h1>
                    {
                              types !== "sign-in" ? (
                                                   <InputBox name="fullname" type="text" value="" id="fname" child={UserIcon} placeholder="Full name"/>    
                              ):""
                    }
                    
                    <InputBox name="email" type="email" value="" id="email" child={EmailIcon} placeholder="Email"/>   
                    <InputBox name="password" type="password" value="" id="password" child={passwordIcon} placeholder="Password"/>   



                    <button className="btn-dark w-fit flex ">
                              Sign Up
                    </button>


                    <button className="w-full btn-dark">
                              Continue with Google
                    </button>
                    <p>Already a member ? <span className=" underline font-semibold"><Link to={"/signin"}>Sign In</Link></span>  </p>
          </form>


    </section>
  )
}

export default UserAuthform