// components/Layout/Layout.tsx
import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";

const Layout = () => {
  return (
    <>
      <Banner />
      <Outlet />
    </>
  );
};

export default Layout;
