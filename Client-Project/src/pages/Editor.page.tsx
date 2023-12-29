import { Navigate } from "react-router-dom";
import { UseUserAuthContext } from "../Hooks/UserContext"
import { useState } from "react";
import BlogEditor from "../components/Editor-blog.component";
import Publishform from "../components/Publish-form.component";


const Editor= () => {
  const [EditorState, setEditorState] = useState<string>('editor')
  const {userAuth,setuserAuth} = UseUserAuthContext();

  return (
    userAuth.AccessToken === null ? <Navigate to="/signin"/> :EditorState === "editor" ? <BlogEditor/> : <Publishform/>

  )
}

export default Editor