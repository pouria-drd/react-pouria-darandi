import "./assets/css/App.css";

import AppRoutes from "./router/AppRoutes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Navbar />
            <AppRoutes />
            <Footer />
        </>
    );
}

export default App;
