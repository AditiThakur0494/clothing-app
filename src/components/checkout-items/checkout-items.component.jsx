import {
  RemoveButton,
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
} from "./checkout-items.styles";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const CheckoutItem = ({ item }) => {
  // console.log(item);
  const { id, name, quantity, imageUrl, price } = item;
  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const removeItemHandler = () => {
    removeItemToCart(item);
  };

  const addItemHandler = () => {
    addItemToCart(item);
  };

  const clearCartHandler = () => {
    clearItemFromCart(item);
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearCartHandler}>&#10005; </RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
