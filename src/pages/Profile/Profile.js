import React from "react";
import { useAuth } from "../../context/AuthContext";
import { ROUTES } from "../../router/constants"
import { Switch, Route, useLocation } from 'react-router-dom'
import Cart from "./Cart"
import Orders from "./Orders"

const ProfileSmall = () => {


  const { user } = useAuth();
  return (
    <div>
      <h5 className="card-title"> Welcome {user?.name} </h5>
      <p className="card-text">Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem.</p>
    </div>
  )
}

function Profile() {

  
  const location = useLocation();

  const isActive = (route) => {
    
    let classes = "nav-link"
    if (location.pathname === route) {
      classes = classes + " active"
    } 

    return classes
  }

  return (
    <div>
      <h2>Mom's Project</h2>

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
