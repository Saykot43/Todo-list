import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import EditUser from "./Pages/EditUser";
import Home from "./Pages/Home";
import List from "./Pages/List";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Register";
import RequireAuth from './Pages/RequireAuth';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="list" element={<RequireAuth>
                <List />
              </RequireAuth>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="edit/:id" element={<RequireAuth><EditUser /></RequireAuth>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Navbar>
      <Footer />
    </div>
  );
}

export default App;
