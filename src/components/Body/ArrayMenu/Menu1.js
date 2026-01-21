import React from "react";
import "./Menu.css";
import imagen1 from "./imgMenu1/img1.webp";
/*import imagen2 from "./imgMenu1/img2.jpg";*/
import imagen3 from "./imgMenu1/img3.webp";
import imagen4 from "./imgMenu1/img4.webp";
import imagen8 from "./imgMenu1/img8.webp";
import imagen9 from "./imgMenu1/img9.webp";

import imageMaintenance from "../imgBody/imageMaintenance.png"

function Menu1({sectionId, onProductClick}) {

    const handleItemclick = (item) => {
        onProductClick(item);
    }

    const menuItem =[
        {pos:1,
        image: imagen1,
        food:'SENCILLO',
        price:'10000',
        ingredients:'Pan Asado Al Carbón | Salchicha | Queso | Papas Chongo | Lechuga | Tártara | Piña.'},
        
        {pos:2,
        image: imageMaintenance,
        food:'GEMELO',
        price:'13000',
        ingredients:'Pan | Salchicha Doble | Queso | Papas Chongo | Lechuga | Tártara | Piña.'},
        
        {pos:3,
        image: imagen3,
        food:'MEXICANO',
        price:'15000',
        ingredients:'(Perro Tradicional) Pan | Salchicha | Queso | Papas Chongo | Lechuga | Tártara | Tocineta | Chimichurri.'},
        
        {pos:4,
        image: imagen4,
        food:'MEDIO SUIZO',
        price:'17000',
        ingredients:'Pan Asado Al Carbón | Media Salchicha Suiza | Queso | Papas Chongo | Lechuga | Tártara | Piña.'},
        
        {pos:5,
        image: imageMaintenance,
        food:'CHORI-BUTI',
        price:'18000',
        ingredients:'Pan Asado Al Carbón | Chorizo y Butifarra | Queso | Papas | Chongo | Lechuga | Tártara | Piña.'},
        
        {pos:6,
        image: imageMaintenance,
        food:'RANCHERO',
        price:'18000',
        ingredients:'Pan Asado Al Carbón | Salchicha Ranchera | Queso | Papas | Chongo | Lechuga | Tártara | Piña.'},
        
        {pos:7,
        image: imageMaintenance,
        food:'SUIZO',
        price:'20000',
        ingredients:'Pan Asado Al Carbón | Salchicha Suiza | Queso | Papas Chongo | Lechuga | Tártara | Piña.'},
        
        {pos:8,
        image: imagen8,
        food:'SUIZO RANCHERO',
        price:'27000',
        ingredients:'Pan Asado Al Carbón | Salchicha Suiza | Salchicha Ranchera | Tocineta En cuadritos | Queso Costeño | Queso Mozzarella | Papas Chongo | Tártara.'},
        
        {pos:9,
        image: imagen9,
        food:'Ítalo Hawaiano',
        price:'23000',
        ingredients:'Pan Asado Al Carbón | Papas Chongo | Lechuga | Tártara | Piña | Jamón | Tocineta | Queso Mozzarella | Salchicha.'},
        
        {pos:10,
        image: imageMaintenance,
        food:'ÍTALO SUIZO',
        price:'24000',
        ingredients:'Pan Asado Al Carbón | Papas Chongo | Lechuga | Tártara | Piña | Jamón | Tocineta | Queso Mozzarella | Salchicha Suiza.'},
    ];

    return(
     <div >
        <h2 className="tittle-item" id={sectionId}>PERROS CALIENTES</h2>
        <ul>
            {menuItem.map((item)=>                
                <li key={item.pos} onClick={() => handleItemclick(item)}>
                    <div className="item-contend">
                        <img
                            src={item.image}
                            alt={item.food ? `Imagen de ${item.food}` : ""}
                            loading="lazy"
                        />
                        <div>
                            <h3 className="tittle-food"> {item.food.toUpperCase()} </h3>
                            <p className="ingredients"> {item.ingredients} </p>
                        </div>
                    </div>
                    <p className="price"> <strong>${item.price}</strong> </p>
                </li>
            )}
        </ul>
     </div>   
    )
}
export { Menu1 };