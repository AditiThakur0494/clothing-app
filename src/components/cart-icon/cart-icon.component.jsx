import { CartContext } from "../../context/cart.context";
import "./cart-icon.styles";
import { useContext } from "react";
import {
  CartIconContainer,
  CartItemCount,
  ShoppingIcon,
} from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  console.log(cartCount, "cartcoount");
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <CartItemCount>{cartCount}</CartItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
