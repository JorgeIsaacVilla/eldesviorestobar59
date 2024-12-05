import React from "react";
import "./Menu.css";
/*import imagen1 from "./imgMenu3/img1.jpg";
import imagen2 from "./imgMenu3/img2.jpg";
import imagen3 from "./imgMenu3/img3.jpg";
import imagen4 from "./imgMenu3/img4.jpg";
import imagen5 from "./imgMenu3/img5.jpg";*/

function Menu3({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }
    
    const menuItem =[
            {pos:1,
            image: "imagen1",
            food:'SENCILLA',
            price:'16000',
            ingredients:'Papas Francesas | Adobadas con Aliños de la Casa | Lechuga | Papa Chongo | Salchicha | Tártara | Piña | Queso Costeño. '},
            
            {pos:2,
            image: "imagen2",
            food:'GRATINADA',
            price:'19000',
            ingredients:'Papas Francesas | Adobadas con Aliños de la Casa | Lechuga | Papa Chongo | Salchicha | Tártara | Piña | Queso Costeño | Queso Mozzarella Gratinado. '},
            
            {pos:3,
            image: "imagen3",
            food:'RANCHERA',
            price:'21000',
            ingredients:'Papas Francesas | Adobadas con Aliños de la Casa | Lechuga | Papa Chongo | Salchicha Ranchera | Tártara | Piña | Queso Costeño. '},
            
            {pos:4,
            image: "imagen4",
            food:'SUIZA',
            price:'23000',
            ingredients:'Papas Francesas | Adobadas con Aliños de la Casa | Lechuga | Papa Chongo | Salchicha Suiza | Tártara | Piña | Queso Costeño. '},
            
            {pos:5,
            image: "imagen5",
            food:'CHORI-BUTI',
            price:'20000',
            ingredients:'Papas Francesas | Adobadas con Aliños de la Casa | Lechuga | Papa Chongo | Chorizo y Butifarra | Tártara | Piña | Queso Costeño. '},
            
            {pos:6,
            image: "imagen6",
            food:'CARNE-POLLO',
            price:'26000',
            ingredients:'Papas Francesas | Adobadas con Aliños de la Casa | Lechuga | Papa Chongo | Carne y Pollo | Tártara | Piña | Queso Costeño. '},
            
            {pos:7,
            image: "imagen7",
            food:'COMBINADO',
            price:'27000',
            ingredients:'Papas Francesas | Adobadas con Aliños de la Casa | Lechuga | Papa Chongo | Carne | Pollo | Chorizo | Butifarra | Tártara | Piña | Queso Costeño. '},
            
            {pos:8,
            image: "imagen8",
            food:'POLLO',
            price:'26000',
            ingredients:'Papas Francesas | Adobadas con Aliños de la Casa | Lechuga | Papa Chongo | Pollo | Tártara | Piña | Queso Costeño. '},
            
            {pos:9,
            image: "imagen9",
            food:'LOMITO',
            price:'28000',
            ingredients:'Papas Francesas | Adobadas con Aliños de la Casa | Lechuga | Papa Chongo | Lomito de Res | Tártara | Piña | Queso Costeño. '},
            
            {pos:10,
            image: "imagen10",
            food:'LA BODEGONA',
            price:'34000',
            ingredients:'Papas Francesas | Adobadas con Aliños de la Casa | Lechuga | Papa Chongo | Carne | Pollo | Chorizo | Butifarra | Tártara | Piña | Queso Costeño | Queso Mozzarella Gratinado | Maíz.'},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId} >SALCHIPAPAS</h2>
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
export { Menu3 };