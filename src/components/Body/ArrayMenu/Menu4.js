import React from "react";
import "./Menu.css";
/*import imagen1 from "./imgMenu4/img1.jpg";
import imagen2 from "./imgMenu4/img2.jpg";
import imagen3 from "./imgMenu4/img3.jpg";
import imagen4 from "./imgMenu4/img4.jpg";
import imagen5 from "./imgMenu4/img5.jpg";*/

function Menu4({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }
    
    const menuItem =[
                    
            {pos:1,
            image: "imagen1",
            food:'sencillo',
            price:'16000',
            ingredients:'Pan Asado al Carbón | Salchicha | Queso | Papas Chongo | Lechuga | Tártara | Piña. '},
            
            {pos:2,
            image: "imagen2",
            food:'chori-buti',
            price:'20000',
            ingredients:'Pan | Chorizo | Butifarra | Queso | Papas Chongo | Lechuga | Tártara | Piña. '},
            
            {pos:3,
            image: "imagen3",
            food:'gemelo',
            price:'19500',
            ingredients:'Pan | Salchicha Doble | Queso | Papas Chongo | Lechuga | Tártara. '},
            
            {pos:4,
            image: "imagen4",
            food:'ranchero',
            price:'22000',
            ingredients:'Pan Asado al Carbón | Salchicha Ranchera | Queso | Papas | Chongo | Lechuga | Tártara | Piña. '},
            
            {pos:5,
            image: "imagen5",
            food:'suizo',
            price:'23000',
            ingredients:'Pan Asado al Carbón | Salchicha Suiza | Queso | Papas Chongo | Lechuga | Tártara | Piña. '},
            
            {pos:6,
            image: "imagen6",
            food:'ítalo hawaiano',
            price:'24500',
            ingredients:'Pan Asado al Carbón | Papas Chongo | Lechuga | Tártara | Piña | Jamón | Tocineta | Queso Mozzarella | Salchicha. '},
            
            {pos:7,
            image: "imagen7",
            food:'lomito',
            price:'27000',
            ingredients:'Pan Asado al Carbón | Lomito de Res | Queso | Papas Chongo | Lechuga | Tártara | Piña. '},
            
            {pos:8,
            image: "imagen8",
            food:'pollo',
            price:'24000',
            ingredients:'Pan Asado al Carbón | Pollo | Queso | Papas Chongo | Lechuga | Tártara | Piña. '},
            
            {pos:9,
            image: "imagen9",
            food:'carne-pollo',
            price:'26000',
            ingredients:'Pan Asado al Carbón | Carne | Pollo | Queso | Papas Chongo | Lechuga | Tártara | Piña. '},
            
            {pos:10,
            image: "imagen10",
            food:'combinado',
            price:'26000',
            ingredients:'Pan Asado al Carbón | Carne | Pollo | Chorizo | Butifarra | Queso | Papas Chongo | Lechuga | Tártara | Piña. '},
            
            {pos:11,
            image: "imagen11",
            food:'jamón gratinado',
            price:'22000',
            ingredients:'Pan Asado al Carbón | Jamón | Queso Mozzarella | Papas Chongo | Lechuga | Tártara | Piña. '},
            
            {pos:12,
            image: "imagen12",
            food:'escoces',
            price:'31000',
            ingredients:'Pan Asado al Carbón | Carne | Pollo | Chorizo | Butifarra | Queso Costeño | Queso Mozzarella Gratinado | Maíz | Papas Chongo | Lechuga | Tártara | Piña. '},
            
            {pos:13,
            image: "imagen13",
            food:'ítalo suizo',
            price:'27000',
            ingredients:'Pan Asado al Carbón | Papas Chongo | Lechuga | Tártara | Piña | Jamón | Tocineta | Queso Mozzarella | Salchicha Suiza.'},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>PERROS SALVAJES</h2>
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
export { Menu4 };