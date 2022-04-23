import { Button } from "../Button/Button.component";
import CartItem from "../CartItem/CartItem.component";

import "./CartDropdown.style.sass";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">{}</div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
