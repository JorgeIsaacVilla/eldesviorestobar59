import React from "react";
import "./Menu.css";
/*import imagen1 from "./imgMenu10/img1.jpg";
import imagen2 from "./imgMenu10/img2.jpg";
import imagen3 from "./imgMenu10/img3.jpg";
import imagen4 from "./imgMenu10/img4.jpg";
import imagen5 from "./imgMenu10/img5.jpg";

import imageMaintenance from "../imgBody/imageMaintenance.png"*/

function Menu10({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }
    
    const menuItem =[
   
        {pos:1,
        image: 'imageMaintenance',
        food:'Napolitana Personal',
        price:'',
        ingredients:''},

        {pos:2,
        image: 'imageMaintenance',
        food:'Napolitana Small',
        price:'',
        ingredients:''},

        {pos:3,
        image: 'imageMaintenance',
        food:'Napolitana Medium',
        price:'',
        ingredients:''},

        {pos:4,
        image: 'imageMaintenance',
        food:'Napolitana Large',
        price:'',
        ingredients:''},

        {pos:5,
        image: 'imageMaintenance',
        food:'La Bodegona Personal',
        price:'',
        ingredients:''},

        {pos:6,
        image: 'imageMaintenance',
        food:'La Bodegona Small',
        price:'',
        ingredients:''},

        {pos:7,
        image: 'imageMaintenance',
        food:'La Bodegona Medium',
        price:'',
        ingredients:''},

        {pos:8,
        image: 'imageMaintenance',
        food:'La Bodegona Large',
        price:'',
        ingredients:''},

        {pos:9,
        image: 'imageMaintenance',
        food:'Pollo Con Champiñones Personal',
        price:'',
        ingredients:''},

        {pos:10,
        image: 'imageMaintenance',
        food:'Pollo Con Champiñones Small',
        price:'',
        ingredients:''},

        {pos:11,
        image: 'imageMaintenance',
        food:'Pollo Con Champiñones Medium',
        price:'',
        ingredients:''},

        {pos:12,
        image: 'imageMaintenance',
        food:'Pollo Con Champiñones Large',
        price:'',
        ingredients:''},

        {pos:13,
        image: 'imageMaintenance',
        food:'Mexicana Al Cuate Personal',
        price:'',
        ingredients:''},

        {pos:14,
        image: 'imageMaintenance',
        food:'Mexicana Al Cuate Small',
        price:'',
        ingredients:''},

        {pos:15,
        image: 'imageMaintenance',
        food:'Mexicana Al Cuate Medium',
        price:'',
        ingredients:''},

        {pos:16,
        image: 'imageMaintenance',
        food:'Mexicana Al Cuate Large',
        price:'',
        ingredients:''},

        {pos:17,
        image: 'imageMaintenance',
        food:'Cuatro Gustos Personal',
        price:'',
        ingredients:''},

        {pos:18,
        image: 'imageMaintenance',
        food:'Cuatro Gustos Small',
        price:'',
        ingredients:''},

        {pos:19,
        image: 'imageMaintenance',
        food:'Cuatro Gustos Medium',
        price:'',
        ingredients:''},

        {pos:20,
        image: 'imageMaintenance',
        food:'Cuatro Gustos Large',
        price:'',
        ingredients:''},

        {pos:21,
        image: 'imageMaintenance',
        food:'Santarrosano Personal',
        price:'',
        ingredients:''},

        {pos:22,
        image: 'imageMaintenance',
        food:'Santarrosano Small',
        price:'',
        ingredients:''},

        {pos:23,
        image: 'imageMaintenance',
        food:'Santarrosano Medium',
        price:'',
        ingredients:''},

        {pos:24,
        image: 'imageMaintenance',
        food:'Santarrosano Large',
        price:'',
        ingredients:''},

        {pos:25,
        image: 'imageMaintenance',
        food:'Tradicionales Personal Jamón Queso',
        price:'',
        ingredients:''},

        {pos:26,
        image: 'imageMaintenance',
        food:'Tradicionales Personal Hawaiana',
        price:'',
        ingredients:''},

        {pos:27,
        image: 'imageMaintenance',
        food:'Tradicionales Personal Salami',
        price:'',
        ingredients:''},

        {pos:28,
        image: 'imageMaintenance',
        food:'Tradicionales Personal Pollo',
        price:'',
        ingredients:''},

        {pos:29,
        image: 'imageMaintenance',
        food:'Tradicionales Personal Cabano',
        price:'',
        ingredients:''},

        {pos:30,
        image: 'imageMaintenance',
        food:'Tradicionales Personal Suiza',
        price:'',
        ingredients:''},

        {pos:31,
        image: 'imageMaintenance',
        food:'Tradicionales Personal Chori - Buti',
        price:'',
        ingredients:''},

        {pos:32,
        image: 'imageMaintenance',
        food:'Tradicionales Personal Vegetariana',
        price:'',
        ingredients:''},

        {pos:33,
        image: 'imageMaintenance',
        food:'Tradicionales Personal Peperoni',
        price:'',
        ingredients:''},

        {pos:34,
        image: 'imageMaintenance',
        food:'Tradicionales Small Jamón Queso',
        price:'',
        ingredients:''},

        {pos:35,
        image: 'imageMaintenance',
        food:'Tradicionales Small Hawaiana',
        price:'',
        ingredients:''},

        {pos:36,
        image: 'imageMaintenance',
        food:'Tradicionales Small Salami',
        price:'',
        ingredients:''},

        {pos:37,
        image: 'imageMaintenance',
        food:'Tradicionales Small Pollo',
        price:'',
        ingredients:''},

        {pos:38,
        image: 'imageMaintenance',
        food:'Tradicionales Small Cabano',
        price:'',
        ingredients:''},

        {pos:39,
        image: 'imageMaintenance',
        food:'Tradicionales Small Suiza',
        price:'',
        ingredients:''},

        {pos:40,
        image: 'imageMaintenance',
        food:'Tradicionales Small Chori - Buti',
        price:'',
        ingredients:''},

        {pos:41,
        image: 'imageMaintenance',
        food:'Tradicionales Small Vegetariana',
        price:'',
        ingredients:''},

        {pos:42,
        image: 'imageMaintenance',
        food:'Tradicionales Small Peperoni',
        price:'',
        ingredients:''},

        {pos:43,
        image: 'imageMaintenance',
        food:'Tradicionales Medium Jamón Queso',
        price:'',
        ingredients:''},

        {pos:44,
        image: 'imageMaintenance',
        food:'Tradicionales Medium Hawaiana',
        price:'',
        ingredients:''},

        {pos:45,
        image: 'imageMaintenance',
        food:'Tradicionales Medium Salami',
        price:'',
        ingredients:''},

        {pos:46,
        image: 'imageMaintenance',
        food:'Tradicionales Medium Pollo',
        price:'',
        ingredients:''},

        {pos:47,
        image: 'imageMaintenance',
        food:'Tradicionales Medium Cabano',
        price:'',
        ingredients:''},

        {pos:48,
        image: 'imageMaintenance',
        food:'Tradicionales Medium Suiza',
        price:'',
        ingredients:''},

        {pos:49,
        image: 'imageMaintenance',
        food:'Tradicionales Medium Chori - Buti',
        price:'',
        ingredients:''},

        {pos:50,
        image: 'imageMaintenance',
        food:'Tradicionales Medium Vegetariana',
        price:'',
        ingredients:''},

        {pos:51,
        image: 'imageMaintenance',
        food:'Tradicionales Medium Peperoni',
        price:'',
        ingredients:''},

        {pos:52,
        image: 'imageMaintenance',
        food:'Tradicionales Large Jamón Queso',
        price:'',
        ingredients:''},

        {pos:53,
        image: 'imageMaintenance',
        food:'Tradicionales Large Hawaiana',
        price:'',
        ingredients:''},

        {pos:54,
        image: 'imageMaintenance',
        food:'Tradicionales Large Salami',
        price:'',
        ingredients:''},

        {pos:55,
        image: 'imageMaintenance',
        food:'Tradicionales Large Pollo',
        price:'',
        ingredients:''},

        {pos:56,
        image: 'imageMaintenance',
        food:'Tradicionales Large Cabano',
        price:'',
        ingredients:''},

        {pos:57,
        image: 'imageMaintenance',
        food:'Tradicionales Large Suiza',
        price:'',
        ingredients:''},

        {pos:58,
        image: 'imageMaintenance',
        food:'Tradicionales Large Chori - Buti',
        price:'',
        ingredients:''},

        {pos:59,
        image: 'imageMaintenance',
        food:'Tradicionales Large Vegetariana',
        price:'',
        ingredients:''},

        {pos:60,
        image: 'imageMaintenance',
        food:'Tradicionales Large Peperoni',
        price:'',
        ingredients:''},

        {pos:61,
        image: 'imageMaintenance',
        food:'Adicional De Ajo',
        price:'',
        ingredients:''},

        {pos:62,
        image: 'imageMaintenance',
        food:'Adicional De Maíz',
        price:'',
        ingredients:''},

        {pos:63,
        image: 'imageMaintenance',
        food:'Adicional De Salami',
        price:'',
        ingredients:''},

        {pos:64,
        image: 'imageMaintenance',
        food:'Adicional De Jamón',
        price:'',
        ingredients:''},

        {pos:65,
        image: 'imageMaintenance',
        food:'Adicional De Chorizo',
        price:'',
        ingredients:''},

        {pos:66,
        image: 'imageMaintenance',
        food:'Adicional De Butifarra',
        price:'',
        ingredients:''},

        {pos:67,
        image: 'imageMaintenance',
        food:'Adicional De Peperoni',
        price:'',
        ingredients:''},

        {pos:68,
        image: 'imageMaintenance',
        food:'Adicional De Champiñon',
        price:'',
        ingredients:''},

        {pos:69,
        image: 'imageMaintenance',
        food:'Adicional De Borde De Queso',
        price:'',
        ingredients:''},
             
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>PIZZA-MUY PRONTO😎🍕</h2>
            <ul>
                {menuItem.map((item)=>
                <li key= {item.pos}>
                {/*<li key= {item.pos} onClick={() => handleItemclick(item)}>*/}
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
export { Menu10 };