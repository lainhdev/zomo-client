import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuthorisationURLWithQueryParamsAndSetState } from "supertokens-web-js/recipe/thirdpartyemailpassword";

const SigninPage = () => {
  async function socialSignInClicked(provider: string) {
    try {
      const authUrl = await getAuthorisationURLWithQueryParamsAndSetState({
        providerId: provider,

        authorisationURL: `${import.meta.env.VITE_REACT_APP_DOMAIN}/auth/callback/${provider}`,
      });

      window.location.assign(authUrl);
    } catch (err: any) {
      console.log({ err });
    }
  }

  return (
    <div>
      <img
        src="/introduction/login.png"
        alt="banner"
        className="mx-auto mt-16"
      />
      <h1 className="text-3xl text-center font-bold mt-10">Let's you in</h1>
      <button
        onClick={() => toast.info("This feature is under development")}
        className="flex flex-row items-center mx-auto mt-5 w-80 justify-center py-3 border border-gray-300 rounded-xl"
      >
        <img
          className="inline mr-2"
          src="/icons/facebook.svg"
          alt="facebook"
          width={13}
          height={13}
        />
        <span>Continue with Facebook</span>
      </button>
      <button
        onClick={() => socialSignInClicked("google")}
        className="flex flex-row items-center mx-auto mt-5 w-80 justify-center py-3 border border-gray-300 rounded-xl"
      >
        <img
          className="inline mr-2"
          src="/icons/google.svg"
          alt="google"
          width={20}
          height={20}
        />
        <span>Continue with Google</span>
      </button>
      <button
        onClick={() => socialSignInClicked("github")}
        className="flex flex-row items-center mx-auto mt-5 w-80 justify-center py-3 border border-gray-300 rounded-xl mb-10"
      >
        <img
          className="inline mr-2"
          src="/icons/github.svg"
          alt="github"
          width={20}
          height={20}
        />
        <span>Continue with Github</span>
      </button>
      <p className="line-throw">
        <span>Or</span>
      </p>
      <Link
        to="/signin-with-password"
        className="bg-primary rounded-full text-white w-80 mx-auto block py-3 mt-10 text-center"
      >
        Sign in with password
      </Link>
      <p className="text-center text-sm mt-3 text-gray-500">
        Don't have an account?{" "}
        <Link to="/signup" className="text-primary">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SigninPage;
