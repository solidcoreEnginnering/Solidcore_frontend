
import Image from "next/image";

import styles from "./page.module.css";
import Navbar from "./components/Navbar/page";
import HomePage from "./components/Homepage/page";
import ProductsSection from "./components/Products/page";
import Productlist from "./components/category/page";
import MapSection from "./components/Map/page";

export default function Home() {


  return   <>
   <HomePage />
   <Productlist />
   <MapSection />

  </>
    
  
}
