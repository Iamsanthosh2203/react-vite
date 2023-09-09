import { Outlet } from "react-router-dom";
import Nav from "./constant/Nav.jsx";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
