import { listOrder } from "../../api/orders"
import React from "react"
import { useParams } from 'react-router-dom'




const OrderFileWithRealData = () => {
  const [order, setOrder] = React.useState(null)
  const {id} = useParams()

  React.useEffect(() => {
    listOrder(id).then(order => {
      setOrder(order)
    })

  },
    [id])

  return order && <OrderFile order={order} />
}



const OrderFile = ({ order }) => {

  return (
    <section className="vh-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">


          <div className="col-md-10 col-lg-8 col-xl-6">
            <div className="card card-stepper">
              <div className="card-header p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="title-text">
                    <p className=""> Order #: <span>{order.number}</span></p>
                    <p className=""> Client: <span>{order.user.name}</span></p>
                    <p className=""> Status: <span>{order.status}</span></p>
                  </div>
                </div>
              </div>
              <div className="card-body p-4">
                {order.info.map((p) =>
                  <div className="d-flex flex-row mb-4 pb-2">

                    <div className="flex-fill order-card">
                      <h5 className="bold"> <span>Name: </span>{p._id.name}</h5>
                      <h5> <span>Quantity:</span> {p.quantity} item</h5>
                      <h4 className="mb-3"><span>Total:</span> {p.quantity * p._id.price} <span> € </span></h4>
                    </div>
                    <div>
                      <img className="align-self-center img-fluid" src={p._id.image} alt="product" width="250" />
                    </div>

                  </div>
                )}
              </div>
            </div>
            <button type="button" onClick={() => {window.location.assign("/adm/orders")}} className="btn btn-light btn-lg">Go back</button>

          </div>
          

          )
        </div>
      </div>
    </section>
  )
}

export default OrderFileWithRealData
