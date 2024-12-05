import React from "react";
import "./Menu.css";
/*import imagen1 from "./imgMenu8/img1.jpg";
import imagen2 from "./imgMenu8/img2.jpg";
import imagen3 from "./imgMenu8/img3.jpg";
import imagen4 from "./imgMenu8/img4.jpg";
import imagen8 from "./imgMenu8/img5.jpg";*/

function Menu8({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }
    
    const menuItem =[

            {pos:1,
            image: "imagen1",
            food:'Costillas BBQ',
            price:'35000',
            ingredients:'400g de Costillitas de Cerdo Asado al Carbón | Salsa BBQ | Papas Criollas | Ensalada al Día. '},
            
            {pos:2,
            image: "imagen2",
            food:'Chuleta de cerdo',
            price:'30000',
            ingredients:'Loncha de Pernil Asado al Carbón | Papas Francesas | Ensalada. '},
            
            {pos:3,
            image: "imagen3",
            food:'parrillada mixta',
            price:'32000',
            ingredients:'150g de Carne Asado al Carbón | Pollo | Chorizo | Butifarra | Ensalada | Chimichurri Artesanal. '},
            
            {pos:4,
            image: "imagen4",
            food:'Pechuga Gratinada',
            price:'30500',
            ingredients:'300g de Pechuga de Pollo Asado al Carbón | Gratinada en Queso Mozzarella | 200g de Papas a la Francesa | Ensalada al Día. '},
            
            {pos:5,
            image: "imagen5",
            food:'pechuga asada',
            price:'26000',
            ingredients:'300g de Pechuga de Pollo Asado al Carbón | 200g de Papas a la Francesa | Ensalada al Día. '},
            
            {pos:6,
            image: "imagen6",
            food:'Lomo de res asado al carbón',
            price:'32000',
            ingredients:'300g de Lomo Ancho | 200g de Papas a la Francesa | Ensalada del Día | Mazorca Dulce Asada | Chimichurri Artesanal.'},

            {pos:7,
                image: "imagen7",
                food:'Bondiola De Cerdo',
                price:'28000',
                ingredients:'300g de Bondiola | Ensalada.'},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>ASADOS</h2>
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
export { Menu8 };