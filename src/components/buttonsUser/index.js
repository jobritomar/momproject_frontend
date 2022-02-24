import { ROUTES } from "../../router/constants"

const ButtonsUser = () => {

    return (
        <div>

            <a href={ROUTES.cart} className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Cart</a>
            <a href={ROUTES.orders} className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Orders</a>
        </div>


    )
}




export default ButtonsUser 

