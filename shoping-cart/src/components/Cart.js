const Cart = (props) => {
    const { items } = props
    console.log(items)
    if (!items) {
console.log('n')
        return null
    }
    else console.log('cart')
    return  items.map(item => {
        return (
            console.log(item)
        )
    }) 
}
export default Cart 