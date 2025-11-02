"use client";

import Navbar from "./components/Navbar/page";
import HomePage from "./components/Homepage/page";

import Productlist from "./components/category/page";
import MapSection from "./components/Map/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Productlist />
      <MapSection />
    </>
  );
}
