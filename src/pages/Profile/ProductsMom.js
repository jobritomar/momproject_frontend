import { newOrder } from "../../api/orders"
import { indexCart, removeFromCart } from "../../api/cart"
import { ROUTES } from "../../router"


const fakeProps = [
    {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1200px-Banana-Single.jpg",
            name: "banana",
            description: "Banana, pacoba ou pacova é uma pseudobaga da bananeira, uma planta herbácea vivaz acaule da família Musaceae. São cultivadas em 130 países. Originárias do sudeste da Ásia são atualmente cultivadas em praticamente todas as regiões tropicais do planeta.",
            price: 1,
        },
        {
        image: "https://www.infoescola.com/wp-content/uploads/2010/03/kiwi.jpg",
        name: "kiwi",
        description: "Kiwi ou groselha chinesa é a baga comestível de várias espécies de videiras lenhosas no gênero Actinidia. O grupo de cultivares mais comum de kiwi é oval, do tamanho de um ovo de galinha grande: 5 a 8 centímetros de comprimento e 4,5 a 5,5 cm de diâmetro",
        price: 2.5,
        },

    {
        image: "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/320/320894/strawberry-on-white-background-to-represent-strawberry-tongue.jpg?w=1155&h=1541",
        name: "strawberry",
        description: "Morango é considerado, na linguagem vulgar, como o fruto vermelho do morangueiro, da família das rosáceas. No entanto, em termos científicos não se pode considerar um fruto já que é constituído pelo receptáculo da flor original, em volta do qual se dispõem os frutos",
        price: 2.5,
    },


] 


const ProductsMom = () => {

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
                                            fakeProps.map((product) => <li className="cart_item clearfix">
                                                <div className="cart_item_image"><img src={product.image} alt="product" /></div>
                                                <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                                    <div className="cart_item_name cart_info_col">
                                                        <div className="cart_item_title">Name</div>
                                                        <div className="cart_item_text">{product.name}</div>

                                                    </div>
                                                    <div className="cart_item_quantity cart_info_col">
                                                        <div className="cart_item_title">Description</div>
                                                        <div className="cart_item_text">{product.description}</div>
                                                        <div style={{ cursor: "pointer" }} >remove 1</div>
                                                        <div style={{ cursor: "pointer" }} >edit 1</div>
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
                                    <button type="button" className="button cart_button_clear">Add new product</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default ProductsMom