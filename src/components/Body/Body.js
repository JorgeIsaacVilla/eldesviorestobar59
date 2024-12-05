import React, { useState } from "react";
import "./Body.css";
import { Slider } from "./SliderCategory/Slider";
import { Menu1 } from "./ArrayMenu/Menu1";
import { Menu2 } from "./ArrayMenu/Menu2";
import { Menu3 } from "./ArrayMenu/Menu3";
import { Menu4 } from "./ArrayMenu/Menu4";
import { Menu5 } from "./ArrayMenu/Menu5";
import { Menu6 } from "./ArrayMenu/Menu6";
import { Menu7 } from "./ArrayMenu/Menu7";
import { Menu8 } from "./ArrayMenu/Menu8";
import { Menu9 } from "./ArrayMenu/Menu9";
import { Menu10 } from "./ArrayMenu/Menu10";
import { Menu11 } from "./ArrayMenu/Menu11";
import { Menu12 } from "./ArrayMenu/Menu12";
import { Menu13 } from "./ArrayMenu/Menu13";
/*import { Menu14 } from "./ArrayMenu/Menu14";*/
import { BannerProduct } from "./BannerProduct/BannerProduct";

function Body() {

  /*Lógica para mostrar menú solo de lunes a jueves (inicio) */
  //const today = new Date().getDay(); /* Obtener el dia actual de la semana*/
  //const showMenu14 = today >= 1 && today <= 4; //verificación de días
  /*Lógica para mostrar menú solo de lunes a jueves (fin) */
  
  /*Lógica de banner de producto (inicio) */
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (item) => {
    setSelectedProduct(item);
    setIsBannerVisible(true);
  };

  const closeProductBanner = () => {
    setIsBannerVisible(false);
  }

  /*Lógica de banner de producto (fin) */

  return (
  <>
    {isBannerVisible && <BannerProduct productInfo={selectedProduct} onClose={closeProductBanner}/>}
      <Slider 
      targetSection1="section1" 
      targetSection2="section2" 
      targetSection3="section3" 
      targetSection4="section4" 
      targetSection5="section5"
      targetSection6="section6"
      targetSection7="section7"
      targetSection8="section8"
      targetSection9="section9"
      targetSection10="section10"
      targetSection11="section11"
      targetSection12="section12"
      targetSection13="section13"
      targetSection14="section14"
      />
      <div className="component-body">
        <Menu1 sectionId="section1" onProductClick={handleProductClick}/>
        <Menu2 sectionId="section2" onProductClick={handleProductClick}/>
        <Menu3 sectionId="section3" onProductClick={handleProductClick}/>
        <Menu4 sectionId="section4" onProductClick={handleProductClick}/>

{/*Solicitud Cliente (inicio) 
//Por solicitud del cliente este menú se mostrara de lunes a jueves}
//por solicitud del cliente este menú ira despues del menú perros salvaje (Menú4)*/}
        {/*showMenu14 && <Menu14 sectionId="section14" onProductClick={handleProductClick}/>*/}
{/*Solicitud Cliente (Fin) */}

        <Menu5 sectionId="section5" onProductClick={handleProductClick}/>
        <Menu6 sectionId="section6"  onProductClick={handleProductClick}/>
        <Menu7 sectionId="section7"  onProductClick={handleProductClick}/>
        <Menu8 sectionId="section8"  onProductClick={handleProductClick}/>
        <Menu9 sectionId="section9"  onProductClick={handleProductClick}/>
        <Menu10 sectionId="section10"  onProductClick={handleProductClick}/>
        <Menu11 sectionId="section11" onProductClick={handleProductClick}/>
        <Menu12 sectionId="section12"  onProductClick={handleProductClick}/>
        <Menu13 sectionId="section13"  onProductClick={handleProductClick}/>
      </div>
  </>
  );
}

export { Body };
