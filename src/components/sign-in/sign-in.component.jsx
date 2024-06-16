import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../Form-Input/form-input.component";
import Button from "../button/button.component";
import "./sign-in.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    console.log("here");
    event.preventDefault();
    try {
      const response = await signInUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (err) {
      console.log(err);
      // switch (err.code) {
      //   case "auth/invalid-credential":
      //     alert("Password incorrect");
      //     break;
      //   case "auth/user-not-found":
      //     alert("no user associated with this");
      //     break;
      //   default:
      //     console.error(err.code, err.message);
      //}
    }
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    await createUserDocumentFromAuth(user);
  };

  const handleChange = (event) => {
    //console.log(event);
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account </h2>
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
        <div className="buttons-container">
          <Button button_type="inverted" type="submit">
            Sign-in
          </Button>
          <Button type="button" button_type="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
