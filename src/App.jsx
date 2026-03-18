import Footer from "./components/layout/Footer";
import ScrollIndicator from "./components/layout/ScrollIndicator.jsx";


import Partnership from "./sections/Partnership";
import Portfolio from "./sections/Portfolio";
import Review from "./sections/Review";
import Services from "./sections/Services";
import Start from "./sections/Start";
import Technologies from "./sections/Technologies";
import Whyme from "./sections/Whyme";
import "./App.css";

function App() {
  return (
    <>
      <ScrollIndicator />

      <main className="container">
        <Start />
        <Services />
        <Technologies />
        <Portfolio />
        <Whyme />
        <Review />
        <Partnership />
      </main>
      <Footer/>
    </>
  );
}

export default App;
