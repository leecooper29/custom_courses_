import ReviewCard from './ReviewCard';

function ReviewsSection(): JSX.Element {
  return (
    <div className="grid-item-">
      <h3>Course Reviews</h3>
      <ReviewCard
        title="Financial Literacy for students"
        quote="I highly recommend taking the financial courses that are available on enhanced youth. I was able to learn many new skills about finances, stocks, and even taxes that I would have not learned in college"
      />
      <ReviewCard
        title="Personal Branding"
        quote="I was a little skeptical at first, but I decided to jump the gun and realized how detailed each course was, Totally worth it!"
      />
    </div>
  );
}

export default ReviewsSection;


