import "./assets/css/App.css";

import AppRoutes from "./router/AppRoutes";
import AppLayout from "./layouts/AppLayout";
import PageLayout from "./layouts/PageLayout";
import Navbar from "./components/navbar/Navbar";

function App() {
    return (
        <AppLayout>
            <Navbar />
            <PageLayout>
                <AppRoutes />
            </PageLayout>
        </AppLayout>
    );
}

export default App;
