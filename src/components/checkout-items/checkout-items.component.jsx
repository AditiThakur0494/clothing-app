import "./checkout-items.styles.scss";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const CheckoutItem = ({ item }) => {
  console.log(item);
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
    <div key={id} className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearCartHandler}>
        &#10005;{" "}
      </div>
    </div>
  );
};
export default CheckoutItem;
