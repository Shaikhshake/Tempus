import React from 'react';
import Invoice_Header from "./Header_Pages/Invoice_Header.js";
import Invoice_Hero from "./Hero_Pages/Invoice_hero.js";
import Invoice_Footer from './Footer_Pages/Invoice_Footer.js';

function Business_Invoice() {
  return (
    <div>
      <Invoice_Header/>
      <Invoice_Hero />
      <Invoice_Footer/>
    </div>
  );
}

export default Business_Invoice;