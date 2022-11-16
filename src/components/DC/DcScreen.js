import React from "react";
import HeroList from "../hero/HeroList";

const DcScreen = () => {
  return (
    <div >
      <h1 style={{ width:"250px", height:"60px" ,backgroundColor:"white", borderRadius:"40px", textAlign:"center"}}>DcScreen</h1>
      <hr style={{backgroundColor:"white"}}/>
      <HeroList publisher={"DC Comics"} />
    </div>
  );
};

export default DcScreen;
