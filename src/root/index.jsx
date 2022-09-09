import React from "react";
import Home from "../components/Home";
import Templates from "../components/Templates";
import Pages from "../components/Pages";
import Elements from "../components/Elements";
import Navbar from "../components/Navbar";
import {
  Navigate,
   Route,
  Routes,
  useLocation,
} from "react-router-dom";

export const Root = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  console.log(query.get("name"));
  return (
    <div>
      <h1>We are here {location.pathname}</h1>
      <Routes>
        <Route element={<Navbar />}>
          <Route exact path={"/"} element={<Navigate to={"/home"} />} />
          <Route exact path={"/ "} element={<Home />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/templates"} element={<Templates />} />
          <Route path={"/pages"} element={<Pages />} />
          <Route path={"/elements"} element={<Elements />} />
          <Route path={"*"} element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </div>
  );
};
export default Root;

{
  /* <Routes>
        <Route exact path={"/"}>
          <Navigate to={"/home"} />
        </Route>
        <Route exact path={"/home"} component={Navbar} />
        <Route path={"/templates"} component={Navbar} />
        <Route path={"/pages"} component={Navbar} />
        <Route path={"/elements"} component={Navbar} />

        <Route exact path={"/ "} component={Home} />
        <Route  path={"/home"} component={Home} />
        <Route path={"/templates"} component={Templates} />
        <Route path={"/pages"} component={Pages} />
        <Route path={"/elements"} component={Elements} />
        <Route path={"*"}>
          <h1>404 Not Found</h1>
        </Route>
      </Routes> */
}
