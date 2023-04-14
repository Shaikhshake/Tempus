import React from 'react';
import Inventory_Header from "./Header_Pages/Inventory_Header.js";
import Inventory_hero from "./Hero_Pages/Inventory_hero.js";
import Inventory_Footer from "./Footer_Pages/Inventory_Footer.js";

function Business_Inventory() {
  return (
    <div className="business-mode">
      <Inventory_Header/>
      <Inventory_hero/>
      <Inventory_Footer/>
    </div>
  );
}

export default Business_Inventory;