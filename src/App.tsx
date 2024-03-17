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
      "В смысле нет??",
      "Ты уверена?",
      "Не спеши, обдумай!",
      "Точно-точно?",
      "Ты даже не сомневаешься?",
      "Ну Ира-аааа",
      "А может позже??",
      "Ну ладно((",
      "Не передумаешь?",
      "Точно?",
      "Точно-точно?",
      "Точно-точно-точно?",
      "Ну ИРАААааааа",
      "А я тебе взамен отправлю фото целующихся вигуков",
      "И не только вигуков",
      "Передумала?",
      "А если я тебе прочту фанфик о вигуках?",
      "Тоже нет??",
      "А ты точно Ира?",
      "Нет значит да?",
      "Нет?",
      "Да?",
      "АЭЭЭЭ",
      "Пиз?"
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">      
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media1.tenor.com/m/Nt_gWzIXZdcAAAAd/taekook-awkward-jikook.gif" />
            <div className="text-container">УрааААААА теперь я счастлива!!! Пойду смотреть на целующихся вигуков</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://media1.tenor.com/m/kN-nCTDiRLQAAAAd/taehyung.gif"
            />
            <h1 className="text-container">Давай устроим на днях лютую вечеринку века и поговорим по аудио?? Может фильмец посмотрим ;))</h1>
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
