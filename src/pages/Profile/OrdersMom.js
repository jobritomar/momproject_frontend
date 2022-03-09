import { groupBy } from "lodash"
import React from "react"
import { deleteOrder, editOrder, listOrders } from "../../api/orders"
import {toast} from 'react-toastify'


const handleDelete = (id) => async () => {
    await deleteOrder(id)
    toast.success("Order deleted")
    setTimeout(() => window.location.reload(), 5000)
}


const Order = ({order}) => {
    return (<div className="card mb-3 bg-light">
    <div className="card-body p-3">
        <div className="float-right mr-n2">
           
        { order.status !== 'completed' && <button className="btn" onClick={updateOrder(order)} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
</svg></button> }
           
        </div>
        <h6>Order number {order._id}</h6>
        <ul>
            <li> Client {order.user.name}</li>
            <li> Total $ </li>
        </ul>
        <a className="btn btn-outline-primary btn-sm" href={"/adm/orders/" + order._id}>View</a>
        <button onClick={handleDelete(order._id)} className="btn btn-outline-primary btn-sm">Delete</button>
    </div>
</div>)
}


const OrdersMomWithRealData = () => {

    const [orders, setOrders] = React.useState([])
    React.useEffect(() => {
      listOrders().then(orders => {
        setOrders(orders)
      })
  
    }, 
    [])
  
    return <OrdersMom orders={orders} />

}

const updateOrder = (order) => async () => {
    const nextStatuses = {
        "pending": "in_progress",
        "in_progress": "completed"
    }

    await editOrder(order._id, {...order, status: nextStatuses[order.status]})
    toast.success("Order edited")
    setTimeout(() => window.location.reload(), 3000)

}


const OrdersMom = (props) => {
    const groupedOrders = groupBy(props.orders, (order) => order.status)
    // {completed: [order2], pending: [order1]}

    return (
        <div>
            <main className="content">
                <div className="container p-0">

                    <h1 className="h3 mb-3">List of tasks</h1>

                    <div className="row">
                        <div className="col-12 col-lg-12 col-xl-4">
                            <div className="card card-border-primary">
                                <div className="card-header">
                                    <div className="card-actions float-right">
                                        <div className="dropdown show">
                                            <a href="/" data-toggle="dropdown" data-display="static">

                                            </a>
                                        </div>
                                    </div>
                                    <h5 className="card-title">Pending Orders</h5>
                                    <h6 className="card-subtitle text-muted">Orders to check</h6>
                                </div>
                                <div className="card-body p-3">

                                   {
                                       groupedOrders['pending'] && groupedOrders['pending'].map(order => (<Order order={order} />))
                                   }

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-4">
                            <div className="card card-border-warning">
                                <div className="card-header">
                                    <div className="card-actions float-right">
                                        <div className="dropdown show">
                                            <a href="/" data-toggle="dropdown" data-display="static">
                                            </a>

                                        </div>
                                    </div>
                                    <h5 className="card-title">In Progress</h5>
                                    <h6 className="card-subtitle text-muted">Orders that are in the process of making</h6>
                                </div>
                                <div className="card-body">

                                {
                                       groupedOrders['in_progress'] && groupedOrders['in_progress'].map(order => (<Order order={order} />))
                                   }


                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 col-xl-4">
                            <div className="card card-border-warning">
                                <div className="card-header">
                                    <div className="card-actions float-right">
                                        <div className="dropdown show">
                                            <a href="/" data-toggle="dropdown" data-display="static">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal align-middle">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="19" cy="12" r="1"></circle>
                                                    <circle cx="5" cy="12" r="1"></circle>
                                                </svg>
                                            </a>

                                        </div>
                                    </div>
                                    <h5 className="card-title">Completed</h5>
                                    <h6 className="card-subtitle text-muted">Orders that are completed</h6>
                                </div>
                                <div className="card-body">

                                   
                                {
                                       groupedOrders['completed'] && groupedOrders['completed'].map(order => (<Order order={order} />))
                                   }


                                </div>
                            </div>
                        </div>

                

                    </div>

                </div>
            </main>
        </div>
    )
}

export default OrdersMomWithRealData