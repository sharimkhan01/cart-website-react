import SignUpForm from "../../components/sign-up-form/sign-up-form.components";
import SignInForm from "../../components/sign-in-form/sign-in-form.components";

import "./authentication.styles.scss";

const Auth = () => {
  return (
    <div className="authentication-container">
      {/* <h1>Auth Page</h1> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Auth;
