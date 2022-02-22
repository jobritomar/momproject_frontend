import React from "react";
import { useAuth } from "../../context/AuthContext";
import { ROUTES } from "../../router/constants"

function Main() {
  const { user, handleLogout } = useAuth();
  return (
    <div>
      <h2>Mom's Project</h2>

  <div class="card text-center">

  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="/">My Profile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href={ ROUTES.cart}>My Cart</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href={ ROUTES.orders}>My Orders</a>
      </li>
    </ul>
  </div>

  <div class="card-body">
    <h5 class="card-title"> Welcome {user?.name} </h5>
    <p class="card-text">Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem.</p>
    <button onClick={handleLogout}>logout</button>
  </div>
</div>
      
    </div>
  );
}

export default Main;
