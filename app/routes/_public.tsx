import { Outlet } from "@remix-run/react";
import React from "react";
import Footer from "~/components/Dashboard/Footer";
import Header from "~/components/Dashboard/Header";

const Public = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Public;
