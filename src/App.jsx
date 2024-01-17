import { useState } from "react";
import "./App.css";
import CardInfo from "./components/Card";
import Proyects from "./components/Proyects";
import Info from "./components/Info";
import Socials from "./components/Socials";
import Email from "./components/Email";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="all-container" className=" bg-gray-800 font-jakarta ">
        <div className="flex flex-col mx-auto md:w-full justify-center border-l-gray-900">
          <CardInfo />
          <Info />
          <Proyects />
          <Socials/>
          <Email/>    
        </div>
      </div>
    </>
  );
}

export default App;
