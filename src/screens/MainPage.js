import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import routes from "../routes/routes";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Resume from "./Resume";
import NotFound from "./NotFound";
import PreviewImageVideo from "./PreviewImageVideo";
import { AppContext } from "../contexts/AppContext";

function MainPage(props) {
  //
  const { state: { loading, preview }, dispatch, actions } = useContext(AppContext);
  const location = useLocation();
  const index = routes.findIndex((route) => route.to === location.pathname);
  useEffect(() => {
    //
    let timeOut;
    if (index !== -1) {
      dispatch(actions.updateData('loading', true));
      timeOut = setTimeout(() => {
        const pathname =
          location.pathname.replace("/", "") === ""
            ? "about-me"
            : location.pathname.replace("/", "");
        if (document.getElementById(pathname)) {
          window.scrollTo(
            0,
            document.getElementById(pathname).getBoundingClientRect().top +
            window.scrollY -
            40
          );
        }
        dispatch(actions.updateData('loading', false));
      }, 500);
    }
    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  //
  return (
    <div className="w-full">
      <Header />
      {index !== -1 ? (
        <>
          {loading && (
            <div
              className="w-full items-center justify-center flex fixed "
              style={{ height: "calc(100vh)", top: 88 }}
            >
              <i className="bx bx-loader-alt text-7xl circle__loading text-blue-600"></i>
            </div>
          )}
          <div
            className={`w-full ${loading ? "invisible" : ""}`}
            style={{ paddingTop: "88px" }}
          >
            <AboutMe />
            <Resume />
            <Projects />
          </div>
        </>
      ) : (
        <NotFound />
      )}
      <Footer />
      {preview && <PreviewImageVideo />}
    </div>
  );
}

export default MainPage;
