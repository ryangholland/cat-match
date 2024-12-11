import { Button } from "@headlessui/react";

function DifficultySelect({setDifficulty, setScreenState, setScore}) {
  const handleClick = (difficulty) => {
    setDifficulty(difficulty);
    setScreenState("active");
    setScore(difficulty === "easy" ? 50 :
      difficulty === "medium" ? 100 : 200
    )
  };

  return (
    <div className="flex flex-col gap-4">
      <Button
        className="rounded bg-slate-600 py-2 px-4 text-2xl text-white data-[hover]:bg-slate-500 data-[active]:bg-slate-700"
        onClick={() => handleClick("easy")}
      >
        Easy
      </Button>

      <Button
        className="rounded bg-slate-600 py-2 px-4 text-2xl text-white data-[hover]:bg-slate-500 data-[active]:bg-slate-700"
        onClick={() => handleClick("medium")}
      >
        Medium
      </Button>

      <Button
        className="rounded bg-slate-600 py-2 px-4 text-2xl text-white data-[hover]:bg-slate-500 data-[active]:bg-slate-700"
        onClick={() => handleClick("hard")}
      >
        Hard
      </Button>
    </div>
  );
}

export default DifficultySelect;
