import React from 'react'
import { deleteItem, listItems } from '../../api'
import { toast } from 'react-toastify';




const handleDelete =  (id) => async () => {
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
        <div className="cart_section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="cart_container">
                            <div className="cart_title">List of Products</div>
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
                                                    <div onClick={handleDelete(product._id)} style={{ cursor: "pointer" }} >delete</div>
                                                </div>
                                                <div className="cart_item_price cart_info_col">
                                                    <div className="cart_item_title">Price</div>
                                                    <div className="cart_item_text">{product.price}</div>
                                                </div>
                                            </div>
                                        </li>
                                        )}

                                </ul>
                            </div>
                            <div className="cart_buttons">
                                <a href="/adm/products/new" type="button" className="button cart_button_clear">Add new product</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductsMomWithRealData