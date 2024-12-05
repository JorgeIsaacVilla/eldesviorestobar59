import React from "react";
import "./Menu.css";
/*import imagen1 from "./imgMenu10/img1.jpg";
import imagen2 from "./imgMenu10/img2.jpg";
import imagen3 from "./imgMenu10/img3.jpg";
import imagen4 from "./imgMenu10/img4.jpg";
import imagen5 from "./imgMenu10/img5.jpg";*/

function Menu11({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }

    const menuItem =[
        
        {pos:1,
        image: "imagen1",
        food:'Coca-cola 400ml',
        price:5000,
        ingredients:''},
        
        {pos:2,
        image: "imagen2",
        food:'Canada Dry',
        price:3000,
        ingredients:''},
        
        {pos:3,
        image: "imagen3",
        food:'Agua cristal 300ml',
        price:1000,
        ingredients:''},
        
        {pos:4,
        image: "imagen4",
        food:'Jugo Hit pet 500ml',
        price:4000,
        ingredients:''},
        
        {pos:5,
        image: "imagen5",
        food:'Jugo Hit 8oz',
        price:3500,
        ingredients:''},
        
        {pos:6,
        image: "imagen6",
        food:'Jugo Hit tetra litro',
        price:6000,
        ingredients:''},
        
        {pos:7,
        image: "imagen7",
        food:'Gaseosa Econo litro',
        price:5000,
        ingredients:''},
        
        {pos:8,
        image: "imagen8",
        food:'Mr. Tea',
        price:4000,
        ingredients:''},
        
        {pos:9,
        image: "imagen9",
        food:'Gaseosa Postobón 250ml',
        price:2500,
        ingredients:''},
        
        {pos:10,
        image: "imagen10",
        food:'Gaseosa Postobón 400ml',
        price:4000,
        ingredients:''},
        
        {pos:11,
        image: "imagen11",
        food:'Natumalta 400ml',
        price:4000,
        ingredients:''},
        
        {pos:12,
        image: "imagen12",
        food:'Natumalta 200ml',
        price:2500,
        ingredients:''},
        
        {pos:13,
        image: "imagen13",
        food:'Hit nectar 237ml',
        price:3000,
        ingredients:''},
        
        {pos:14,
        image: "imagen14",
        food:'Electrolit 625ml',
        price:10000,
        ingredients:''},
        
        {pos:15,
        image: "imagen15",
        food:'Gaseosa Postobón 1.5lt',
        price:7000,
        ingredients:''},
        
        {pos:16,
        image: "imagen16",
        food:'Gaseosa Litro',
        price:5000,
        ingredients:''},
        
        {pos:17,
        image: "imagen47",
        food:'Cocacola 2Litros',
        price:10000,
        ingredients:''},
            
        {pos:18,
        image: "imagen48",
        food:'Agua 600ml',
        price:3000,
        ingredients:''},

        {pos:19,
        image: "imagen17",
        food:'H2OH! lima limón 250ml',
        price:1500,
        ingredients:''},
        
        {pos:20,
        image: "imagen18",
        food:'H2OH! Limonata',
        price:1500,
        ingredients:''},
        
        {pos:21,
        image: "imagen19",
        food:'Agua gas 300ml',
        price:2000,
        ingredients:''},
        
        {pos:22,
        image: "imagen20",
        food:'Canadá dry 300ml',
        price:3000,
        ingredients:''},
        
        {pos:23,
        image: "imagen21",
        food:'Bretaña 300ml',
        price:4000,
        ingredients:''},
        
        {pos:24,
        image: "imagen22",
        food:'Gatorade',
        price:5000,
        ingredients:''},
        
        {pos:25,
        image: "imagen23",
        food:'Hatsu tea 400ml',
        price:6000,
        ingredients:''},
        
        {pos:26,
        image: "imagen24",
        food:'Hatsu soda 300ml',
        price:6000,
        ingredients:''},
        
        {pos:27,
        image: "imagen25",
        food:'Speed max 269ml',
        price:2000,
        ingredients:''},
        
        {pos:28,
        image: "imagen26",
        food:'Red Bull 250ml',
        price:10000,
        ingredients:''},
        
        {pos:29,
        image: "imagen27",
        food:'Gaseosa Postobón 2.5ml',
        price:9000,
        ingredients:''},
        
        {pos:30,
        image: "imagen28",
        food:'Coronita 210ml',
        price:5000,
        ingredients:''},
        
        {pos:31,
        image: "imagen29",
        food:'Budweiser 250ml',
        price:5000,
        ingredients:''},
        
        {pos:32,
        image: "imagen30",
        food:'Andina dorada 250ml',
        price:3500,
        ingredients:''},
        
        {pos:33,
        image: "imagen31",
        food:'Tecate lata 269ml',
        price:3500,
        ingredients:''},
        
        {pos:34,
        image: "imagen32",
        food:'Heineken 250ml',
        price:5000,
        ingredients:''},
        
        {pos:35,
        image: "imagen33",
        food:'Stella Artois 330ml',
        price:10000,
        ingredients:''},
    
        {pos:36,
        image: "imagen35",
        food:'Sol 269 ml',
        price:5000,
        ingredients:''},
        
        {pos:37,
        image: "imagen36",
        food:'Michelob 355ml',
        price:5000,
        ingredients:''},

        {pos:38,
        image: "imagen44",
        food:'Aguila ligth 330ml',
        price:5000,
        ingredients:''},
        
        {pos:39,
        image: "imagen37",
        food:'Costeña bacana 320ml',
        price:5000,
        ingredients:''},
        
        {pos:40,
        image: "imagen38",
        food:'Poker 330ml',
        price:5000,
        ingredients:''},
        
        {pos:41,
        image: "imagen39",
        food:'Aguila negra 330ml',
        price:5000,
        ingredients:''},
        
        {pos:42,
        image: "imagen40",
        food:'Costeñita 175ml',
        price:4000,
        ingredients:''},
        
        {pos:43,
        image: "imagen41",
        food:'Miller Lite 300ml',
        price:5000,
        ingredients:''},
        
        {pos:44,
        image: "imagen42",
        food:'Club Colombia dorada 330ml',
        price:5000,
        ingredients:''},
        
        {pos:45,
        image: "imagen43",
        food:'Andina ligth 269ml',
        price:4000,
        ingredients:''},
        
        {pos:46,
        image: "imagen45",
        food:'Smirnoff ice green Apple and ice original 275ml',
        price:10000,
        ingredients:''},
        
        {pos:47,
        image: "imagen46",
        food:'Adicional Micheladas',
        price:2000,
        ingredients:''},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>BEBIDAS</h2>
            <ul>
                {menuItem.map((item)=>
                <li key= {item.pos} onClick={() => handleItemclick(item)}>
                    <div className="item-contend">
                       {/*<img src={item.image} />*/}
                        <div>
                            <h3 
                             className="tittle-food">
                                {item.food}</h3>
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
export { Menu11 };