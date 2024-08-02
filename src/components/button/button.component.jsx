import { BaseButton, GoogleSignIn, Inverted } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (button_type = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignIn,
    [BUTTON_TYPE_CLASSES.inverted]: Inverted,
  }[button_type]);

const Button = ({ children, button_type, ...otherprops }) => {
  const CustomButton = getButton(button_type);
  return <CustomButton {...otherprops}>{children}</CustomButton>;
};

export default Button;
