import { useState } from "react";
import CardGrid from "./components/CardGrid";
import DifficultySelect from "./components/DifficultySelect";
import { Button } from "@headlessui/react";

function App() {
  const [screenState, setScreenState] = useState("default");
  const [difficulty, setDifficulty] = useState("medium");
  const [score, setScore] = useState(0);

  return (
    <div className="flex flex-col min-h-screen ">
      <header className="bg-slate-100">
        <div className="container mx-auto p-4 max-w-6xl flex justify-around items-center">
          <img
            src="./src/assets/logo.png"
            alt="CatMatch logo"
            className="w-32 h-auto"
          />
          <p className="text-2xl">Score: {score}</p>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        {screenState === "default" && (
          <Button
            className="rounded bg-slate-600 py-2 px-4 text-2xl text-white data-[hover]:bg-slate-500 data-[active]:bg-slate-700"
            onClick={() => setScreenState("difficulty")}
          >
            Start Game
          </Button>
        )}

        {screenState === "difficulty" && (
          <DifficultySelect
            setDifficulty={setDifficulty}
            setScreenState={setScreenState}
            setScore={setScore}
          />
        )}

        {screenState === "active" && (
          <CardGrid
            difficulty={difficulty}
            setScreenState={setScreenState}
            setScore={setScore}
          />
        )}

        {screenState === "end" && (
          <div className="flex flex-col gap-6 text-center ">
            <h1 className="text-4xl">You won!</h1>
            <h2 className="text-2xl">Score: {score}</h2>
            <Button
              className="rounded bg-slate-600 py-2 px-4 text-2xl text-white data-[hover]:bg-slate-500 data-[active]:bg-slate-700"
              onClick={() => {
                setScore(0);
                setScreenState("default");
              }}
            >
              Main Menu
            </Button>
          </div>
        )}
      </main>

      <footer className="bg-slate-100">
        <div className="container mx-auto p-4 text-center">
          <p>&copy; 2024 Ryan Holland</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
