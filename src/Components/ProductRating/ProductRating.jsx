import { StarIcon } from "@heroicons/react/24/outline";

const ProductRating = (props) => {
  const starNumber = props.avgRating;
  const ratingNumber = props.ratings;

  return (
    <div className="flex">
      <span className="ml-3 text-blue-500">{ratingNumber} Ratings:</span>
      {Array.from({ length: starNumber }, (_, i) => (
        <StarIcon
          key={i}
          className="stroke-[#F1B61F] fill-[#F1B61F] h-[20px]"
        />
      ))}
      {Array.from({ length: 5 - starNumber }, (_, i) => (
        <StarIcon key={i} className="stroke-[#F1B61F] h-[20px]" />
      ))}
    </div>
  );
};

export default ProductRating;
