import Link from "@/components/atoms/link";
import Title from "@/components/atoms/title";
import { Blog } from "@/util/blog";
import { useState } from "react";

export default function Cards() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <div className="flex justify-center items-center m-10">
      <div className=" grid grid-cols-2 gap-4">
        {Blog.map((card) => (
          <div
            className={`p-5 bg-white rounded-lg shadow w-[35rem] h-[18rem] ${
              selectedCard === card.id ? "hover:zoom" : ""
            }`}
            key={card.id}
            onMouseEnter={() => setSelectedCard(card.id)}
            onMouseLeave={() => setSelectedCard(null)}
          >
            <Title title={card.title} />
            <p className="max-w-400 py-8">{card.description}</p>
            <div className="flex justify-between items-center py-8">
              <span>{card.data}</span>
              <Link route="/ver" title="ver mais" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
