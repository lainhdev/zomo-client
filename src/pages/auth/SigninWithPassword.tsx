import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  emailPasswordSignIn,
  getAuthorisationURLWithQueryParamsAndSetState,
} from "supertokens-web-js/recipe/thirdpartyemailpassword";

const SigninWithPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function signInClicked(email: string, password: string) {
    try {
      const response = await emailPasswordSignIn({
        formFields: [
          {
            id: "email",
            value: email,
          },
          {
            id: "password",
            value: password,
          },
        ],
      });

      if (response.status === "FIELD_ERROR") {
        response.formFields.forEach((formField) => {
          if (formField.id === "email") {
            // Email validation failed (for example incorrect email syntax).
            toast.error(formField.error);
          }
        });
      } else if (response.status === "WRONG_CREDENTIALS_ERROR") {
        toast.error("Email password combination is incorrect.");
      } else {
        navigate("/app/home");
      }
    } catch (err: any) {
      console.log({ err });
    }
  }

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
    <div className="max-w-xl mx-auto">
      <img
        src="/logo/logo-word.svg"
        className="block mx-auto mt-20"
        alt="logo"
      />
      <h1 className="text-3xl font-bold text-center mt-16">
        Login to Your Account
      </h1>
      <label className="relative block border border-gray-300 rounded-3xl px-2 py-2 pl-5 mt-10 bg-gray-100 mx-5">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <img src="/icons/mail-gray.svg" alt="email" width={20} height={20} />
        </span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="placeholder:text-slate-400 bg-gray-100 block bg-transparent rounded-xl w-full py-1 pl-5 pr-3 focus:outline-none focus:border-none focus:ring-0 sm:text-sm"
          placeholder="Email"
          name="email"
        />
      </label>
      <label className="relative block border border-gray-300 rounded-3xl px-2 py-2 pl-5 mt-5 bg-gray-100 mx-5">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <img src="/icons/lock-gray.svg" alt="email" width={18} height={18} />
        </span>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="placeholder:text-slate-400 bg-gray-100 block bg-transparent rounded-xl w-full py-1 pl-5 pr-3 focus:outline-none focus:border-none focus:ring-0 sm:text-sm"
          placeholder="password"
          type="password"
          name="password"
        />
      </label>
      <button
        onClick={() => signInClicked(email, password)}
        className="bg-primary rounded-full text-white  w-80 mx-auto block py-3 my-10"
      >
        Sign In
      </button>
      <p className="line-throw text-gray-400">
        <span>or continue with</span>
      </p>
      <div className="flex flex-row justify-around mt-10 mx-5">
        <button onClick={() => toast.info("This feature is under development")}>
          <img
            src="/icons/facebook-circle.svg"
            alt="email"
            width={35}
            height={35}
          />
        </button>
        <button onClick={() => socialSignInClicked("google")}>
          <img src="/icons/google.svg" alt="email" width={35} height={35} />
        </button>
        <button onClick={() => socialSignInClicked("github")}>
          <img src="/icons/github.svg" alt="email" width={35} height={35} />
        </button>
      </div>
      <p className="text-center text-sm text-gray-500 my-10">
        Don't have an account?{" "}
        <Link to="/signup" className="text-primary">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SigninWithPassword;
