import React from 'react';
import Employer_Header from "./Header_Pages/TimeSheet_Header.js";
import TimeSheet_hero from "./Hero_Pages/TimeSheet_hero.js";
import Footer from "./Footer_Pages/TimeSheet_Footer.js";

function Freelancer_TimeSheet() {
  return (
    <div className="business-mode">
      <Employer_Header/>
      <TimeSheet_hero/>
      <Footer/>
    </div>
  );
}

export default Freelancer_TimeSheet;