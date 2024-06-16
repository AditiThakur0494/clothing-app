import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, button_type, ...otherprops }) => {
  return (
    <div>
      <button
        className={`button-container ${BUTTON_TYPE_CLASSES[button_type]}`}
        {...otherprops}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
