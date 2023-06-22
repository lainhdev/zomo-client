import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  emailPasswordSignUp,
  doesEmailExist,
  getAuthorisationURLWithQueryParamsAndSetState,
} from "supertokens-web-js/recipe/thirdpartyemailpassword";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  async function signUpClicked(
    email: string,
    password: string,
    nickname: string
  ) {
    try {
      const checked = await checkEmail(email);
      if (checked) return;

      const response = await emailPasswordSignUp({
        formFields: [
          {
            id: "email",
            value: email,
          },
          {
            id: "password",
            value: password,
          },
          {
            id: "nickname",
            value: nickname,
          },
        ],
      });

      if (response.status === "FIELD_ERROR") {
        // one of the input formFields failed validaiton
        response.formFields.forEach((formField) => {
          if (formField.id === "email") {
            // Email validation failed (for example incorrect email syntax),
            // or the email is not unique.
            toast.error(formField.error);
          } else if (formField.id === "password") {
            // Password validation failed.
            // Maybe it didn't match the password strength
            toast.error(formField.error);
          }
        });
      } else {
        // sign up successful. The session tokens are automatically handled by
        // the frontend SDK.
        navigate("/home");
      }
    } catch (err: any) {
      console.log({ err });
    }
  }

  async function checkEmail(email: string) {
    try {
      const response = await doesEmailExist({
        email,
      });

      if (response.doesExist) {
        toast.error("Email already exists. Please sign in instead");
        return true;
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
        Create New Account
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
          <img
            src="/icons/lock-gray.svg"
            alt="password"
            width={15}
            height={15}
          />
        </span>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="placeholder:text-slate-400 bg-gray-100 block bg-transparent rounded-xl w-full py-1 pl-5 pr-3 focus:outline-none focus:border-none focus:ring-0 sm:text-sm"
          placeholder="Password"
          type="password"
          name="password"
        />
      </label>
      <label className="relative block border border-gray-300 rounded-3xl px-2 py-2 pl-5 mt-5 bg-gray-100 mx-5">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <img
            src="/icons/person-pin.svg"
            alt="nickname"
            width={24}
            height={24}
          />
        </span>
        <input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="placeholder:text-slate-400 bg-gray-100 block bg-transparent rounded-xl w-full py-1 pl-5 pr-3 focus:outline-none focus:border-none focus:ring-0 sm:text-sm"
          placeholder="Nickname"
          name="nickname"
        />
      </label>
      <button
        onClick={() => signUpClicked(email, password, nickname)}
        className="bg-primary rounded-full text-white  w-80 mx-auto block py-3 my-10"
      >
        Sign up
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
        Already have an account?{" "}
        <Link to="/signin" className="text-primary">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
