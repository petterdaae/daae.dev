import { useState } from "react";

type Props = {
  answers: string[];
};

export default function SelectAnswer({ answers }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div>
      {answers.map((answer) => (
        <div
          key={answer}
          className={`grow border-2 border-black rounded-lg text-center p-8 mt-2 mb-2 cursor-pointer hover:bg-rose-300 ${
            answer == selected ? "bg-rose-300" : ""
          }`}
          onClick={() => setSelected(answer)}
        >
          {answer}
        </div>
      ))}
    </div>
  );
}
