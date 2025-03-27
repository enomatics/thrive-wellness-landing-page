import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <div className="bg-mint-bg flex min-h-[100dvh] flex-col">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
