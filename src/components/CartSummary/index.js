import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalAmount = cartList.map(each => each.price * each.quantity)
      const sum = totalAmount.reduce((a, b) => a + b, 0)
      console.log(sum)
      const itemsCount = cartList.length
      return (
        <div className="cart-summary-con">
          <h1 className="total">
            Order Total : <span className="total-amount">Rs.{sum}</span>
          </h1>
          <p className="cart-count">{itemsCount} items in Cart</p>
          <button className="checkout-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
