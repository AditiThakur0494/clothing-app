import { doc } from "firebase/firestore";
import SignUpForm from "../../components/sign-up-form/sign-up.component";

import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    createUserDocumentFromAuth(user);
  };

  // const logGoogleUserRedirect = async () => {
  //   const redirectResponse = await signInWithGoogleRedirect();
  //   console.log(redirectResponse);
  // };

  return (
    <div>
      <p> Signin </p>
      <button onClick={logGoogleUser}>SIgn In with Google </button>
      {/* //<button onClick={logGoogleUserRedirect}>
        SIgn In with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
