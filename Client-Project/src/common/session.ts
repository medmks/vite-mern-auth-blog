const storeSesion = ({key,value}:{key:string,value:string}) => {sessionStorage.setItem(key,value)}
const LookInSession = ({key}:{key:string}) => sessionStorage.getItem(key);
const remouveSession = ({key}:{key:string}) => sessionStorage.removeItem(key) 
const logoutUser = () => sessionStorage.clear()

export {storeSesion,LookInSession,remouveSession,logoutUser}