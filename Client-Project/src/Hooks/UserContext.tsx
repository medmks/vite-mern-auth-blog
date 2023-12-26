import {useContext,useState ,createContext} from 'react';
type Authcontextproviderprops = {
  children: React.ReactNode;
};
type AuthContext = {
          isAuth:boolean,
          setisAuth:React.Dispatch<React.SetStateAction<boolean>>
} 

const UserAuthcontext = createContext<AuthContext | undefined>(undefined)
function UserAuthProvider({ children }: Authcontextproviderprops) {
          const [isAuth,setisAuth]=useState(false)
return (
<UserAuthcontext.Provider value={{isAuth,setisAuth}}>
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