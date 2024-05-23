import ROUTES from "./routes";
import { Route, Routes } from "react-router-dom";

import { HomePage, NotFoundPage } from "../pages";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.NOT_FOUND_ROUTE} element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRoutes;
