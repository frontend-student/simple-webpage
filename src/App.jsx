/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Heros from "./Components/Heros/Heros";
function App() {
  let heroData = [
    { test1: "Dive into", test2: "what you love" },
    { test1: "Indulge", test2: "your passions" },
    { test1: "Give in to", test2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
setInterval(() => {
  
  setHeroCount((count)=>{return count === 2?0: count+1})

}, 3000);


  }, [])


  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount} />

      <Navbar />
     <Heros
      
      setPlayStatus ={setPlayStatus}
     heroData={heroData[heroCount]}
     heroCount={heroCount}
     setHeroCount={setHeroCount}
     playStatus={playStatus}
     />
    </>
  );
}

export default App;
