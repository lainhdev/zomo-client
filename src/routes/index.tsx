import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import OnboardingPage from "../pages/OnboardingPage";
import SigninPage from "../pages/auth/SigninPage";
import SignupPage from "../pages/auth/SignupPage";
import SigninWithPassword from "../pages/auth/SigninWithPassword";
import SignInSocial from "../pages/auth/SignInSocial";
import AuthenticationGuard from "../components/AuthenticationGuard";
import HomePage from "../pages/HomePage";
import RedirectPage from "../pages/RedirectPage";
import SchedulePage from "../pages/SchedulePage";
import ContactPage from "../pages/ContactPage";
import SettingPage from "../pages/SettingPage";
import AppLayout from "../components/AppLayout";
import RoomRedirectPage from "../pages/RoomRedirectPage";

const MainRoutes = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/welcome" element={<OnboardingPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin-with-password" element={<SigninWithPassword />} />
        <Route path="/auth/callback/google" element={<SignInSocial />} />
        <Route path="/auth/callback/github" element={<SignInSocial />} />
        <Route
          path="/app"
          element={
            <AuthenticationGuard>
              <AppLayout>
                <Outlet />
              </AppLayout>
            </AuthenticationGuard>
          }
        >
          <Route path="home" element={<HomePage />} />
          <Route path="schedules" element={<SchedulePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="setting" element={<SettingPage />} />
          <Route path="room/:id" element={<RoomRedirectPage />} />
        </Route>

        <Route path="/" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
