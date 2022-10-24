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
          <Component {...pageProps} />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
