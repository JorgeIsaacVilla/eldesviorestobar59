import React, { useState } from "react";
import "./Game.css";

import pacman from "./imgGame/pacman.png";
import priority3 from "../imgFooter/priority3.gif";

function Game() {
  const [gameVisible, setGameVisible] = useState(true);
  const toggleGame = () => {
    setGameVisible((prev) => !prev);
  };

  const gamesItem = [
    {
      url: "https://jorgeisaac.vercel.app",
      imageGame: pacman,
      nameGame: "Games Online (En mantenimiento)",
    },
    {
      url: "https://chuchito.shop",
      imageGame:
        "https://chuchito.shop/wp-content/uploads/2025/12/Isologo-scaled.png",
      nameGame: "Tienda para bebés",
    },
  ];

  return (
    <>
      {gameVisible && (
        <div className="component-game">
          <div>
            <div className="component-header-footer">
              <div className="logo-restaurante"></div>
              <div
                className="menu-closed"
                onClick={toggleGame}
                role="button"
                tabIndex={0}
                aria-label="Cerrar sección de juegos"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleGame();
                }}
              ></div>
            </div>

            <div className="contend-games">
              <h2>¡Espacios para disfrutar</h2>
              <h2>mientras esperas!</h2>

              <div className="scroll-game">
                <ul>
                  {gamesItem.map((game) => (
                    <div className="games" key={game.url}>
                      <a
                        href={game.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={game.nameGame}
                      >
                        <img
                          src={game.imageGame}
                          alt={game.nameGame}
                          loading="lazy"
                        />
                        <h3>{game.nameGame}</h3>
                      </a>
                    </div>
                  ))}
                </ul>

                <div className="line" style={{ marginBottom: "16px" }}></div>

                <h2>Nuestras promociones</h2>
                <h2>para ti 🎁</h2>

                <div className="publicity-container-game">
                  <img
                    className="publicity-section-game"
                    src={priority3}
                    alt="Promociones El Desvío Restobar 59"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
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

export { Game };
