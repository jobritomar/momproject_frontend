import React from "react";
import { Switch, Route } from "react-router-dom";
import { AppRoute, GuestRoute } from ".";
import { Auth } from "../pages/Auth";
import NavBar from "../components/NavBar";
import { ROUTES } from ".";
import AboutUs from "../pages/AboutUs";
import Products from "../pages/Products"
import Profile from "../pages/Profile/ClientProfile";
import MomProfile from "../pages/Profile/MomProfile";
import AddProduct from "../pages/Profile/AddProduct";


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

        <AppRoute path={ROUTES.momprofile}>
          <MomProfile />
        </AppRoute>


      </Switch>
    </>
  );
}

export default AppRouter;
