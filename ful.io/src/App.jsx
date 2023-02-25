import React from "react";
import styles from "./style";

import { Header } from "./components";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} `}>
        <Header/>
      </div>
    </div>
  );
}

export default App;
