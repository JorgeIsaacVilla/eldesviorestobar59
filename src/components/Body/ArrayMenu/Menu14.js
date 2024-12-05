import React from "react";
import "./Menu.css";
import imagen1 from "./imgMenu14/img1.jpg";
import imagen2 from "./imgMenu14/img2.jpg";
import imagen3 from "./imgMenu14/img3.jpg";
/*import imagen4 from "./imgMenu14/img4.jpg";*/

/*Por solicitud del cliente este menú se mostrará de lunes a jueves */

function Menu14({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }

    const menuItem =[
    {pos:1,
    image:imagen1,
    food:"Combo Personal Perro Caliente",
    price:11000,
    ingredients:"Perro Sencillo + 100gr de Papas + Gaseosa PET 250ml Postobón"},

    {pos:2,
    image:imagen2,
    food:"Combo Personal Hamburguesa",
    price:23000,
    ingredients:"Hamburguesa de Pollo ó Carne, 100gr de papas + gaseosa PET 250ml Postobón"},

    {pos:3,
    image:imagen3,
    food:"Combo Para 2",
    price:25000,
    ingredients:"Una salvajada + Choributy + 200gr de Papas + 2 gaseosas PET 250ml Postobón"},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>COMBOS</h2>
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
export { Menu14 };