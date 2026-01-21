import React from "react";
import "./Menu.css";
import imagen6 from "./imgMenu4/img6.jpg";
import imagen8 from "./imgMenu4/img8.jpg";
import imagen10 from "./imgMenu4/img10.jpg";
import imagen12 from "./imgMenu4/img12.jpg";

import imageMaintenance from "../imgBody/imageMaintenance.png"

function Menu4({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }
    
    const menuItem =[
                    
            {pos:1,
            image:imageMaintenance,
            food:'sencillo',
            price:'18000',
            ingredients:'Pan Asado al Carbón | Salchicha | Queso | Papas Chongo | Lechuga | Tártara | Piña. '},
            
            {pos:2,
            image:imageMaintenance,
            food:'chori-buti',
            price:'22000',
            ingredients:'Pan | Chorizo | Butifarra | Queso | Papas Chongo | Lechuga | Tártara | Piña. '},
            
            {pos:3,
            image:imageMaintenance,
            food:'gemelo',
            price:'22000',
            ingredients:'Pan | Salchicha Doble | Queso | Papas Chongo | Lechuga | Tártara. '},
            
            {pos:4,
            image:imageMaintenance,
            food:'ranchero',
            price:'25000',
            ingredients:'Pan Asado al Carbón | Salchicha Ranchera | Queso | Papas | Chongo | Lechuga | Tártara | Piña. '},
            
            {pos:5,
            image:imageMaintenance,
            food:'suizo',
            price:'25000',
            ingredients:'Pan Asado al Carbón | Salchicha Suiza | Queso | Papas Chongo | Lechuga | Tártara | Piña. '},
            
            {pos:6,
            image:imagen6,
            food:'ítalo hawaiano',
            price:'27000',
            ingredients:'Pan Asado al Carbón | Papas Chongo | Lechuga | Tártara | Piña | Jamón | Tocineta | Queso Mozzarella | Salchicha. '},
            
            {pos:7,
            image:imageMaintenance,
            food:'lomito',
            price:'30000',
            ingredients:'Pan Asado al Carbón | Lomito de Res | Queso | Papas Chongo | Lechuga | Tártara | Piña. '},
            
            {pos:8,
            image:imagen8,
            food:'pollo',
            price:'27000',
            ingredients:'Pan Asado al Carbón | Pollo | Queso | Papas Chongo | Lechuga | Tártara | Piña. '},
            
            {pos:9,
            image:imageMaintenance,
            food:'carne-pollo',
            price:'29000',
            ingredients:'Pan Asado al Carbón | Carne | Pollo | Queso | Papas Chongo | Lechuga | Tártara | Piña. '},
            
            {pos:10,
            image:imagen10,
            food:'combinado',
            price:'29000',
            ingredients:'Pan Asado al Carbón | Carne | Pollo | Chorizo | Butifarra | Queso | Papas Chongo | Lechuga | Tártara | Piña. '},
            
            {pos:11,
            image:imageMaintenance,
            food:'jamón gratinado',
            price:'23000',
            ingredients:'Pan Asado al Carbón | Jamón | Queso Mozzarella | Papas Chongo | Lechuga | Tártara | Piña. '},
            
            {pos:12,
            image:imagen12,
            food:'escoces',
            price:'34000',
            ingredients:'Pan Asado al Carbón | Carne | Pollo | Chorizo | Butifarra | Queso Costeño | Queso Mozzarella Gratinado | Maíz | Papas Chongo | Lechuga | Tártara | Piña. '},
            
            {pos:13,
            image:imageMaintenance,
            food:'ítalo suizo',
            price:'30000',
            ingredients:'Pan Asado al Carbón | Papas Chongo | Lechuga | Tártara | Piña | Jamón | Tocineta | Queso Mozzarella | Salchicha Suiza.'},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>PERROS SALVAJES</h2>
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
export { Menu4 };