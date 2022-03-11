import { newOrder } from "../../api/orders"
import { clearCart, indexCart, removeFromCart } from "../../api/cart"
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
        clearCart()
        window.location.assign(ROUTES.orders)
        console.log({res})
    }

    if (cart.length === 0) {
        return (<p className="hello-text">Your cart is empty!</p>)
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
                                                        <button className="btn btn-secondary"onClick={removeItem(product)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg></button>
                                                    </div>
                                                    <div className="cart_item_price cart_info_col">
                                                        <div className="cart_item_title">Price</div>
                                                        <div className="cart_item_text">{product.price}€ </div>
                                                    </div>
                                                    <div className="cart_item_total cart_info_col">
                                                        <div className="cart_item_title">Subtotal</div>
                                                        <div className="cart_item_text">{(product.price * product.quantity).toFixed(2)} €</div>
                                                    </div>
                                                </div>
                                            </li>
                                            )}

                                    </ul>
                                </div>
                                <div className="order_total">
                                    <div className="order_total_content text-md-right">
                                        <div className="order_total_title">Order Total:</div>
                                        <div className="order_total_amount">{(cartWithQuantity.reduce((acc, product) => acc + (product.quantity * product.price), 0)).toFixed(2)} € </div>
                                    </div>
                                </div>
                                <div className="cart_buttons">
                                    <button type="button" onClick={() => {window.location.assign(ROUTES.products)}} className="btn btn-light btn-lg">Continue Shopping</button>
                                    <button type="button" onClick={onPurchase} className="btn btn-dark btn-lg">Checkout order</button>
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