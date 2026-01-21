import React from "react";
import "./Menu.css";

import imagen6 from "./imgMenu2/img6.jpg";
import imagen10 from "./imgMenu2/img10.jpg";

import imageMaintenance from "../imgBody/imageMaintenance.png"

function Menu2({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }

    const menuItem =[
        {pos:1,
        image: imageMaintenance,
        food:'SENCILLO',
        price:'14000',
        ingredients:'Maíz | Lechuga | Papa Chongo | Salsa Tártara | Piña | Queso Costeño. '},
        
        {pos:2,
        image: imageMaintenance,
        food:'GRATINADA',
        price:'17000',
        ingredients:'Maíz | Lechuga | Papa Chongo | Salsa Tártara | Piña | Queso Mozzarella. '},
        
        {pos:3,
        image: imageMaintenance,
        food:'HAWAIANA',
        price:'20000',
        ingredients:'Maíz | Lechuga | Papa Chongo | Salsa Tártara | Piña | Queso Mozzarella | Piña Caramelizada | Tocineta en Cuadrito. '},
        
        {pos:4,
        image: imageMaintenance,
        food:'RANCHERO',
        price:'23000',
        ingredients:'Maíz | Lechuga | Papa Chongo | Salsa Tártara | Piña | Queso Costeño | Salchicha Ranchera. '},
        
        {pos:5,
        image: imageMaintenance,
        food:'SUIZA',
        price:'24000',
        ingredients:'Maíz | Lechuga | Papa Chongo | Salsa Tártara | Piña | Queso Costeño | Salchicha Suiza. '},
        
        {pos:6,
        image: imagen6,
        food:'POLLO',
        price:'26000',
        ingredients:'Maíz | Lechuga | Papa Chongo | Salsa Tártara | Piña | Queso Costeño | Pollo. '},
        
        {pos:7,
        image: imageMaintenance,
        food:'CARNE-POLLO (MIXTA)',
        price:'29000',
        ingredients:'Maíz | Lechuga | Papa Chongo | Salsa Tártara | Piña | Queso Costeño | Carne y Pollo.'},
        
        {pos:8,
        image: imageMaintenance,
        food:'CHORI-BUTI',
        price:'22000',
        ingredients:'Maíz | Lechuga | Papa Chongo | Salsa Tártara | Piña | Queso Costeño | Chorizo | Butifarra. '},
        
        {pos:9,
        image: imageMaintenance,
        food:'LOMITO',
        price:'31000',
        ingredients:'Maíz | Lechuga | Papa Chongo | Salsa Tártara | Piña | Queso Costeño | Lomito de Res. '},
        
        {pos:10,
        image: imagen10,
        food:'COMBINADO',
        price:'30000',
        ingredients:'Maíz | Lechuga | Papa Chongo | Salsa Tártara | Piña | Queso Costeño | Carne | Pollo | Chorizo | Butifarra.'},
    ]
    
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>MAZORCAS</h2>
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
export { Menu2 };