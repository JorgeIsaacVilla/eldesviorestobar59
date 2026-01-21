import React from "react";
import "./Menu.css";
/*import imagen1 from "./imgMenu12/img1.jpg";
import imagen2 from "./imgMenu12/img2.jpg";
import imagen3 from "./imgMenu12/img3.jpg";
import imagen4 from "./imgMenu12/img4.jpg";
import imagen5 from "./imgMenu12/img5.jpg";*/

import imageMaintenance from "../imgBody/imageMaintenance.png"

function Menu12({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }
    
    const menuItem =[
    {pos:1,
    image: imageMaintenance,
    food:"Lonja de Queso Mozzarella",
    price:4500,
    ingredients:""},

    {pos:2,
    image: imageMaintenance,
    food:"Jamón",
    price:4000,
    ingredients:""},

    {pos:3,
    image: imageMaintenance,
    food:"Picada De Bollo",
    price:6000,
    ingredients:""},

    {pos:4,
    image: imageMaintenance,
    food:"Salsa Tartara",
    price:1000,
    ingredients:""},

    {pos:5,
    image: imageMaintenance,
    food:"Salsa Piña",
    price:1000,
    ingredients:""},

    {pos:6,
    image: imageMaintenance,
    food:"Bollo",
    price:3000,
    ingredients:""},

    {pos:7,
    image: imageMaintenance,
    food:"Tocineta",
    price:5500,
    ingredients:""},

    {pos:8,
    image: imageMaintenance,
    food:"Butifarra",
    price:5000,
    ingredients:""},

    {pos:9,
    image: imageMaintenance,
    food:"Chorizo",
    price:5000,
    ingredients:""},

    {pos:10,
    image: imageMaintenance,
    food:"Grille",
    price:4000,
    ingredients:""},

    {pos:11,
    image: imageMaintenance,
    food:"Queso Mozzarella Gratinado",
    price:6000,
    ingredients:""},

    {pos:12,
    image: imageMaintenance,
    food:"Porción De Papa",
    price:6000,
    ingredients:""},

    {pos:13,
    image: imageMaintenance,
    food:"Maíz",
    price:5000,
    ingredients:""},

    {pos:14,
    image: imageMaintenance,
    food:"Manguera",
    price:5000,
    ingredients:""},

    {pos:15,
    image: imageMaintenance,
    food:"Suiza",
    price:11000,
    ingredients:""},

    {pos:16,
    image: imageMaintenance,
    food:"Ranchera",
    price:6000,
    ingredients:""},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>ADICIONALES</h2>
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
                                {item.food}</h3>
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
export { Menu12 };