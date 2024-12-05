import React from "react";
import "./Menu.css";
/*import imagen1 from "./imgMenu6/img1.jpg";
import imagen2 from "./imgMenu6/img2.jpg";
import imagen3 from "./imgMenu6/img3.jpg";
import imagen4 from "./imgMenu6/img4.jpg";*/

function Menu6({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }
    
    const menuItem =[

        {pos:1,
        image: "imagen1",
        food:'Clásica de la casa',
        price:'20000',
        ingredients:'Pan Brioche | Carne (Previamente Asado al Carbón) | Queso Mozzarella | Tomate | Cebolla | Tártara de la Casa. '},
        
        {pos:2,
        image: "imagen2",
        food:'Clásica de pollo',
        price:'20000',
        ingredients:'Pan Brioche | Pollo (Previamente Asado al Carbón) | Queso Mozzarella | Tomate | Cebolla | Tártara de la Casa. '},
        
        {pos:3,
        image: "imagen3",
        food:'doble carne',
        price:'30000',
        ingredients:'Pan Brioche | Doble Carne (Previamente Asado al Carbón) | Queso Mozzarella | Tomate | Cebolla | Tártara de la Casa. '},
        
        {pos:4,
        image: "imagen4",
        food:'Hamburguesa artesanal',
        price:'20000',
        ingredients:'Pan Brioche | Carne (Previamente Asado al Carbón) | Queso Mozzarella | Tomate | Cebolla Caramelizada | Salsa Tenesis. '},
        
        {pos:5,
        image: "imagen5",
        food:'Hamburguesa artesanal de pollo',
        price:'20000',
        ingredients:'Pan Brioche | Pollo (Previamente Asado al Carbón) | Queso Mozzarella | Tomate | Cebolla | Salsa Tenesis.'},

        {pos:6,
            image: "imagen4",
            food:'Hamburguesa London',
            price:'34000',
            ingredients:'Pan Artesanal | Lechuga Crespa | Salsa Tenesis | Pechuga de Pollo | Carne de Res | Bondiola de Cerdo | Queso Mozzarella | Queso Cheeda | Tomate | Cebolla.'},

    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>HAMBURGUESAS</h2>
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
export { Menu6 };