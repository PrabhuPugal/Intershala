import React from "react";
import styles from "./style";

import { Header,Hero,Marketing,Business,Advertisements,Testimonials,Faq,Footer } from "./components";
import {bg} from "./assets";

function App() {
  return (
    <div className="w-full overflow-hidden bg-no-repeat bg-[length:1864px_1050px] bg-[url('./assets/bg.jpg')] ">
      <div className={` ${styles.paddingX}`}>
        <Header/>
        <Hero/>
        <Marketing/>
        <Business/>
        <Advertisements/>
        <Testimonials/>
        <Faq/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
