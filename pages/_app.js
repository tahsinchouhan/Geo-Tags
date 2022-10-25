import LocationContextProvider from "../AppContext";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className=" mx-auto text-black">
        <div className="z-50">
          <Navbar />
        </div>
        <div className="z-0">
          <LocationContextProvider>
            <Component {...pageProps} />
          </LocationContextProvider>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
