import React from "react";
import styles from "./style";

import { Header } from "./components";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} justify-center items-center`}>
        <div className={`${styles.boxWidth}`}>
          <Header/>
        </div>
      </div>
    </div>
  );
}

export default App;
