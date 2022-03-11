import React from "react";
import { ROUTES } from "../../router/constants"
import { Switch, Route, useLocation } from 'react-router-dom'
import OrdersMom from "./OrdersMom"
import ProductsMom from "./ProductsMom"
import AddProduct from "./AddProduct";
import OrderFile from "./OrderFile";
import { listOrders } from "../../api/orders";
import { groupBy } from "lodash"

const ProfileMomWithRealData = () => {

  const [orders, setOrders] = React.useState([])
  React.useEffect(() => {
      listOrders().then(orders => {
          setOrders(orders)
      })

  },
      [])

  return <ProfileSmall orders={orders} />

}


const ProfileSmall = (props) => {

  const groupedOrders = groupBy(props.orders, (order) => order.status)

  return (
    <div className="mom-painel">
      <h2 className="hello-user"> Mom's Painel </h2>
      <p className="hello-text">Welcome mom! Today you have:
      </p>

      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="media-body text-left">
                  <h3 className="Sucess">
                    {groupedOrders["pending"]?.length || 0}
                  </h3>
                  <span className="label-name"> Pending orders</span>
                </div>
                <div className="align-self-center">
                  <span className="icon-user sucess font-large-2 float-right"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-hourglass-top" viewBox="0 0 16 16">
  <path d="M2 14.5a.5.5 0 0 0 .5.5h11a.5.5 0 1 0 0-1h-1v-1a4.5 4.5 0 0 0-2.557-4.06c-.29-.139-.443-.377-.443-.59v-.7c0-.213.154-.451.443-.59A4.5 4.5 0 0 0 12.5 3V2h1a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1h1v1a4.5 4.5 0 0 0 2.557 4.06c.29.139.443.377.443.59v.7c0 .213-.154.451-.443.59A4.5 4.5 0 0 0 3.5 13v1h-1a.5.5 0 0 0-.5.5zm2.5-.5v-1a3.5 3.5 0 0 1 1.989-3.158c.533-.256 1.011-.79 1.011-1.491v-.702s.18.101.5.101.5-.1.5-.1v.7c0 .701.478 1.236 1.011 1.492A3.5 3.5 0 0 1 11.5 13v1h-7z"/>
</svg></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="media-body text-left">
                  <h3 className="Sucess">
                  {groupedOrders["in_progress"]?.length || 0}
                  </h3>
                  <span className="label-name"> Orders In Progress</span>
                </div>
                <div className="align-self-center">
                  <span className="icon-user sucess font-large-2 float-right"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-hourglass-split" viewBox="0 0 16 16">
  <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
</svg></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="media-body text-left">
                  <h3 className="sucess">
                  {groupedOrders["completed"]?.length || 0}
                  </h3>
                  <span className="label-name"> Orders completed</span>
                </div>
                <div className="align-self-center">
                  <span className="icon-user sucess font-large-2 float-right"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-hourglass-bottom" viewBox="0 0 16 16">
  <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2h-7z"/>
</svg></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

function MomProfile() {


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
              <a className={isActive(ROUTES.momprofile)} href={ROUTES.momprofile}>Painel</a>
            </li>
            <li className="nav-item">
              <a className={isActive(ROUTES.momproducts)} href={ROUTES.momproducts}>Products</a>
            </li>
            <li className="nav-item">
              <a className={isActive(ROUTES.momorders)} href={ROUTES.momorders}>Orders</a>
            </li>
          </ul>
        </div>

        <div className="card-body">
          <Switch>
            <Route exact path="/adm">
              <ProfileMomWithRealData />
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
