import React from "react";
import "./Menu.css";
/*import imagen1 from "./imgMenu10/img1.jpg";
import imagen2 from "./imgMenu10/img2.jpg";
import imagen3 from "./imgMenu10/img3.jpg";
import imagen4 from "./imgMenu10/img4.jpg";
import imagen5 from "./imgMenu10/img5.jpg";*/

function Menu10({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }
    
    const menuItem =[
   
        {pos:1,
        image: "imagen1",
        food:'Napolitana Personal',
        price:'',
        ingredients:''},

        {pos:2,
        image: "imagen2",
        food:'Napolitana Small',
        price:'',
        ingredients:''},

        {pos:3,
        image: "imagen3",
        food:'Napolitana Medium',
        price:'',
        ingredients:''},

        {pos:4,
        image: "imagen4",
        food:'Napolitana Large',
        price:'',
        ingredients:''},

        {pos:5,
        image: "imagen5",
        food:'La Bodegona Personal',
        price:'',
        ingredients:''},

        {pos:6,
        image: "imagen6",
        food:'La Bodegona Small',
        price:'',
        ingredients:''},

        {pos:7,
        image: "imagen7",
        food:'La Bodegona Medium',
        price:'',
        ingredients:''},

        {pos:8,
        image: "imagen8",
        food:'La Bodegona Large',
        price:'',
        ingredients:''},

        {pos:9,
        image: "imagen9",
        food:'Pollo Con Champiñones Personal',
        price:'',
        ingredients:''},

        {pos:10,
        image: "imagen10",
        food:'Pollo Con Champiñones Small',
        price:'',
        ingredients:''},

        {pos:11,
        image: "imagen11",
        food:'Pollo Con Champiñones Medium',
        price:'',
        ingredients:''},

        {pos:12,
        image: "imagen12",
        food:'Pollo Con Champiñones Large',
        price:'',
        ingredients:''},

        {pos:13,
        image: "imagen13",
        food:'Mexicana Al Cuate Personal',
        price:'',
        ingredients:''},

        {pos:14,
        image: "imagen14",
        food:'Mexicana Al Cuate Small',
        price:'',
        ingredients:''},

        {pos:15,
        image: "imagen15",
        food:'Mexicana Al Cuate Medium',
        price:'',
        ingredients:''},

        {pos:16,
        image: "imagen16",
        food:'Mexicana Al Cuate Large',
        price:'',
        ingredients:''},

        {pos:17,
        image: "imagen17",
        food:'Cuatro Gustos Personal',
        price:'',
        ingredients:''},

        {pos:18,
        image: "imagen18",
        food:'Cuatro Gustos Small',
        price:'',
        ingredients:''},

        {pos:19,
        image: "imagen19",
        food:'Cuatro Gustos Medium',
        price:'',
        ingredients:''},

        {pos:20,
        image: "imagen20",
        food:'Cuatro Gustos Large',
        price:'',
        ingredients:''},

        {pos:21,
        image: "imagen21",
        food:'Santarrosano Personal',
        price:'',
        ingredients:''},

        {pos:22,
        image: "imagen22",
        food:'Santarrosano Small',
        price:'',
        ingredients:''},

        {pos:23,
        image: "imagen23",
        food:'Santarrosano Medium',
        price:'',
        ingredients:''},

        {pos:24,
        image: "imagen24",
        food:'Santarrosano Large',
        price:'',
        ingredients:''},

        {pos:25,
        image: "imagen25",
        food:'Tradicionales Personal Jamón Queso',
        price:'',
        ingredients:''},

        {pos:26,
        image: "imagen26",
        food:'Tradicionales Personal Hawaiana',
        price:'',
        ingredients:''},

        {pos:27,
        image: "imagen27",
        food:'Tradicionales Personal Salami',
        price:'',
        ingredients:''},

        {pos:28,
        image: "imagen28",
        food:'Tradicionales Personal Pollo',
        price:'',
        ingredients:''},

        {pos:29,
        image: "imagen29",
        food:'Tradicionales Personal Cabano',
        price:'',
        ingredients:''},

        {pos:30,
        image: "imagen30",
        food:'Tradicionales Personal Suiza',
        price:'',
        ingredients:''},

        {pos:31,
        image: "imagen31",
        food:'Tradicionales Personal Chori - Buti',
        price:'',
        ingredients:''},

        {pos:32,
        image: "imagen32",
        food:'Tradicionales Personal Vegetariana',
        price:'',
        ingredients:''},

        {pos:33,
        image: "imagen33",
        food:'Tradicionales Personal Peperoni',
        price:'',
        ingredients:''},

        {pos:34,
        image: "imagen34",
        food:'Tradicionales Small Jamón Queso',
        price:'',
        ingredients:''},

        {pos:35,
        image: "imagen35",
        food:'Tradicionales Small Hawaiana',
        price:'',
        ingredients:''},

        {pos:36,
        image: "imagen36",
        food:'Tradicionales Small Salami',
        price:'',
        ingredients:''},

        {pos:37,
        image: "imagen37",
        food:'Tradicionales Small Pollo',
        price:'',
        ingredients:''},

        {pos:38,
        image: "imagen38",
        food:'Tradicionales Small Cabano',
        price:'',
        ingredients:''},

        {pos:39,
        image: "imagen39",
        food:'Tradicionales Small Suiza',
        price:'',
        ingredients:''},

        {pos:40,
        image: "imagen40",
        food:'Tradicionales Small Chori - Buti',
        price:'',
        ingredients:''},

        {pos:41,
        image: "imagen41",
        food:'Tradicionales Small Vegetariana',
        price:'',
        ingredients:''},

        {pos:42,
        image: "imagen42",
        food:'Tradicionales Small Peperoni',
        price:'',
        ingredients:''},

        {pos:43,
        image: "imagen43",
        food:'Tradicionales Medium Jamón Queso',
        price:'',
        ingredients:''},

        {pos:44,
        image: "imagen44",
        food:'Tradicionales Medium Hawaiana',
        price:'',
        ingredients:''},

        {pos:45,
        image: "imagen45",
        food:'Tradicionales Medium Salami',
        price:'',
        ingredients:''},

        {pos:46,
        image: "imagen46",
        food:'Tradicionales Medium Pollo',
        price:'',
        ingredients:''},

        {pos:47,
        image: "imagen47",
        food:'Tradicionales Medium Cabano',
        price:'',
        ingredients:''},

        {pos:48,
        image: "imagen48",
        food:'Tradicionales Medium Suiza',
        price:'',
        ingredients:''},

        {pos:49,
        image: "imagen49",
        food:'Tradicionales Medium Chori - Buti',
        price:'',
        ingredients:''},

        {pos:50,
        image: "imagen50",
        food:'Tradicionales Medium Vegetariana',
        price:'',
        ingredients:''},

        {pos:51,
        image: "imagen51",
        food:'Tradicionales Medium Peperoni',
        price:'',
        ingredients:''},

        {pos:52,
        image: "imagen52",
        food:'Tradicionales Large Jamón Queso',
        price:'',
        ingredients:''},

        {pos:53,
        image: "imagen53",
        food:'Tradicionales Large Hawaiana',
        price:'',
        ingredients:''},

        {pos:54,
        image: "imagen54",
        food:'Tradicionales Large Salami',
        price:'',
        ingredients:''},

        {pos:55,
        image: "imagen55",
        food:'Tradicionales Large Pollo',
        price:'',
        ingredients:''},

        {pos:56,
        image: "imagen56",
        food:'Tradicionales Large Cabano',
        price:'',
        ingredients:''},

        {pos:57,
        image: "imagen57",
        food:'Tradicionales Large Suiza',
        price:'',
        ingredients:''},

        {pos:58,
        image: "imagen58",
        food:'Tradicionales Large Chori - Buti',
        price:'',
        ingredients:''},

        {pos:59,
        image: "imagen59",
        food:'Tradicionales Large Vegetariana',
        price:'',
        ingredients:''},

        {pos:60,
        image: "imagen60",
        food:'Tradicionales Large Peperoni',
        price:'',
        ingredients:''},

        {pos:61,
        image: "imagen61",
        food:'Adicional De Ajo',
        price:'',
        ingredients:''},

        {pos:62,
        image: "imagen62",
        food:'Adicional De Maíz',
        price:'',
        ingredients:''},

        {pos:63,
        image: "imagen63",
        food:'Adicional De Salami',
        price:'',
        ingredients:''},

        {pos:64,
        image: "imagen64",
        food:'Adicional De Jamón',
        price:'',
        ingredients:''},

        {pos:65,
        image: "imagen65",
        food:'Adicional De Chorizo',
        price:'',
        ingredients:''},

        {pos:66,
        image: "imagen66",
        food:'Adicional De Butifarra',
        price:'',
        ingredients:''},

        {pos:67,
        image: "imagen67",
        food:'Adicional De Peperoni',
        price:'',
        ingredients:''},

        {pos:68,
        image: "imagen68",
        food:'Adicional De Champiñon',
        price:'',
        ingredients:''},

        {pos:69,
        image: "imagen69",
        food:'Adicional De Borde De Queso',
        price:'',
        ingredients:''},
             
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>PIZZA-MUY PRONTO😎🍕</h2>
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
export { Menu10 };