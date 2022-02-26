import React from "react";
import { useAuth } from "../../context/AuthContext";
import { ROUTES } from "../../router/constants"

function Main() {
  const { user } = useAuth();
  return (
    <div>
      <h1 class="display-1">Mom's Project</h1>

  <div className="card text-center">

  <div className="card-header">
    <ul className="nav nav-pills card-header-pills">
      <li className="nav-item">
        <a className="nav-link active" href="/">My Profile</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={ ROUTES.cart}>My Cart</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={ ROUTES.orders}>My Orders</a>
      </li>
    </ul>
  </div>

  <div className="card-body">
    <h5 className="card-title"> Welcome {user?.name} </h5>
    <p className="card-text">Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem.</p>

  </div>
</div>
      
    </div>
  );
}

export default Main;
