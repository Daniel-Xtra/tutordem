import { useState } from "react";
import { Star } from "lucide-react";

interface RatingProps {
  size?: number;
  onRatingChange: (rating: number) => void;
}

const AppRating = ({ size = 20, onRatingChange }: RatingProps) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleMouseMove = (event: React.MouseEvent, value: number) => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - left;
    setHoverRating(x < width / 2 ? value - 0.5 : value);
  };

  const handleClick = (event: React.MouseEvent, value: number) => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - left;
    const newRating = x < width / 2 ? value - 0.5 : value;
    setRating(newRating);
    onRatingChange(newRating);
  };

  return (
    <div className="flex items-center gap-2 -mt-5 mr-2">
      {[1, 2, 3, 4, 5].map((star) => {
        const displayRating = hoverRating ?? rating;
        const isFull = displayRating >= star;
        const isHalf = displayRating === star - 0.5;

        return (
          <div
            key={star}
            className="relative cursor-pointer w-[12px]"
            onMouseMove={(e) => handleMouseMove(e, star)}
            onMouseLeave={() => setHoverRating(null)}
            onClick={(e) => handleClick(e, star)}
          >
            <Star
              size={size}
              className={`absolute ${
                isFull ? "text-yellow-500" : "text-gray-300"
              }`}
            />

            {isHalf && (
              <Star
                size={size}
                className="absolute text-yellow-500"
                style={{ clipPath: "inset(0 50% 0 0)" }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AppRating;
