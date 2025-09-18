import { GiRamProfile } from "react-icons/gi";

type ReviewCardProps = {
  title: string;
  quote: string;
};

function ReviewCard({ title, quote }: ReviewCardProps) {
  return (
    <div className="box">
      <GiRamProfile />
      <img alt="USER IMAGE" />
      <span>{title}</span>
      <p className="quote">{quote}</p>
    </div>
  );
}

export default ReviewCard;


