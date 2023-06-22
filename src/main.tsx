import React from "react";
import ReactDOM from "react-dom/client";
import MainRoutes from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";
import SuperTokens from "supertokens-web-js";
import Session from "supertokens-web-js/recipe/session";
import ThirdPartyEmailPassword from "supertokens-web-js/recipe/thirdpartyemailpassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

SuperTokens.init({
  appInfo: {
    apiBasePath: "/auth",
    appName: "Zomo",
    apiDomain: import.meta.env.VITE_REACT_APP_API_SERVER_URL,
  },
  recipeList: [Session.init(), ThirdPartyEmailPassword.init()],
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainRoutes />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
