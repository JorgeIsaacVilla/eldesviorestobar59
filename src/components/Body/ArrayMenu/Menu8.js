import React from "react";
import "./Menu.css";

import imagen3 from "./imgMenu8/img3.jpg";
import imagen4 from "./imgMenu8/img4.jpg";
import imagen5 from "./imgMenu8/img5.jpg";
import imagen6 from "./imgMenu8/img6.jpg";

import imageMaintenance from "../imgBody/imageMaintenance.png"

function Menu8({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }
    
    const menuItem =[

            {pos:1,
            image: imageMaintenance,
            food:'Costillas BBQ',
            price:'38000',
            ingredients:'400g de Costillitas de Cerdo Asado al Carbón | Salsa BBQ | Papas Francesas | Ensalada. '},
            
            {pos:2,
            image: imageMaintenance,
            food:'Chuleta de cerdo',
            price:'35000',
            ingredients:'Loncha de Pernil Asado al Carbón | Papas Francesas | Ensalada. '},
            
            {pos:3,
            image: imagen3,
            food:'parrillada mixta',
            price:'38000',
            ingredients:'150g de Carne Asado al Carbón | Pollo | Chorizo | Butifarra | Ensalada | Chimichurri Artesanal. '},
            
            {pos:4,
            image: imagen4,
            food:'Pechuga Gratinada',
            price:'35000',
            ingredients:'300g de Pechuga de Pollo Asado al Carbón | Gratinada en Queso Mozzarella | Papas Francesas | Ensalada. '},
            
            {pos:5,
            image: imagen5,
            food:'pechuga asada',
            price:'30000',
            ingredients:'300g de Pechuga de Pollo Asado al Carbón | Papas Francesas | Ensalada. '},

            {pos:6,
            image: imagen6,
            food:'Punta gorda',
            price:'45000',
            ingredients:'300gr de Punta Gorda Asada al Carbón | Papas Francesas | Ensalada '},
            
            {pos:7,
            image: imageMaintenance,
            food:'Lomo de res asado al carbón',
            price:'38000',
            ingredients:'300g de Lomo Ancho | Papas Francesas | Ensalada del Día | Mazorca Dulce Asada | Chimichurri Artesanal.'},

            {pos:8,
                image: imageMaintenance,
                food:'Bondiola De Cerdo',
                price:'32000',
                ingredients:'300g de Bondiola | Ensalada.'},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>ASADOS</h2>
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
export { Menu8 };