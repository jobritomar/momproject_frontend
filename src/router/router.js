import React from "react";
import { Switch } from "react-router-dom";
import { AppRoute, GuestRoute } from ".";
import { Auth } from "../pages/Auth";
import { Main } from "../pages/Main";
import NavBar from "../components/NavBar";
import { ROUTES } from ".";
import AboutUs from "../pages/AboutUs";
import ButtonsUser from "../components/buttonsUser"

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

        <GuestRoute path={ROUTES.aboutus}>
          <AboutUs />
        </GuestRoute>

        <AppRoute exact path={ROUTES.main}>
          <ButtonsUser />
          <Main />
        </AppRoute>

        <AppRoute path={ROUTES.cart}>
          <ButtonsUser />
        </AppRoute>

        <AppRoute path={ROUTES.orders}>
          <ButtonsUser />
        </AppRoute>



      </Switch>
    </>
  );
}

export default AppRouter;
