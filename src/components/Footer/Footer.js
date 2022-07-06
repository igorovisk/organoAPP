import React from "react";
import "./Footer.css";

function Footer() {
   return (
      <div className="footer">
         <span className="midia-container">
            <img src="/images/fb.png" />
            <img src="/images/tw.png" />
            <img src="/images/ig.png" />
         </span>
         <span className="logo-container">
            <img src="./images/logo.png" />
         </span>
         <p>Desenvolvido por Alura.</p>
      </div>
   );
}

export default Footer;
