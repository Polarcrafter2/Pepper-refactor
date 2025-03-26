import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { pepperService } from "../services/PepperService";

export const HomePage: React.FC = () => {
  useEffect(() => {
    // Introduction speech when the page loads
    pepperService.shutUpAndContinue();
    setTimeout(() => {
      pepperService.animatedSpeak(
        "Boy",
        "Herzlich Willkommen zu diesem Workshop! \
        Mein Name ist Pepper, und ich freue mich, dass Sie hergekommen sind, um \
        sich über das Digitalisierungsprojekt V S digital zu informieren.",
      );
    }, 800);
  }, []);

  const handleSetupClick = () => {
    pepperService.shutUpAndContinue();
    setTimeout(() => pepperService.playSound(5), 300);
  };

  const handleMainMenuClick = () => {
    window.console.log("HomePage: Navigating to main menu");
  };

  const handleVolumeUp = () => {
    pepperService.volPlus();
  };

  const handleVolumeDown = () => {
    pepperService.volMinus();
  };

  const handleMute = () => {
    pepperService.playSound(0); // pling
    pepperService.setMute();
  };

  const handleUnmute = () => {
    pepperService.setUnmute();
    pepperService.playSound(0); // pling
  };

  const handleTestSpeak = () => {
    pepperService.sayGesture(
      "^run(animations/Stand/Waiting/Robot_1)",
      "Wahauh, Hammer! * Ich bin ehrlich beeindruckt. Du hast dieses Memory-Spiel wirklich \
      bis zu Ende durchgespielt. Dein Gedächtnis ist ja fast so gut wie meins.",
    );
  };

  return (
    <div className="home-page">
      <header>
        <h1>VS Digital - Pepper Interface</h1>
      </header>

      <main>
        <div className="main-buttons">
          <Link
            to="/main-menu"
            className="button button-primary"
            onClick={handleMainMenuClick}
          >
            Hauptauswahl
          </Link>
          <Link
            to="/setup"
            className="button button-secondary"
            onClick={handleSetupClick}
          >
            Setup
          </Link>
        </div>

        <div className="volume-controls">
          <h2>Volume Controls</h2>
          <div className="control-buttons">
            <button onClick={handleVolumeUp} className="button">
              Volume +
            </button>
            <button onClick={handleVolumeDown} className="button">
              Volume -
            </button>
            <button onClick={handleMute} className="button">
              Mute
            </button>
            <button onClick={handleUnmute} className="button">
              Unmute
            </button>
          </div>
        </div>

        <div className="test-section">
          <h2>Test Speech</h2>
          <button onClick={handleTestSpeak} className="button button-test">
            Speak Test
          </button>
        </div>
      </main>

      <footer>
        <p>© 2023 VS Digital - Pepper Interface</p>
      </footer>
    </div>
  );
};
