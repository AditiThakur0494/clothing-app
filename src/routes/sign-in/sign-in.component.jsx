//import { doc } from "firebase/firestore";
import SignUpForm from "../../components/sign-up-form/sign-up.component";
//import { useEffect } from "react";
//import { getRedirectResult } from "firebase/auth";
import Button from "../../components/button/button.component";

import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  // useEffect(() => {
  //   const fetched_result = async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //     if (response) {
  //       const authResponse = await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   fetched_result();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>Sign In with Google </button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Redirect </button> */}
      <SignUpForm />
      <Button button_type="inverted" type="submit">
        Sign Up
      </Button>
    </div>
  );
};

export default SignIn;
