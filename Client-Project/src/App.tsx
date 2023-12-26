import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import UserAuthform from "./pages/userauthform.page";
import Test from "./pages/test.page";
import UserAuthProvider  from "./Hooks/UserContext"
function App() {
  return (
    <div>
      <UserAuthProvider>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="signin" element={<UserAuthform types="sign-in" />} />
          <Route path="signup" element={<UserAuthform types="sign-Up" />} />
          <Route path="test" element={<Test />} />

        </Route>
      </Routes>
      </UserAuthProvider>
    </div>
  );
}

export default App;
