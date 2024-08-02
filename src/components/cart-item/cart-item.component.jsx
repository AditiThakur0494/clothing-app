import { React } from "react";
import { CartItemContainer, CartItemDetails } from "./cart-item.styles";

const CartItem = ({ cartitems }) => {
  const { name, price, quantity, imageUrl } = cartitems;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <CartItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x {price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
