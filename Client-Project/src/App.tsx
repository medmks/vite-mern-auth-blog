import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import UserAuthform from "./pages/userauthform.page";
import Editor from "./pages/Editor.page";
import UseAuthProvider from "./Hooks/UserContext";
import EditorContextProvider from "./Hooks/UseEditorContext";

function App() {
  return (
    <div>
      <UseAuthProvider>
        <EditorContextProvider>
          <Routes>
            <Route path="editor" element={<Editor />} />

            <Route path="/" element={<Navbar />}>
              <Route path="signin" element={<UserAuthform types="sign-in" />} />
              <Route path="signup" element={<UserAuthform types="sign-Up" />} />
            </Route>
          </Routes>
        </EditorContextProvider>
      </UseAuthProvider>
    </div>
  );
}

export default App;
