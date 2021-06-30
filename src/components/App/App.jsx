import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../../styles/globalStyle";
import Navbar from "../common/Navbar";
import Routes from "../Routes/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
