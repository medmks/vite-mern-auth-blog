import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import UserAuthform from "./pages/userauthform.page";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="signin" element={<UserAuthform types="sign-in" />} />
          <Route path="signup" element={<UserAuthform types="sign-Up" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
