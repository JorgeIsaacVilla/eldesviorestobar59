import React from "react";
import "./Menu.css";

import imagen1 from "./imgMenu5/img1.png";
import imagen4 from "./imgMenu5/img4.png";
import imagen5 from "./imgMenu5/img5.jpg";
import imagen6 from "./imgMenu5/img6.jpg";

import imageMaintenance from "../imgBody/imageMaintenance.png"

function Menu5({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }

    const menuItem =[
            
            {pos:1,
            image:imagen1,
            food:'chori-buti',
            price:'22000',
            ingredients:'Bollo Limpio | Lechuga | Papa Chongo | Chorizo y Butifarra | Tártara | Piña | Queso Costeño. '},
            
            {pos:2,
            image:imageMaintenance,
            food:'suizo',   
            price:'24000',
            ingredients:'Bollo Limpio | Lechuga | Papa Chongo | Salchicha Suiza | Tártara | Piña | Queso Costeño. '},
            
            {pos:3,
            image:imageMaintenance,
            food:'ranchero',
            price:'24000',
            ingredients:'Bollo Limpio | Lechuga | Papa Chongo | Salchicha Ranchera | Tártara | Piña | Queso Costeño. '},
            
            {pos:4,
            image:imagen4,
            food:'combinado',
            price:'27000',
            ingredients:'Bollo Limpio | Lechuga | Papa Chongo | Carne | Pollo | Chorizo | Butifarra | Tártara | Piña | Queso Costeño. '},
            
            {pos:5,
            image:imagen5,
            food:'pollo',
            price:'26000',
            ingredients:'Bollo Limpio | Lechuga | Papa Chongo | Pollo | Tártara | Piña | Queso Costeño. '},
            
            {pos:6,
            image:imagen6,
            food:'carne-pollo',
            price:'29000',
            ingredients:'Bollo Limpio | Lechuga | Papa Chongo | Carne y Pollo | Tártara | Piña | Queso Costeño. '},
            
            {pos:7,
            image:imageMaintenance,
            food:'lomito',
            price:'30000',
            ingredients:'Bollo Limpio | Lechuga | Papa Chongo | Lomito de Res | Tártara | Piña | Queso Costeño.'},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>DESGRANADOS</h2>
            <ul>
                {menuItem.map((item)=>
                <li key= {item.pos} onClick={() => handleItemclick(item)}>
                    <div className="item-contend">
                        <img
                            src={item.image}
                            alt={item.food ? `Imagen de ${item.food}` : ""}
                            loading="lazy"
                        />
                        <div>
                            <h3 
                             className="tittle-food">
                                {item.food.toUpperCase()}</h3>
                                <p className="ingredients">
                                    {item.ingredients}
                                </p>
                        </div>
                    </div>
                    <p className="price"> <strong>${item.price}</strong> </p>
                </li>
                )}
            </ul>
        </>
    )
};
export { Menu5 };