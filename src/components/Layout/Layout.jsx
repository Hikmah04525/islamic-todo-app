import React from "react";
import Header from "../Header"; // ✅ use your existing header
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">{/* pt-20 for fixed nav spacing */}
        {children}
      </main>
      <Footer />
    </div>
  );
}
