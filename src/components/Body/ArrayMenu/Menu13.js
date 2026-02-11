import React from "react";
import "./Menu.css";

function Menu13({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }

    const menuItem =[
    {pos:1,
    food:"Empanadas de Carne, Salsa y Pico de Gallo X 6 Und",
    price:10000,
    ingredients:""},

    {pos:2,
    food:"Deditos de Queso y Salsa",
    price:12000,
    ingredients:""},

    {pos:3,
    food:"Yuquita Frita",
    price:8000,
    ingredients:""},

    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>ENTRADAS</h2>
            <ul>
                {menuItem.map((item)=>
                <li key= {item.pos}  onClick={() => handleItemclick(item)}>
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
export { Menu13 };