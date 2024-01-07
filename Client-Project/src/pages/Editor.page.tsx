import { Navigate } from "react-router-dom";
import { UseUserAuthContext } from "../Hooks/UserContext";
import BlogEditor from "../components/Editor-blog.component";
import Publishform from "../components/Publish-form.component";
import { UseEditorContext } from "../Hooks/UseEditorContext";

const Editor = () => {
  const { userAuth } = UseUserAuthContext();
  const { EditorState } = UseEditorContext();

  console.log(EditorState);

  return userAuth.AccessToken === null ? (
    <Navigate to="/signin" />
  ) : EditorState === "editor" ? (
    <BlogEditor />
  ) : (
    <Publishform />
  );
};

export default Editor;
