import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Ні",
      "Ти впевнена?",
      "Точно?",
      "Подумай ще раз!",
      "Останній шанс!",
      "Реально ні?",
      "Юля подумай!!",
      "Ріл подумай!!",
      "Ти точно впевнена???",
      "Це може бути помилка!!",
      "Май совість!",
      "Та годі!!",
      "А ну без приколів!!",
      "Ти серйозно??",
      "Це твоя фінальна відповідь??",
      "Ти мене засмутила :((",
      "Подумай ще раз",
      "Тепер подумай над своєю поведінкою(",
      "Я з тобою не поділюсь полуницею!",
      "Ну зай :(",
      "Тоді я тебе не обійму("
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">      
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media1.tenor.com/m/3MN6dnbHY9QAAAAC/spideypool-kiss.gif" />
            <div className="text-container">Я тебе розцілую :*</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://media.tenor.com/j8m4rwG-sFkAAAAi/batman.gif"
            />
            <h1 className="text-container">Будеш моєю зайкою :*?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Ja;
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "Nein" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
