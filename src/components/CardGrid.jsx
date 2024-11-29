import { useEffect, useState } from "react";

import CatCard from "./CatCard";

function CardGrid() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=10"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-5 md:gap-4 p-2 justify-center place-items-center max-w-2xl">
      <CatCard imageUrl={data[0].url} />
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />

      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />

      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />

      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
    </div>
  );
}

export default CardGrid;
