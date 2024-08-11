import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage2";
import FormPage from "./pages/FormPage";
import LoginPanel from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import Explore from "./pages/Explore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/form" element={<FormPage/>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<LoginPanel/>} />
        <Route path="/adminpanel" element={<AdminPanel />} />

        <Route path="*" element={<Homepage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
