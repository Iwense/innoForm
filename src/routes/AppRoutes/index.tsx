import React from "react";

import { Switch, Route } from "react-router-dom";
import SideBarLeft from "../../components/organisms/SideBarLeft";
import { routes } from "../index";

import MainPage from "../../pages/MainPage";
import MainLayout from "../../layouts/MainLayout/index.";
import Header from "../../components/organisms/Header";

const AppRoutes = () => (
    <MainLayout sideBarLeft={<SideBarLeft />} header={<Header />}>
        <Switch>
            <Route component={MainPage} exact path={routes.main} />
        </Switch>
    </MainLayout>
);

export default AppRoutes;
