import React from "react";
import { useAuth } from "../../context/AuthContext";
import { ROUTES } from "../../router/constants"
import { Switch, Route, useLocation } from 'react-router-dom'
import Cart from "./Cart"
import Orders from "./OrdersClient"

const ProfileSmall = () => {


  const { user } = useAuth();
  return (
    <div className="greeting">
      <h2 className="hello-user"> Welcome {user?.name} </h2>

      <button type="button" onClick={() => {window.location.assign(ROUTES.products)}} className="btn btn-outline-dark btn-lg">See our products</button>
          

      <section class="vh-100" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-4">

              <div className="card-client">
                <div className="card-body text-center">
                  <div className="mt-3 mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                      className="rounded-circle img-fluid"
                      alt="1"
                    />
                  </div>

                  <div className="client-info">
                  <h4> Name </h4>
                  <p className="mb-2">{user?.name}</p>
                  <h4> Email</h4>
                  <p className="mb-2">{user?.email} </p>
                  <h4> Phone</h4>
                  <p className="mb-2">{user?.phone} </p>
                  <h4> Adress</h4>
                  <p className="mb-2">{user?.adress} </p>

                  </div>

                  
                </div>
              </div>

            </div>
          </div>
            
        </div>
      </section>


    </div>
  )
}

function Profile() {


  const location = useLocation();

  const isActive = (route) => {

    let classes = "nav-link btn"
    if (location.pathname === route) {
      classes = classes + " btn-dark active"
    }

    return classes
  }

  return (
    <div>
      <div className="card text-center">

        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <a className={isActive(ROUTES.profile)} href={ROUTES.profile}>My Profile</a>
            </li>
            <li className="nav-item">
              <a className={isActive(ROUTES.cart)} href={ROUTES.cart}>My Cart</a>
            </li>
            <li className="nav-item">
              <a className={isActive(ROUTES.orders)} href={ROUTES.orders}>My Orders</a>
            </li>
          </ul>
        </div>

        <div className="card-body">
          <Switch>
            <Route exact path="/profile">
              <ProfileSmall />
            </Route>

            <Route path="/profile/cart">
              <Cart />
            </Route>


            <Route path="/profile/orders">
              <Orders />
            </Route>
          </Switch>
        </div>
      </div>

    </div>
  );
}

export default Profile;
