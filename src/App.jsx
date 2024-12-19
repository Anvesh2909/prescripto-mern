import { Routes, Route } from "react-router-dom";
import Home from "./sections/Home.jsx";
import Navbar from "./sections/Navbar.jsx";
import Footer from "./sections/Footer.jsx";
import Special from "./sections/Special.jsx";
import TopDoctors from "./sections/TopDoctors.jsx";
const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/special" element={<Special />} />
                <Route exact path="/topdoctors" element={<TopDoctors />} />
                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
            <Footer />
        </div>
    );
};
export default App;