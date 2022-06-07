import React, { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full h-screen lg:h-screen bg-slate-100 ">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
