import "./assets/css/App.css";

import AppRoutes from "./router/AppRoutes";
import PageLayout from "./layouts/PageLayout";
import Navbar from "./components/navbar/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <PageLayout>
                <AppRoutes />
            </PageLayout>
        </>
    );
}

export default App;
