import ROUTES from "./routes";
// import RouteGuard from "./RouteGuard";

import { Route, Routes } from "react-router-dom";
import { HomePage, NotFoundPage } from "../pages";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.NOT_FOUND_ROUTE} element={<NotFoundPage />} />

            {/* Private Pages */}
            {/* <Route element={<RouteGuard nextUrl={ROUTES.DASHBOARD} />}>
                <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
            </Route> */}
        </Routes>
    );
};

export default AppRoutes;
