import React from "react";
import "./Menu.css";

import imagen5 from "./imgMenu7/img5.jpg";

import imageMaintenance from "../imgBody/imageMaintenance.png"

function Menu7({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }

    const menuItem =[

            {pos:1,
            image: imageMaintenance,
            food:'combinado',
            price:'34000',
            ingredients:'Patacón de Plátano Verde | Queso Costeño | Lechuga | Papa Chongo | Carne | Pollo | Chorizo | Butifarra | Tártara | Piña | Queso Mozzarella con Maíz. '},
            
            {pos:2,
            image: imagen5,
            food:'pollo',
            price:'32000',
            ingredients:'Patacón de Plátano Verde | Queso Costeño | Lechuga | Papa Chongo | Pollo | Tártara | Piña | Queso Mozzarella con Maíz. '},
            
            {pos:3,
            image: imagen5,
            food:'carne-pollo',
            price:'34000',
            ingredients:'Patacón de Plátano Verde | Queso Costeño | Lechuga | Papa Chongo | Carne | Pollo | Tártara | Piña | Queso Mozzarella con Maíz. '},
            
            {pos:4,
            image: imageMaintenance,
            food:'lomito',
            price:'34000',
            ingredients:'Patacón de Plátano Verde | Queso Costeño | Lechuga | Papa Chongo | Lomito de Res | Tártara | Piña | Queso Mozzarella con Maíz. '},
            
            {pos:5,
            image: imagen5,
            food:'chori-buti',
            price:'28000',
            ingredients:'Patacón de Plátano Verde | Queso Costeño | Lechuga | Papa Chongo | Chorizo | Butifarra | Tártara | Piña | Queso Mozzarella con Maíz'},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>PATACONAZO</h2>
            <ul>
                {menuItem.map((item)=>
                <li key= {item.pos} onClick={() => handleItemclick(item)}>
                    <div className="item-contend">
                       <img src={item.image} />
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
export { Menu7 };