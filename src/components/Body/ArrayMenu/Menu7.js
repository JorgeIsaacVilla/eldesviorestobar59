import React from "react";
import "./Menu.css";
/*import imagen1 from "./imgMenu7/img1.jpg";
import imagen2 from "./imgMenu7/img2.jpg";
import imagen3 from "./imgMenu7/img3.jpg";
import imagen4 from "./imgMenu7/img4.jpg";
import imagen7 from "./imgMenu7/img5.jpg";*/

function Menu7({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }

    const menuItem =[

            {pos:1,
            image: "imagen1",
            food:'combinado',
            price:'30000',
            ingredients:'Patacón de Plátano Verde | Queso Costeño | Lechuga | Papa Chongo | Carne | Pollo | Chorizo | Butifarra | Tártara | Piña | Queso Mozzarella con Maíz. '},
            
            {pos:2,
            image: "imagen2",
            food:'pollo',
            price:'28000',
            ingredients:'Patacón de Plátano Verde | Queso Costeño | Lechuga | Papa Chongo | Pollo | Tártara | Piña | Queso Mozzarella con Maíz. '},
            
            {pos:3,
            image: "imagen3",
            food:'carne-pollo',
            price:'29000',
            ingredients:'Patacón de Plátano Verde | Queso Costeño | Lechuga | Papa Chongo | Carne | Pollo | Tártara | Piña | Queso Mozzarella con Maíz. '},
            
            {pos:4,
            image: "imagen4",
            food:'lomito',
            price:'30000',
            ingredients:'Patacón de Plátano Verde | Queso Costeño | Lechuga | Papa Chongo | Lomito de Res | Tártara | Piña | Queso Mozzarella con Maíz. '},
            
            {pos:5,
            image: "imagen5",
            food:'chori-buti',
            price:'25000',
            ingredients:'Patacón de Plátano Verde | Queso Costeño | Lechuga | Papa Chongo | Chorizo | Butifarra | Tártara | Piña | Queso Mozzarella con Maíz'},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>PATACONAZO</h2>
            <ul>
                {menuItem.map((item)=>
                <li key= {item.pos} onClick={() => handleItemclick(item)}>
                    <div className="item-contend">
                       {/*<img src={item.image} />*/}
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