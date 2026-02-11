import React from "react";
import "./Menu.css";

function Menu12({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }
    
    const menuItem =[
    {pos:1,
    food:"Lonja de Queso Mozzarella",
    price:4500,
    ingredients:""},

    {pos:2,
    food:"Jamón",
    price:4000,
    ingredients:""},

    {pos:3,
    food:"Picada De Bollo",
    price:6000,
    ingredients:""},

    {pos:4,
    food:"Salsa Tartara",
    price:1000,
    ingredients:""},

    {pos:5,
    food:"Salsa Piña",
    price:1000,
    ingredients:""},

    {pos:6,
    food:"Bollo",
    price:3000,
    ingredients:""},

    {pos:7,
    food:"Tocineta",
    price:5500,
    ingredients:""},

    {pos:8,
    food:"Butifarra",
    price:5000,
    ingredients:""},

    {pos:9,
    food:"Chorizo",
    price:5000,
    ingredients:""},

    {pos:10,
    food:"Grille",
    price:4000,
    ingredients:""},

    {pos:11,
    food:"Queso Mozzarella Gratinado",
    price:6000,
    ingredients:""},

    {pos:12,
    food:"Porción De Papa",
    price:6000,
    ingredients:""},

    {pos:13,
    food:"Maíz",
    price:5000,
    ingredients:""},

    {pos:14,
    food:"Manguera",
    price:5000,
    ingredients:""},

    {pos:15,
    food:"Suiza",
    price:11000,
    ingredients:""},

    {pos:16,
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