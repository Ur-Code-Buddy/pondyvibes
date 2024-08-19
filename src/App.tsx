import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import FormPage from "./pages/FormPage";
import LoginPanel from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import Explore from "./pages/Explore";
import ImagePage from "./pages/ImagePanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/form" element={<FormPage/>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<LoginPanel/>} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/image" element={<ImagePage/>} />

        <Route path="*" element={<Homepage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

