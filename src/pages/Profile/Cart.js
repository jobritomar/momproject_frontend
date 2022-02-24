import { newOrder } from "../../api/orders"
import { indexCart, removeFromCart } from "../../api/cart"
import { ROUTES } from "../../router"


const Cart = () => {

    const cart = indexCart()

    const cartWithQuantity = cart.reduce((acc, product) => {
        const previous = acc.findIndex((prod2) => prod2._id === product._id)
        if (previous === -1) {
            const newProduct = product
            newProduct.quantity = 1
            return [...acc, newProduct]
        } else {
            const newAcc = [...acc]
            newAcc[previous].quantity += 1
            return newAcc 
        }
    }, [])

    const removeItem = (product) => () => {
        removeFromCart(product._id)
        window.location.reload()
    }

    const onPurchase = () => {
        const res = newOrder(cartWithQuantity)
        console.log({res})
    }

    if (cart.length === 0) {
        return (<p>Your cart is empty!</p>)
    } else {
        return (
            <div className="cart_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="cart_container">
                                <div className="cart_title">Shopping Cart</div>
                                <div className="cart_items">
                                    <ul className="cart_list">
                                        {
                                            cartWithQuantity.map((product) => <li className="cart_item clearfix">
                                                <div className="cart_item_image"><img src={product.image} alt="product" /></div>
                                                <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                                    <div className="cart_item_name cart_info_col">
                                                        <div className="cart_item_title">Name</div>
                                                        <div className="cart_item_text">{product.name}</div>

                                                    </div>
                                                    <div className="cart_item_quantity cart_info_col">
                                                        <div className="cart_item_title">Quantity</div>
                                                        <div className="cart_item_text">{product.quantity}</div>
                                                        <div style={{ cursor: "pointer" }} onClick={removeItem(product)}>remove 1</div>
                                                    </div>
                                                    <div className="cart_item_price cart_info_col">
                                                        <div className="cart_item_title">Price</div>
                                                        <div className="cart_item_text">{product.price}</div>
                                                    </div>
                                                    <div className="cart_item_total cart_info_col">
                                                        <div className="cart_item_title">subtotal</div>
                                                        <div className="cart_item_text">{product.price * product.quantity}</div>
                                                    </div>
                                                </div>
                                            </li>
                                            )}

                                    </ul>
                                </div>
                                <div className="order_total">
                                    <div className="order_total_content text-md-right">
                                        <div className="order_total_title">Order Total:</div>
                                        <div className="order_total_amount">{cartWithQuantity.reduce((acc, product) => acc + (product.quantity * product.price), 0)}</div>
                                    </div>
                                </div>
                                <div className="cart_buttons">
                                    <button type="button" onClick={() => {window.location.assign(ROUTES.products)}} className="button cart_button_clear">Continue Shopping</button>
                                    <button type="button" onClick={onPurchase} className="button cart_button_checkout">Checkout order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart