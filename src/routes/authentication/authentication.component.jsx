//import { doc } from "firebase/firestore";
import SignUpForm from "../../components/sign-up-form/sign-up.component";
//import Button from "../../components/button/button.component";
import SignIn from "../../components/sign-in/sign-in.component";
import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
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

  return (
    <AuthenticationContainer>
      <SignIn />
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Redirect </button> */}
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
