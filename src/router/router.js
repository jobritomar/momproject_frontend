import React from "react";
import { Switch, Route } from "react-router-dom";
import { AppRoute, GuestRoute } from ".";
import { Auth } from "../pages/Auth";
import { Main } from "../pages/Main";
import NavBar from "../components/NavBar";
import { ROUTES } from ".";
import AboutUs from "../pages/AboutUs";
import ButtonsUser from "../components/buttonsUser"
import Products from "../pages/Products"
import Profile from "../pages/Profile/Profile";


function AppRouter() {
  return (

    <>
      <NavBar />
      <Switch>
        <GuestRoute exact path={ROUTES.login}>
          <Auth isLogin={true} />
        </GuestRoute>

        <GuestRoute path={ROUTES.signup}>
          <Auth />
        </GuestRoute>



        <Route exact path={ROUTES.aboutus}>
          <AboutUs />
        </Route>

        <Route exact path={ROUTES.products}>
          <Products />
        </Route>

       <AppRoute exact path={ROUTES.logout}>
        </AppRoute>

        <AppRoute path="/profile">
          <Profile />
        </AppRoute>



      </Switch>
    </>
  );
}

export default AppRouter;
