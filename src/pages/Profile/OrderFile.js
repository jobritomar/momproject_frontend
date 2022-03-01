const fakeProps = [
    {   _id: 235,
        client: "Familia Feliz",
        product: [{
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1200px-Banana-Single.jpg",
            name: "banana",
            quantity: 1,
            price: 1,
        }
        ,
        {
        image: "https://www.infoescola.com/wp-content/uploads/2010/03/kiwi.jpg",
        name: "kiwi",
        quantity: 2,
        price: 2.5,
    }
    ],
    status: "delievered"
    
    }


] 



const OrderFile = () => {
        return (
<section className="vh-100 gradient-custom-2">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
       
        { fakeProps.map((order) =>
      <div className="col-md-10 col-lg-8 col-xl-6">
        <div className="card card-stepper">
          <div className="card-header p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-2"> Order ID <span>{order.id_}</span></p>
                <p className="text-muted mb-2"> Client <span>{order.client}</span></p>
                <p className="text-muted mb-2"> Status <span>{order.status}</span></p>
              </div>
            </div>
          </div>
          <div className="card-body p-4">
          { order.product.map((p)=>
            <div className="d-flex flex-row mb-4 pb-2">
            
              <div className="flex-fill">
                <h5 className="bold">{p.name}</h5>
                <p className="text-muted"> Qt: {p.quantity} item</p>
                <h4 className="mb-3"> {p.quantity} * {p.price} <span> euros </span></h4>
              </div>
              <div>
                <img className="align-self-center img-fluid" src={p.image} alt="product" width="250"/>
              </div>
            
            </div>
            )}
          </div>
        </div>

      </div>

        )}
    </div>
  </div>
</section>
        )
  }

export default OrderFile
