import { useState } from "react";

import CardGrid from "./components/CardGrid";
import { Button } from "@headlessui/react";

function App() {
  const [gameActive, setGameActive] = useState(false);

  return (
    <div className="flex flex-col min-h-screen ">
      <header className="bg-slate-100">
        <div className="container mx-auto p-4 max-w-6xl flex justify-center">
          <img
            src="./src/assets/logo.png"
            alt="CatMatch logo"
            className="w-32 h-auto"
          />
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        {!gameActive && (
          <Button
            className="rounded bg-slate-600 py-2 px-4 text-2xl text-white data-[hover]:bg-slate-500 data-[active]:bg-slate-700"
            onClick={() => setGameActive(true)}
          >
            Start Game
          </Button>
        )}

        {gameActive && <CardGrid setGameActive={setGameActive} />}
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
