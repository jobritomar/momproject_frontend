import React from 'react'
import { deleteItem, listItems } from '../../api'
import { toast } from 'react-toastify';
import { ROUTES } from "../../router"



const handleDelete = (id) => async () => {
    await deleteItem(id)
    toast.success("Item deleted")
    setTimeout(() => window.location.reload(), 5000)

}


const ProductsMomWithRealData = () => {

    const [products, setProducts] = React.useState([])
    React.useEffect(() => {
        listItems().then(products => {
            setProducts(products)
        })

    },
        [])

    return <ProductsMom products={products} />

}

const ProductsMom = (props) => {


    return (
    <div className="momproducts">
       <div className="cart_section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="cart_container">
                            <h2 className="hello-user">List of Products</h2>
                            <div className="cart_items">
                                <ul className="cart_list">
                                    {
                                        props.products.map((product) => <li className="cart_item clearfix">
                                            <div className="cart_item_image"><img src={product.image} alt="product" /></div>
                                            <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                                <div className="cart_item_name cart_info_col">
                                                    <div className="cart_item_title">Name</div>
                                                    <div className="cart_item_text">{product.name}</div>

                                                </div>
                                                <div className="cart_item_quantity cart_info_col">
                                                    <div className="cart_item_title">Description</div>
                                                    <div className="cart_item_text">{product.description}</div>

                                                    <button onClick={handleDelete(product._id)} className="bbtn btn-secondary" type="submit"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-trash3" viewBox="0 0 16 16">
                                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                                    </svg></button>
                                                </div>
                                                <div className="cart_item_price cart_info_col">
                                                    <div className="cart_item_title">Price</div>
                                                    <div className="cart_item_text">{product.price} €</div>
                                                </div>
                                            </div>
                                        </li>
                                        )}

                                </ul>
                            </div>


                            <button type="button" onClick={() => {window.location.assign(ROUTES.addProduct)}} className="btn btn-outline-warning btn-lg">See our products</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}


export default ProductsMomWithRealData