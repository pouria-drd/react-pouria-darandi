import "./assets/css/App.css";

import AppRoutes from "./router/AppRoutes";
import Navbar from "./components/navbar/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <AppRoutes />
        </>
    );
}

export default App;
