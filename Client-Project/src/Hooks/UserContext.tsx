import {useContext,useState ,createContext, useEffect} from 'react';
import { LookInSession } from '../common/session';
type Authcontextproviderprops = {
  children: React.ReactNode;
};
type AuthContext = {
          userAuth:{
            AccessToken:string | null
            RefreshToken:string | null
          },
          setuserAuth:React.Dispatch<React.SetStateAction<{
            AccessToken: null;
            RefreshToken: null;
        }>>
} 

const UserAuthcontext = createContext<AuthContext | undefined>(undefined)
function UserAuthProvider({ children }: Authcontextproviderprops) { 
   const [userAuth,setuserAuth]=useState({AccessToken:null,RefreshToken:null})

  useEffect(()=>{
    const UserInsession = LookInSession({key :"user"});
    UserInsession ? setuserAuth( JSON.parse(UserInsession))  : setuserAuth({AccessToken:null,RefreshToken:null})
  },[])
return (
<UserAuthcontext.Provider value={{userAuth,setuserAuth}}>
        {children}
</UserAuthcontext.Provider> 
)
}
export function UseUserAuthContext(){
          const context = useContext(UserAuthcontext)
          if(context === undefined ) {
            throw new Error("UseModalContext should within ModalContext")
          }
  return context
}

export default UserAuthProvider