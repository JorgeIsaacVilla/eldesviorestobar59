import React from "react";
import "./Menu.css";
/*import imagen1 from "./imgMenu1/img1.jpg";
import imagen2 from "./imgMenu1/img2.jpg";
import imagen3 from "./imgMenu1/img3.jpg";
import imagen4 from "./imgMenu1/img4.jpg";
import imagen5 from "./imgMenu1/img5.jpg";*/

function Menu1({sectionId, onProductClick}) {

    const handleItemclick = (item) => {
        onProductClick(item);
    }

    const menuItem =[
        {pos:1,
        image: "imagen1",
        food:'SENCILLO',
        price:'9000',
        ingredients:'Pan Asado Al Carbón | Salchicha | Queso | Papas Chongo | Lechuga | Tártara | Piña.'},
        
        {pos:2,
        image: "imagen2",
        food:'GEMELO',
        price:'11000',
        ingredients:'Pan | Salchicha Doble | Queso | Papas Chongo | Lechuga | Tártara | Piña.'},
        
        {pos:3,
        image: "imagen3",
        food:'MEXICANO',
        price:'13000',
        ingredients:'(Perro Tradicional) Pan | Salchicha | Queso | Papas Chongo | Lechuga | Tártara | Tocineta | Chimichurri.'},
        
        {pos:4,
        image: "imagen4",
        food:'MEDIO SUIZO',
        price:'15000',
        ingredients:'Pan Asado Al Carbón | Media Salchicha Suiza | Queso | Papas Chongo | Lechuga | Tártara | Piña.'},
        
        {pos:5,
        image: "imagen5",
        food:'CHORI-BUTI',
        price:'16000',
        ingredients:'Pan Asado Al Carbón | Chorizo y Butifarra | Queso | Papas | Chongo | Lechuga | Tártara | Piña.'},
        
        {pos:6,
        image: "imagen6",
        food:'RANCHERO',
        price:'15500',
        ingredients:'Pan Asado Al Carbón | Salchicha Ranchera | Queso | Papas | Chongo | Lechuga | Tártara | Piña.'},
        
        {pos:7,
        image: "imagen7",
        food:'SUIZO',
        price:'18500',
        ingredients:'Pan Asado Al Carbón | Salchicha Suiza | Queso | Papas Chongo | Lechuga | Tártara | Piña.'},
        
        {pos:8,
        image: "imagen8",
        food:'SUIZO RANCHERO',
        price:'24000',
        ingredients:'Pan Asado Al Carbón | Salchicha Suiza | Salchicha Ranchera | Tocineta En cuadritos | Queso Costeño | Queso Mozzarella | Papas Chongo | Tártara.'},
        
        {pos:9,
        image: "imagen9",
        food:'Ítalo Hawaiano',
        price:'20000',
        ingredients:'Pan Asado Al Carbón | Papas Chongo | Lechuga | Tártara | Piña | Jamón | Tocineta | Queso Mozzarella | Salchicha.'},
        
        {pos:10,
        image: "imagen10",
        food:'ÍTALO SUIZO',
        price:'21000',
        ingredients:'Pan Asado Al Carbón | Papas Chongo | Lechuga | Tártara | Piña | Jamón | Tocineta | Queso Mozzarella | Salchicha Suiza.'},


    ];

    return(
     <div >
        <h2 className="tittle-item" id={sectionId}>PERROS CALIENTES</h2>
        <ul>
            {menuItem.map((item)=>
                <li key={item.pos} onClick={() => handleItemclick(item)}>
                    <div className="item-contend">
                        {/*<img src = {item.image} />*/}
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