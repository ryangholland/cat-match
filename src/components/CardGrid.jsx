import { useEffect, useState } from "react";
import staticCats from "../utils/staticCats";

import CatCard from "./CatCard";

function CardGrid() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [disableClicks, setDisableClicks] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(
        //   "https://api.thecatapi.com/v1/images/search?limit=10"
        // );
        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }
        // const result = await response.json();
        const result = staticCats;

        // Duplicate each cat object, assign new IDs,
        // shuffle array, set data
        setData(
          result
            .flatMap((obj) => [
              { ...obj, id: `${obj.id}-a` },
              { ...obj, id: `${obj.id}-b` },
            ])
            .sort(() => Math.random() - 0.5)
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (id) => {
    
    if (disableClicks || matchedCards.includes(id) || flippedCards.includes(id))
      return;

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      // compare image URL for each card, determine match
      const catsToCompare = data.filter((catObject) => {
        return newFlippedCards.includes(catObject.id);
      });

      if (catsToCompare[0].url === catsToCompare[1].url) {
        setMatchedCards([...matchedCards, ...newFlippedCards]);
        setFlippedCards([]);
      } else {
        setDisableClicks(true);
        setTimeout(() => {
          setFlippedCards([]);
          setDisableClicks(false);
        }, 1500);
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-5 md:gap-4 p-2 justify-center place-items-center max-w-2xl">
      {data.map((catObject) => {
        return (
          <CatCard
            key={catObject.id}
            id={catObject.id}
            imageUrl={catObject.url}
            isFlipped={
              matchedCards.includes(catObject.id) ||
              flippedCards.includes(catObject.id)
            }
            handleCardClick={handleCardClick}
          />
        );
      })}
    </div>
  );
}

export default CardGrid;
