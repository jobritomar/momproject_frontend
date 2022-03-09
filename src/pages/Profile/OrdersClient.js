import React from "react"
import { listMyOrders} from "../../api/orders"



const OrdersWithRealData = () => {

  const [orders, setOrders] = React.useState([])
  React.useEffect(() => {
    listMyOrders().then(orders => {
      setOrders(orders)
    })

  }, 
  [])

  return orders && <Orders orders={orders} /> 


}



const Orders = (props) => {
        return (
<section className="vh-100 gradient-custom-2">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
       
        { props.orders.map((order) =>
      <div className="col-md-10 col-lg-8 col-xl-6">
        <div className="card card-stepper">
          <div className="card-header p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="orderId"> Order ID <span>{order.number}</span></p>
              </div>
            </div>
          </div>
          <div className="card-body p-4">
          { order.info.map((p)=>
            <div className="d-flex flex-row mb-4 pb-2">
            
              <div className="flex-fill">
                <h5 className="mb-3">Name: {p._id.name}</h5>
                <h5 className="mb-3"> Qt: {p.quantity} item</h5>
                <h5 className="mb-3">Total: {p.quantity*p._id.price} <span> euros </span></h5>
              </div>
              <div>
                <img className="align-self-center img-fluid" src={p._id.image} alt="product" width="250"/>
              </div>
            
            </div>
            )}
            <ul id="progressbar-1" className="mx-0 mt-0 mb-5 px-0 pt-0 pb-4">
              <li className="status" id="status"><span>Status: <span className="orderStatus">{order.status}</span></span></li>
            </ul>
          </div>
        </div>

      </div>

        )}
    </div>
  </div>
</section>
        )
  }

export default OrdersWithRealData