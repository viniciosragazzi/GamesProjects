import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import AppPage from "./pages/AppPage";
import QuizNiveis from "./pages/QuizNiveis";
const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<WelcomePage />}></Route>
                <Route exact path="app" element={<AppPage />}></Route>
                <Route exact path="/app/niveis" element={<QuizNiveis />}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;