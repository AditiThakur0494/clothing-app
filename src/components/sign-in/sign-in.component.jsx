import { useState, useContext } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../Form-Input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ButtonsContainer, SignInContainer, Heading2 } from "./sign-in.styles";
import { UserContext } from "../../context/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  //console.log("here sign in");
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      setCurrentUser(user);

      resetFormFields();
    } catch (err) {
      console.log(err);
      switch (err.code) {
        case "auth/invalid-credential":
          alert("Password incorrect");
          break;
        case "auth/user-not-found":
          alert("no user associated with this");
          break;
        default:
          console.error(err.code, err.message);
      }
    }
  };
  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
      setCurrentUser(user);
      window.close(); // This should work if the popup window is in the same origin
    } catch (err) {
      console.error("Error during Google sign-in", err);
    }
  };

  const handleChange = (event) => {
    //console.log(event);
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <Heading2>Already have an account </Heading2>
      <span>Sign In with your email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button button_type={BUTTON_TYPE_CLASSES.inverted} type="submit">
            Sign-in
          </Button>
          <Button
            type="button"
            button_type={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
