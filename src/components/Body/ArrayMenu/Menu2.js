import React from "react";
import "./Menu.css";
/*import imagen1 from "./imgMenu2/img1.jpg";
import imagen2 from "./imgMenu2/img2.jpg";
import imagen3 from "./imgMenu2/img3.jpg";
import imagen4 from "./imgMenu2/img4.jpg";
import imagen5 from "./imgMenu2/img5.jpg";*/

function Menu2({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }

    const menuItem =[
        {pos:1,
        image: "imagen1",
        food:'SENCILLO',
        price:'13000',
        ingredients:'Maíz | Lechuga | Papa Chongo | Salsa Tártara | Piña | Queso Costeño. '},
        
        {pos:2,
        image: "imagen2",
        food:'GRATINADA',
        price:'16000',
        ingredients:'Maíz | Lechuga | Papa Chongo | Salsa Tártara | Piña | Queso Mozzarella. '},
        
        {pos:3,
        image: "imagen3",
        food:'HAWAIANA',
        price:'20000',
        ingredients:'Maíz | Lechuga | Papa Chongo | Salsa Tártara | Piña | Queso Mozzarella | Piña Caramelizada | Tocineta en Cuadrito. '},
        
        {pos:4,
        image: "imagen4",
        food:'RANCHERO',
        price:'21000',
        ingredients:'Maíz | Lechuga | Papa Chongo | Salsa Tártara | Piña | Queso Costeño | Salchicha Ranchera. '},
        
        {pos:5,
        image: "imagen5",
        food:'SUIZA',
        price:'21000',
        ingredients:'Maíz | Lechuga | Papa Chongo | Salsa Tártara | Piña | Queso Costeño | Salchicha Suiza. '},
        
        {pos:6,
        image: "imagen6",
        food:'POLLO',
        price:'24000',
        ingredients:'Maíz | Lechuga | Papa Chongo | Salsa Tártara | Piña | Queso Costeño | Pollo. '},
        
        {pos:7,
        image: "imagen7",
        food:'CARNE-POLLO (MIXTA)',
        price:'26000',
        ingredients:'Maíz | Lechuga | Papa Chongo | Salsa Tártara | Piña | Queso Costeño | Carne y Pollo.'},
        
        {pos:8,
        image: "imagen8",
        food:'CHORI-BUTI',
        price:'20000',
        ingredients:'Maíz | Lechuga | Papa Chongo | Salsa Tártara | Piña | Queso Costeño | Chorizo | Butifarra. '},
        
        {pos:9,
        image: "imagen9",
        food:'LOMITO',
        price:'28000',
        ingredients:'Maíz | Lechuga | Papa Chongo | Salsa Tártara | Piña | Queso Costeño | Lomito de Res. '},
        
        {pos:10,
        image: "imagen10",
        food:'COMBINADO',
        price:'27000',
        ingredients:'Maíz | Lechuga | Papa Chongo | Salsa Tártara | Piña | Queso Costeño | Carne | Pollo | Chorizo | Butifarra.'},
    ]
    
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>MAZORCAS</h2>
            <ul>
                {menuItem.map((item)=>
                <li key= {item.pos} onClick={() => handleItemclick(item)}>
                    <div className="item-contend">
                       {/* <img src={item.image} />*/}
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
export { Menu2 };