import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-in-sign",
  inverted: "inverted",
};

const Button = ({ children, button_type, ...otherprops }) => {
  console.log(children);
  return (
    <div>
      <button
        className={`button-container ${BUTTON_TYPE_CLASSES[button_type]}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
