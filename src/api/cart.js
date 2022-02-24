export const addToCart = (product) => {
    const cart = indexCart()

    const newCart = [...cart, product]

    localStorage.setItem("cart", JSON.stringify(newCart))
}

export const removeFromCart = (id) => {
    const cart = indexCart()

    console.log({id})

    const index = cart.findIndex((product) => product._id === id)
    const newCart = cart.filter((_, i) => index !== i)

    localStorage.setItem("cart", JSON.stringify(newCart))
}

export const indexCart = () => {
    const cartString = localStorage.getItem("cart")

    if (cartString === null) {
        return []
    }

    return JSON.parse(cartString)
}
