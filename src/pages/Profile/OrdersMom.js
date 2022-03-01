const OrdersMom = () => {
    return (
        <div>
            <main className="content">
    <div className="container p-0">

        <h1 className="h3 mb-3">List of tasks</h1>

        <div className="row">
            <div className="col-12 col-lg-6 col-xl-3">
                <div className="card card-border-primary">
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
                        <h5 className="card-title">Upcoming Orders</h5>
                        <h6 className="card-subtitle text-muted">Orders to check</h6>
                    </div>
                    <div className="card-body p-3">

                        <div className="card mb-3 bg-light">
                            <div className="card-body p-3">
                                <div className="float-right mr-n2">
                                    <label className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" checked=""/>
                                        <span className="custom-control-label"></span>
                                    </label>
                                </div>
                                <h6>Order number 1</h6>
                                <ul>
                                    <li> Client XXXX</li>
                                    <li> Total $ </li>
                                </ul>
                                <a className="btn btn-outline-primary btn-sm" href="/">View</a>
                                <a className="btn btn-outline-primary btn-sm" href="/">Delete</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-3">
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
                        <h5 className="card-title">In Progress</h5>
                        <h6 className="card-subtitle text-muted">Orders that are in the process of making</h6>
                    </div>
                    <div className="card-body">

                    <div className="card mb-3 bg-light">
                            <div className="card-body p-3">
                                <div className="float-right mr-n2">
                                    <label className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" checked=""/>
                                        <span className="custom-control-label"></span>
                                    </label>
                                </div>
                                <h6>Order number 1</h6>
                                <ul>
                                    <li> Client XXXX</li>
                                    <li> Total $ </li>
                                </ul>
                                <a className="btn btn-outline-primary btn-sm" href="/">View</a>
                                <a className="btn btn-outline-primary btn-sm" href="/">Delete</a>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-6 col-xl-3">
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
                        <h5 className="card-title">On Hold</h5>
                        <h6 className="card-subtitle text-muted">Orders that are in the process of making</h6>
                    </div>
                    <div className="card-body">

                    <div className="card mb-3 bg-light">
                            <div className="card-body p-3">
                                <div className="float-right mr-n2">
                                    <label className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" checked=""/>
                                        <span className="custom-control-label"></span>
                                    </label>
                                </div>
                                <h6>Order number 1</h6>
                                <ul>
                                    <li> Client XXXX</li>
                                    <li> Total $ </li>
                                </ul>
                                <a className="btn btn-outline-primary btn-sm" href="/">View</a>
                                <a className="btn btn-outline-primary btn-sm" href="/">Delete</a>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-6 col-xl-3">
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
                        <h6 className="card-subtitle text-muted">Orders that are in the process of making</h6>
                    </div>
                    <div className="card-body">

                    <div className="card mb-3 bg-light">
                            <div className="card-body p-3">
                                <div className="float-right mr-n2">
                                    <label className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" checked=""/>
                                        <span className="custom-control-label"></span>
                                    </label>
                                </div>
                                <h6>Order number 1</h6>
                                <ul>
                                    <li> Client XXXX</li>
                                    <li> Total $ </li>
                                </ul>
                                <a className="btn btn-outline-primary btn-sm" href="/">View</a>
                                <a className="btn btn-outline-primary btn-sm" href="/">Delete</a>

                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>
  
        </div>

    </div>
</main>
        </div>
    )
  }

export default OrdersMom