import "./assets/css/App.css";

import AppRoutes from "./router/AppRoutes";
import FloatLink from "./components/FloatLink";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRoutes />
            <Footer />
            <FloatLink />
        </BrowserRouter>
    );
}

export default App;
