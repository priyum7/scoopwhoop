import "./App.css";
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";
import Tabs from "./Components/Tabs/Tabs";
import Footer from "./Components/Footer/Footer";
function App() {
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

export default App;
