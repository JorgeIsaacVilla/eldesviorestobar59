import React, { useState } from "react";
import { ScannerQR } from "./ScannerQR/ScannerQR";
import "./Footer.css";
import { Game } from "./Game/Game";

function Footer() {
  const phoneNumber = "573222584428";
  const message = "Hola! Quiero hacer un pedido.";

  const [scannerQrVisible, setScannerQrVisible] = useState(false);
  const toggleScannerQr = () => {
    setScannerQrVisible((prev) => !prev);
  };

  const [gameVisible, setGameVisible] = useState(false);
  const toggleGame = () => {
    setGameVisible((prev) => !prev);
  };

  return (
    <>
      {gameVisible && <Game />}
      {scannerQrVisible && <ScannerQR />}

      <div className="component-footer">
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp"
          aria-label="Abrir WhatsApp para hacer un pedido"
        >
          <span className="sr-only">WhatsApp</span>
        </a>

        <div
          className="game"
          onClick={toggleGame}
          role="button"
          tabIndex={0}
          aria-label="Abrir juegos"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") toggleGame();
          }}
        ></div>

        <div
          className="qr"
          onClick={toggleScannerQr}
          role="button"
          tabIndex={0}
          aria-label="Abrir código QR"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") toggleScannerQr();
          }}
        ></div>
      </div>
    </>
  );
}

export { Footer };
