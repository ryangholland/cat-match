import { useState } from "react";
const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-24 h-36 sm:w-28 sm:h-40"
      style={{
        perspective: "1000px", // Enables 3D perspective
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Card Inner */}
      <div
        className={`absolute w-full h-full transition-transform duration-500`}
        style={{
          transformStyle: "preserve-3d", // Ensures 3D flipping
          transform: isFlipped ? "rotateY(0deg)" : "rotateY(180deg)", // Conditional flip
        }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center rounded-lg"
          style={{
            backfaceVisibility: "hidden", // Hides the back
          }}
        >
          Front
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-cover bg-center  rounded-lg transform rotateY-180"
          style={{
            backfaceVisibility: "hidden", // Hides the front
            transform: "rotateY(180deg)", // Rotate the back side
            backgroundImage: `url(./src/assets/card-back.png)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FlippingCard;