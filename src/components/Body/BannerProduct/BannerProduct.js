import React from "react";
import "./BannerProduct.css";
/*import logoRestobar from '../../Header/imgHeader/Logotipo.png'*/

function BannerProduct({productInfo, onClose}) {
    const handleClose = () => {
        onClose();
    };
    return (
        <section className="banner-product-general">
            <div className="banner-product">
                <h1> {productInfo.food.toUpperCase()} </h1>

                <img className="image-banner-product" src={productInfo.image} alt={productInfo.food} />
                {/*<img className="image-banner-product" src={logoRestobar} alt="Mantenimiento de pagina" />
                <h3>El Desvio Restobar mejora tus servicios en línea. ¡Gracias por tu paciencia y apoyo!</h3>*/}

                <p className="product-content-banner">{productInfo.ingredients}</p>
                <h2>${productInfo.price}</h2>
                <button onClick={handleClose} className="close-button-banner-product">Cerrar</button>
            </div>
        </section>
    );
}

export { BannerProduct };