import React from "react";
import { useAuth } from "../../context/AuthContext";
import { ROUTES } from "../../router/constants"
import { Switch, Route, useLocation } from 'react-router-dom'
import OrdersMom from "./OrdersMom"
import ProductsMom from "./ProductsMom"
import AddProduct from "./AddProduct";
import OrderFile from "./OrderFile";

const ProfileSmall = () => {


  const { user } = useAuth();
  return (
    <div>
      <h5 className="card-title"> Welcome {user?.name} </h5>
      <p className="card-text">Ao contrário do se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem.</p>
    </div>
  )
}

function MomProfile() {

  
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
      <h1 class="display-1">Mom's Project</h1>

      <div className="card text-center">

        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <a className={isActive(ROUTES.profile)} href={ROUTES.momprofile}>My Profile</a>
            </li>
            <li className="nav-item">
              <a className={isActive(ROUTES.cart)} href={ROUTES.momproducts}>My Products</a>
            </li>
            <li className="nav-item">
              <a className={isActive(ROUTES.orders)} href={ROUTES.momorders}>My Orders</a>
            </li>
          </ul>
        </div>

        <div className="card-body">
          <Switch>
            <Route exact path="/adm">
              <ProfileSmall />
            </Route> 

   
            
            <Route exact path="/adm/orders">
              <OrdersMom />
            </Route> 

            <Route path="/adm/orders/:id">
              <OrderFile />
            </Route> 

            <Route exact path="/adm/products">
              <ProductsMom />
            </Route> 

            <Route path={ROUTES.newProduct}>
              <AddProduct />
            </Route>


              

          </Switch>
        </div>
      </div>

    </div>
  );
}

export default MomProfile;
