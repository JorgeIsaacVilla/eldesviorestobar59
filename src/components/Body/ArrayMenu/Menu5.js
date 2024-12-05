import React from "react";
import "./Menu.css";
/*import imagen1 from "./imgMenu5/img1.jpg";
import imagen2 from "./imgMenu5/img2.jpg";
import imagen3 from "./imgMenu5/img3.jpg";
import imagen4 from "./imgMenu5/img4.jpg";
import imagen5 from "./imgMenu5/img5.jpg";*/

function Menu5({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }

    const menuItem =[
            
            {pos:1,
            image: "imagen1",
            food:'chori-buti',
            price:'20000',
            ingredients:'Bollo Limpio | Lechuga | Papa Chongo | Chorizo y Butifarra | Tártara | Piña | Queso Costeño. '},
            
            {pos:2,
            image: "imagen2",
            food:'suizo',   
            price:'21000',
            ingredients:'Bollo Limpio | Lechuga | Papa Chongo | Salchicha Suiza | Tártara | Piña | Queso Costeño. '},
            
            {pos:3,
            image: "imagen3",
            food:'ranchero',
            price:'21000',
            ingredients:'Bollo Limpio | Lechuga | Papa Chongo | Salchicha Ranchera | Tártara | Piña | Queso Costeño. '},
            
            {pos:4,
            image: "imagen4",
            food:'combinado',
            price:'23000',
            ingredients:'Bollo Limpio | Lechuga | Papa Chongo | Carne | Pollo | Chorizo | Butifarra | Tártara | Piña | Queso Costeño. '},
            
            {pos:5,
            image: "imagen5",
            food:'pollo',
            price:'24000',
            ingredients:'Bollo Limpio | Lechuga | Papa Chongo | Pollo | Tártara | Piña | Queso Costeño. '},
            
            {pos:6,
            image: "imagen6",
            food:'carne-pollo',
            price:'25000',
            ingredients:'Bollo Limpio | Lechuga | Papa Chongo | Carne y Pollo | Tártara | Piña | Queso Costeño. '},
            
            {pos:7,
            image: "imagen7",
            food:'lomito',
            price:'26000',
            ingredients:'Bollo Limpio | Lechuga | Papa Chongo | Lomito de Res | Tártara | Piña | Queso Costeño.'},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>DESGRANADOS</h2>
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
export { Menu5 };