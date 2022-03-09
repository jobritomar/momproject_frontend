import { addToCart } from "../../api/cart"
import { ROUTES } from "../../router"
import React from 'react'
import { listItems } from "../../api"

const ProductsWithTrueData = () => {
  const [products, setProducts] = React.useState([])
  React.useEffect(() => {
    listItems().then(products => {
      setProducts(products)
    })

  },
    []
  )

  return <Products products={products} />

}

const Products = (props) => {

  const addMeToCart = (product) => () => {
    addToCart(product)
    window.location.assign(ROUTES.cart)
  }
  return (
    <div>
      <h1> Our products </h1>

      <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr className="my-4" />


      <div className="products box">

        {
          props.products.map((product) => {

            return (

              <div className="card product">
                <img className="card-img-top" src={product.image} alt="trololololol" />
                <div className="card-body">
                  <h5 className="card-title name">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <div className="bottom">
                    <p className="card-text price"><small className="text-muted"> {product.price} € / un</small></p>
                    <button onClick={addMeToCart(product)} className="btn btn-primary btn-lg" type="submit"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg> Add to cart</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>





    </div>)
}

export default ProductsWithTrueData