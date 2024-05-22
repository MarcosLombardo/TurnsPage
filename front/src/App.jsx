import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./views/Home/Home.jsx";
import About from "./views/About/About.jsx";
import MisTurnos from "./views/MisTurnos/MisTurnos.jsx";
import Profile from "./views/Perfil/Profile.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Register from "./views/Register/Register.jsx";
import Login from "./views/Login/Login.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <NavBar />
            <div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/misturnos" element={<MisTurnos />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
