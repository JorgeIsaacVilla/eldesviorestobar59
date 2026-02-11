import React from "react";
import "./Menu.css";

import imagen1 from "./imgMenu6/img1.jpg";
import imagen3 from "./imgMenu6/img3.png";
import imagen6 from "./imgMenu6/img6.png";

import imageMaintenance from "../imgBody/imageMaintenance.png"

function Menu6({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }
    
    const menuItem =[

        {
        pos:1,
        image:imagen1,
        food:'Clásica de la casa',
        price:'25000',
        ingredients:(
        <>
            Pan Brioche | Carne (Previamente Asado al Carbón) | Queso Mozzarella | Tomate | Cebolla | Tártara de la Casa. 
            <br />
            <strong style={{fontSize: '15px', color: '#F29B14' }}>
                Por $8000 más lleva tu combo con papas y gaseosa 400ml
            </strong>
        </>
        )},
        
        {
        pos: 2,
        image:imageMaintenance,
        food: 'Clásica de pollo',
        price: '25000',
        ingredients: (
            <>
            Pan Brioche | Pollo (Previamente Asado al Carbón) | Queso Mozzarella | Tomate | Cebolla | Tártara de la Casa.
            <br />
            <strong style={{ fontSize: '15px', color: '#F29B14' }}>
                Por $8000 más lleva tu combo con papas y gaseosa 400ml
            </strong>
            </>
        )
        },
        
        {
        pos: 3,
        image:imagen3,
        food: 'doble carne',
        price: '35000',
        ingredients: (
            <>
            Pan Brioche | Doble Carne (Previamente Asado al Carbón) | Queso Mozzarella | Tomate | Cebolla | Tártara de la Casa.
            <br />
            <strong style={{ fontSize: '15px', color: '#F29B14' }}>
                Por $8000 más lleva tu combo con papas y gaseosa 400ml
            </strong>
            </>
        )
        },

        {
        pos: 4,
        image:imageMaintenance,
        food: 'Hamburguesa artesanal',
        price: '25000',
        ingredients: (
            <>
            Pan Brioche | Carne (Previamente Asado al Carbón) | Queso Mozzarella | Tomate | Cebolla Caramelizada | Salsa Tenesis.
            <br />
            <strong style={{ fontSize: '15px', color: '#F29B14' }}>
                Por $8000 más lleva tu combo con papas y gaseosa 400ml
            </strong>
            </>
        )
        },

        {
        pos: 5,
        image:imageMaintenance,
        food: 'Hamburguesa artesanal de pollo',
        price: '25000',
        ingredients: (
            <>
            Pan Brioche | Pollo (Previamente Asado al Carbón) | Queso Mozzarella | Tomate | Cebolla | Salsa Tenesis.
            <br />
            <strong style={{ fontSize: '15px', color: '#F29B14' }}>
                Por $8000 más lleva tu combo con papas y gaseosa 400ml
            </strong>
            </>
        )
        },

        {
        pos: 6,
        image:imagen6 ,
        food: 'Hamburguesa London',
        price: '38000',
        ingredients: (
            <>
            Pan Artesanal | Lechuga Crespa | Salsa Tenesis | Pechuga de Pollo | Carne de Res | Bondiola de Cerdo | Queso Mozzarella | Queso Cheeda | Tomate | Cebolla.
            <br />
            <strong style={{ fontSize: '15px', color: '#F29B14' }}>
                Por $8000 más lleva tu combo con papas y gaseosa 400ml
            </strong>
            </>
        )
        },

    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>HAMBURGUESAS</h2>
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
export { Menu6 };