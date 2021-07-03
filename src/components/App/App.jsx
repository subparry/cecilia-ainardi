import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../../styles/globalStyle";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Routes from "../Routes/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
