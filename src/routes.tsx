import { BrowserRouter, Route, Routes } from "react-router-dom";
import One from "./one";
import Two from "./two";
const _Routes = () => {
  return (
    <Routes>
      <Route path="/one" Component={One} />
      <Route path="/two" Component={Two} />
    </Routes>
  );
};

export default _Routes;
