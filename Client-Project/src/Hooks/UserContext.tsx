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
const UseUserAuthContext = () => {
          const context = useContext(UserAuthcontext)
  return (
    
  )
}

export default UseUserAuthContext