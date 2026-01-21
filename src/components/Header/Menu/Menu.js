import React, { useState } from "react";
import "./Menu.css";

import instagram from "./imgMenu/icoInstagram.svg";
// imports futuros (comentados para evitar CI errors)
// import faceboock from "./imgMenu/icoFacebook.svg";
// import twitter from "./imgMenu/icoTwitter.svg";
// import tiktok from "./imgMenu/icoTiktok.svg";

import domicilio from "./imgMenu/icoDomicilio.svg";
import priority1 from "../../Body/imgBody/priority1.1.gif";

function Menu() {
  const [menuVisible, setMenuVisible] = useState(true);
  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const redesItem = [
    {
      redSocial: "instagram",
      imageRedSocial: instagram,
      userRedSocial: "eldesviorestobar59",
      linkRedSocial:
        "https://instagram.com/eldesviorestobar59?igshid=NGVhN2U2NjQ0Yg==",
    },
    /*
    {
      redSocial: "facebook",
      imageRedSocial: faceboock,
      userRedSocial: "El Desvío Restobar",
      linkRedSocial: "https://www.facebook.com/profile.php?id=100092939194114",
    },
    {
      redSocial: "twitter",
      imageRedSocial: twitter,
      userRedSocial: "Plate_fork",
      linkRedSocial: "https://jorgeisaacvilla.github.io/my_portafolio/",
    },
    {
      redSocial: "tiktok",
      imageRedSocial: tiktok,
      userRedSocial: "@Platefork",
      linkRedSocial: "https://jorgeisaacvilla.github.io/my_portafolio/",
    },
    */
  ];

  return (
    <>
      {menuVisible && (
        <div className="component-menu">
          <div>
            <div className="component-header-menu">
              <div className="logo-restaurante"></div>
              <div
                className="menu-closed"
                onClick={toggleMenu}
                role="button"
                tabIndex={0}
                aria-label="Cerrar menú"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleMenu();
                }}
              ></div>
            </div>

            <h2 className="tittle-redes-social">Síguenos</h2>

            <ul>
              {redesItem.map((redes) => (
                <div className="item-redes" key={redes.redSocial}>
                  <a
                    href={redes.linkRedSocial}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ir a ${redes.redSocial}`}
                  >
                    <img
                      src={redes.imageRedSocial}
                      alt={redes.redSocial}
                      loading="lazy"
                    />
                    <p>{redes.userRedSocial}</p>
                  </a>
                </div>
              ))}
            </ul>

            <div className="line"></div>

            <div className="domicilio">
              <div className="image-domicilio">
                <img
                  src={domicilio}
                  alt="Servicio a domicilio"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="h2-image-domicilio">¡Envío a domicilio!</h2>
                <p className="p-image-domicilio">
                  Servicio a domicilios 322-258-44-28.
                </p>
              </div>
            </div>
          </div>

          <div className="container-publicidad-menu">
            <img
              className="publicity-section-menu"
              src={priority1}
              alt="Promociones El Desvío Restobar 59"
              loading="lazy"
            />
          </div>

          <div className="footer-component-menu">
            <div className="line" style={{ marginBottom: "16px" }}></div>
            <a
              href="https://jorgeisaac.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Realizado por Jorge Isaac Villa López | Portfolio.com
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export { Menu };
