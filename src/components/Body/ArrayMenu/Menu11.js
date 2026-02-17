import React from "react";
import "./Menu.css";

// Imágenes desactivadas por ahora
// import imagen1 from "./imgMenu10/img1.jpg";
// import imagen2 from "./imgMenu10/img2.jpg";
// import imagen3 from "./imgMenu10/img3.jpg";
// import imagen4 from "./imgMenu10/img4.jpg";
// import imagen5 from "./imgMenu10/img5.jpg";
// import imageMaintenance from "../imgBody/imageMaintenance.png";

function Menu11({ sectionId }) {
  // Lógica futura (cuando se reactive el popup):
  // const handleItemclick = (item) => {
  //   onProductClick(item);
  // };

    const menuItem =[
        
        {pos:1,
        image: 'imageMaintenance',
        food:'Coca-cola 400ml',
        price:5000,
        ingredients:''},
        
        {pos:2,
        image: 'imageMaintenance',
        food:'Agua de manzana 280ml',
        price:2000,
        ingredients:''},

        {pos:3,
        image: 'imageMaintenance',
        food:'Agua 600ml',
        price:3000,
        ingredients:''},
        
        {pos:4,
        image: 'imageMaintenance',
        food:'Agua cristal 300ml',
        price:1500,
        ingredients:''},
        
        {pos:5,
        image: 'imageMaintenance',
        food:'Jugo Hit pet 500ml',
        price:5000,
        ingredients:''},
                
        {pos:6,
        image: 'imageMaintenance',
        food:'Jugo Hit 1 litro',
        price:8000,
        ingredients:''},
        
        {pos:7,
        image: 'imageMaintenance',
        food:'Gaseosa Econo litro',
        price:7000,
        ingredients:''},
        
        {pos:8,
        image: 'imageMaintenance',
        food:'Mr. Tea',
        price:5000,
        ingredients:''},
        
        {pos:9,
        image: 'imageMaintenance',
        food:'Gaseosa Postobón 250ml',
        price:3000,
        ingredients:''},
        
        {pos:10,
        image: 'imageMaintenance',
        food:'Gaseosa Postobón 400ml',
        price:4000,
        ingredients:''},
        
        {pos:11,
        image: 'imageMaintenance',
        food:'Natumalta 400ml',
        price:4000,
        ingredients:''},
        
        {pos:12,
        image: 'imageMaintenance',
        food:'Natumalta 200ml',
        price:2500,
        ingredients:''},
        
        {pos:13,
        image: 'imageMaintenance',
        food:'Hit nectar 237ml',
        price:3000,
        ingredients:''},
        
        {pos:14,
        image: 'imageMaintenance',
        food:'Electrolit 625ml',
        price:12000,
        ingredients:''},
        
        {pos:15,
        image: 'imageMaintenance',
        food:'Gaseosa Postobón 1.5lt',
        price:7000,
        ingredients:''},
        
        {pos:16,
        image: 'imageMaintenance',
        food:'Gaseosa Litro',
        price:6000,
        ingredients:''},
        
        {pos:17,
        image: 'imageMaintenance',
        food:'Cocacola 2Litros',
        price:10000,
        ingredients:''},
            
        {pos:18,
        image: 'imageMaintenance',
        food:'Jugo Hit pet 300ml',
        price:3000,
        ingredients:''},

        {pos:19,
        image: 'imageMaintenance',
        food:'H2OH! lima limón 250ml',
        price:2000,
        ingredients:''},
        
        {pos:20,
        image: 'imageMaintenance',
        food:'H2OH! Limonata',
        price:1500,
        ingredients:''},
        
        {pos:21,
        image: 'imageMaintenance',
        food:'Agua gas 300ml',
        price:2000,
        ingredients:''},
        
        {pos:22,
        image: 'imageMaintenance',
        food:'Canadá dry 300ml',
        price:5000,
        ingredients:''},
        
        {pos:23,
        image: 'imageMaintenance',
        food:'Bretaña 300ml',
        price:5000,
        ingredients:''},
        
        {pos:24,
        image: 'imageMaintenance',
        food:'Gatorade',
        price:5000,
        ingredients:''},
        
        {pos:25,
        image: 'imageMaintenance',
        food:'Hatsu tea 400ml',
        price:6000,
        ingredients:''},
        
        {pos:26,
        image: 'imageMaintenance',
        food:'Hatsu soda 300ml',
        price:6000,
        ingredients:''},
        
        {pos:27,
        image: 'imageMaintenance',
        food:'Speed max 269ml',
        price:3000,
        ingredients:''},
        
        {pos:28,
        image: 'imageMaintenance',
        food:'Red Bull 250ml',
        price:12000,
        ingredients:''},
        
        {pos:29,
        image: 'imageMaintenance',
        food:'Gaseosa Postobón 2.5ml',
        price:10000,
        ingredients:''},
        
        {pos:30,
        image: 'imageMaintenance',
        food:'Coronita 210ml',
        price:7000,
        ingredients:''},
        
        {pos:31,
        image: 'imageMaintenance',
        food:'Budweiser 250ml',
        price:5000,
        ingredients:''},
        
        {pos:32,
        image: 'imageMaintenance',
        food:'Andina dorada 250ml',
        price:4000,
        ingredients:''},
        
        {pos:33,
        image: 'imageMaintenance',
        food:'Tecate lata 269ml',
        price:3500,
        ingredients:''},
        
        {pos:34,
        image: 'imageMaintenance',
        food:'Heineken 250ml',
        price:5000,
        ingredients:''},
        
        {pos:35,
        image: 'imageMaintenance',
        food:'Stella Artois 330ml',
        price:12000,
        ingredients:''},
    
        {pos:36,
        image: 'imageMaintenance',
        food:'Sol 269 ml',
        price:5000,
        ingredients:''},
        
        {pos:37,
        image: 'imageMaintenance',
        food:'Michelob 355ml',
        price:7000,
        ingredients:''},

        {pos:38,
        image: 'imageMaintenance',
        food:'Aguila ligth 330ml',
        price:5000,
        ingredients:''},
        
        {pos:39,
        image: 'imageMaintenance',
        food:'Costeña bacana 320ml',
        price:5000,
        ingredients:''},
        
        {pos:40,
        image: 'imageMaintenance',
        food:'Poker 330ml',
        price:5000,
        ingredients:''},
        
        {pos:41,
        image: 'imageMaintenance',
        food:'Aguila negra 330ml',
        price:5000,
        ingredients:''},
        
        {pos:42,
        image: 'imageMaintenance',
        food:'Costeñita 175ml',
        price:4000,
        ingredients:''},
        
        {pos:43,
        image: 'imageMaintenance',
        food:'Miller Lite 300ml',
        price:5000,
        ingredients:''},
        
        {pos:44,
        image: 'imageMaintenance',
        food:'Club Colombia dorada 330ml',
        price:7000,
        ingredients:''},
        
        {pos:45,
        image: 'imageMaintenance',
        food:'Andina ligth 269ml',
        price:4000,
        ingredients:''},
        
        {pos:46,
        image: 'imageMaintenance',
        food:'Smirnoff ice green Apple and ice original 275ml',
        price:12000,
        ingredients:''},
        
        {pos:47,
        image: 'imageMaintenance',
        food:'Adicional Micheladas',
        price:2000,
        ingredients:''},
        
        {pos:48,
        image: 'imageMaintenance',
        food:'Coca-cola 250ml',
        price:3000,
        ingredients:''},
    ]
    return (
    <>
      <h2 className="tittle-item" id={sectionId}>
        BEBIDAS
      </h2>

      <ul>
        {menuItem.map((item) => (
          <li key={item.pos}>
            {/* Click futuro:
            <li key={item.pos} onClick={() => handleItemclick(item)}>
            */}
            <div className="item-contend">
              {/* Imagen futura:
              <img
                src={item.image}
                alt={item.food ? `Imagen de ${item.food}` : ""}
                loading="lazy"
              />
              */}
              <div>
                <h3 className="tittle-food">{item.food}</h3>
                <p className="ingredients">{item.ingredients}</p>
              </div>
            </div>

            <p className="price">
              <strong>${item.price}</strong>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export { Menu11 };