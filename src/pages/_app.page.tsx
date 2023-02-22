import { useLayoutEffect } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import moment from "moment-jalaali";
// components
import DashboardLayout from "components/layouts/dashboard";
import ProfileLayout from "components/layouts/profile";
import ManageLayout from "components/layouts/manage/Main";
import QuickViewProvider from "providers/quickView";
// providers
import ProfileThemeProvider from "providers/profileTheme";
// styles
import "scss/index.scss";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const dashboardRoute = pathname.includes("home");
  const profileRoute = pathname.includes("profile");
  const manageRoute = pathname.includes("manage");

  useLayoutEffect(() => {
    moment.loadPersian({ dialect: "persian-modern" });
  }, [pathname]);

  const renderDashboard = () => {
    return (
      <ThemeProvider>
        <QuickViewProvider>
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        </QuickViewProvider>
      </ThemeProvider>
    );
  };

  const renderProfile = () => {
    return (
      <ThemeProvider>
        <ProfileThemeProvider>
          <QuickViewProvider>
            <ProfileLayout>
              <Component {...pageProps} />
            </ProfileLayout>
          </QuickViewProvider>
        </ProfileThemeProvider>
      </ThemeProvider>
    );
  };

  const renderManage = () => {
    return (
      <ThemeProvider>
        <ProfileThemeProvider>
          <QuickViewProvider>
            <ManageLayout>
              <Component {...pageProps} />
            </ManageLayout>
          </QuickViewProvider>
        </ProfileThemeProvider>
      </ThemeProvider>
    );
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        theme="dark"
        rtl
      />
      {dashboardRoute && renderDashboard()}
      {profileRoute && renderProfile()}
      {manageRoute && renderManage()}
      {!profileRoute && !dashboardRoute && !manageRoute && (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
