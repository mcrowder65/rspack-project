import { BrowserRouter, Redirect } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Redirect to="/one" from="/" exact />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
