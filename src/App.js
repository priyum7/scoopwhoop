import "./App.css";
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";
import Tabs from "./Components/Tabs/Tabs";
import Footer from "./Components/Footer/Footer";

import MobileHeader from "./Components/Header/MobileHeader/MobileHeader";
import MobileTabs from "./Components/Tabs/MobileTabs/MobileTabs";

import { useEffect, useState } from "react";
function App() {
  const [clientWidth, setClientWidth] = useState(window.innerWidth);

  const handleSizeChanges = () => {
    setClientWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSizeChanges);
    return () => {
      window.removeEventListener("resize", handleSizeChanges);
    };
  }, []);

  if (clientWidth < 768) {
    return (
      <>
        <MobileHeader />
        <MobileTabs />
      </>
    );
  } else {
    return (
      <div className="App">
        <Header />
        <div class="responsive_container">
          <Tabs />
          <Cards />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
