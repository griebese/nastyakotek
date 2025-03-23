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
      "Нет",
      "ТЫ ЧО",
      "Эээ.. но ты же котек",
      "ТЫ КОТЕК!!! НИКАКИХ НЕТ!",
      "НЭТТ",
      "ТЫ ЧО",
      "НАСТЮШААААА",
      "ЭЭЭЭЭЭ",
      "НУ НИЗЯ ТАК ТЫ ЖЕ КОТЕК",
      "ТЫ КОТЕККК",
      "скажи мяу",
      "НУ КАКОЕ ГАВ",
      "мяу?",
      "МЯУ",
      "ну ты котеккк",
      "ты правда ми-ми-ми котек",
      "такая зайка-котек-енотек",
      "да-да тыыы",
      "вот помнишь енотеков",
      "вот ты одна из них",
      "ТАК ШТО НИКАКИХ НЕТ",
      "пон??",
      "да пон??",
      "поннн???",
      "все кароче пака"
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">      
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media1.tenor.com/m/QSXHbbtyF4UAAAAC/cat-haircut-cat.gif" />
            <div className="text-container">УРААААААААА ДА ТЫ КОТЕК УРА УРА УРА ты и правда такая ми-ми-ми я тя оч оч люблю целую!!</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://media1.tenor.com/m/qR1sGRNmfqsAAAAd/besito-catlove.gif"
            />
            <h1 className="text-container">ТЫ КОТЕК????</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Да
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "Нет" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
