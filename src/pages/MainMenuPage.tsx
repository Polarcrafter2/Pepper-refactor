import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { pepperService } from "../services/PepperService";

export const MainMenuPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we should play the first-time intro
    const searchParams = new URLSearchParams(location.search);
    const isFirstVisit = searchParams.get("init") === "1";

    speakIntro(isFirstVisit);
  }, [location]);

  const speakIntro = (isFirst: boolean) => {
    pepperService.shutUpAndContinue();

    if (isFirst) {
      setTimeout(() => {
        pepperService.animatedSpeak(
          "Boy",
          "Ich bin der Prototyp eines Info-Törminells. \
          Ich kann Bürger bei ihrem Besuch bei einer Behörde unterstützen, \
          zum Beispiel auf unserem Bürgeramt.",
        );
      }, 450);
    }

    setTimeout(() => {
      pepperService.animatedSpeak(
        "Boy",
        "Hier ist die Hauptauswahl. \
        Ich kann Sie beim Besuch des Bürgeramtes beraten. Sie können etwas mit mir spielen \
        oder sich auch über die Hochschule hier am Ort informieren.",
      );
    }, 500);

    setTimeout(() => {
      pepperService.sayGesture(
        "^start(animations/Stand/Gestures/ShowTablet_1)",
        "Klicken Sie zur Auswahl einfach auf eine der Battens * hier auf meinem Täblet!",
      );
    }, 550);
  };

  const handleBuergeramtClick = () => {
    pepperService.shutUpAndContinue();
    setTimeout(() => pepperService.playSound(5), 300);
    setTimeout(() => {
      pepperService.animatedSpeak(
        "Boy",
        "Gehören Sie auch zu den Bürgern, für die jeder \
        Behördengang fast ein Alptraum ist? Das muss nicht sein! Ich bin hier, um Sie nach Kräften \
        zu unterstützen. Klicken Sie einfach auf weiter!",
      );
    }, 500);
  };

  const handleSpieleClick = () => {
    pepperService.shutUpAndContinue();
    setTimeout(() => pepperService.playSound(5), 300);
    setTimeout(() => {
      pepperService.sayEvent(
        "Sax",
        "Prima! Ich spiele immer gerne, wenn mir etwas langweilig ist. Hier sind meine Lieblingsspiele. \
        Aber vorher gibt es noch einen kleinen Tusch für Dich!",
      );
    }, 600);
    setTimeout(() => {
      pepperService.sayGesture(
        "^start(animations/Stand/Gestures/ShowTablet_1)",
        "Klicken Sie zur Auswahl einfach auf eine der Battens * hier auf meinem Täblet!",
      );
    }, 550);
  };

  const handleHFUClick = () => {
    pepperService.shutUpAndContinue();
    setTimeout(() => pepperService.playSound(5), 300);
    setTimeout(() => {
      pepperService.animatedSpeak(
        "Boy",
        "Wussten Sie, dass die Stadt Villingen-Schwenningen einen Campus von einer \
        der größten Hochschulen in unserem Bundesland aufweist?",
      );
    }, 500);
    setTimeout(() => {
      pepperService.animatedSpeak(
        "Boy",
        "Ja, die H F U ist mit über 6000 Studierenden eine der ältesten und \
        renommiertesten Hochschulen in Baden-Württemberg.",
      );
    }, 550);
    setTimeout(() => {
      pepperService.animatedSpeak(
        "Boy",
        "Und für das Projekt V S digital ist die H F U ein wichtiger Kooperationspartner. \
        Drücken Sie weiter für noch mehr spannende Informationen dazu.",
      );
    }, 600);
  };

  const handleAboutClick = () => {
    pepperService.shutUpAndContinue();
    pepperService.playSound(5); // swipeR2L
    setTimeout(() => {
      pepperService.sayGesture(
        "^start(animations/Stand/Gestures/ShowTablet_1)",
        "Aha! Sie wollen also noch etwas mehr Informationen \
        zu diesem spannenden Projekt bekommen? Gerne! Hier habe ich einiges für Sie * zusammengestellt!",
      );
    }, 900);
  };

  return (
    <div className="main-menu-page">
      <header>
        <h1>Hauptauswahl</h1>
      </header>

      <main>
        <div className="menu-options">
          <Link
            to="/buergeramt"
            className="menu-option"
            onClick={handleBuergeramtClick}
          >
            <div className="option-content">
              <h2>Bürgeramt</h2>
              <p>Informationen und Services des Bürgeramts</p>
            </div>
          </Link>

          <Link
            to="/spiele"
            className="menu-option"
            onClick={handleSpieleClick}
          >
            <div className="option-content">
              <h2>Spiele</h2>
              <p>Spielen Sie mit mir Memory oder Tic-Tac-Toe</p>
            </div>
          </Link>

          <Link to="/hfu" className="menu-option" onClick={handleHFUClick}>
            <div className="option-content">
              <h2>HFU</h2>
              <p>Informationen zur Hochschule Furtwangen</p>
            </div>
          </Link>
        </div>
      </main>

      <footer>
        <Link to="/about" className="footer-link" onClick={handleAboutClick}>
          Über das Projekt
        </Link>
        <Link to="/" className="footer-link">
          Home
        </Link>
      </footer>
    </div>
  );
};
