import React from "react";
import reviewImage1 from "../assests/img/review1.png";
import reviewImage2 from "../assests/img/review2.png";
import reviewImage3 from "../assests/img/review3.png";
import user1 from "../assests/img/Ellipse 1 (1).png";
import user2 from "../assests/img/Ellipse 1 (2).png";
import user3 from "../assests/img/Ellipse 1.png";
import { FaStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const reviewsData = [
  {
    id: 1,
    heading : "Good Quality",
    text: "I Highly recommend shopping from Kicks.",
    image: reviewImage1,
    rating: 5.0,
    user : user3,
  },
  {
    id: 2,
    heading : "Good Quality",
    text: "I Highly recommend shopping from Kicks.",
    image: reviewImage2,
    rating: 5.0,
    user : user1,
  },
  {
    id: 3,
    heading : "Good Quality",
    text: "I Highly recommend shopping from Kicks.",
    image: reviewImage3,
    rating: 5.0,
    user : user2,
  },
];

const Reviews = () => {
  return (
    <section className="reviews-section">
      <div className="reviews-header">
          <h2 className="reviews-title">REVIEWS</h2>
          <button className="see-all-button">SEE ALL</button>
      </div>
      <div className="reviews-container">
          {reviewsData.map((review,index)=>(
              <div className="review-card" key={index}>

                <div className="review-header">
                  <div className="review-rating">
                    <h1 className="review-heading">{review.heading}</h1>
                    <h3 className="review-title">{review.text}</h3>
                    <div className="review-star">
                      {[...Array(review.rating)].map((_, index) => (
                        <IoIosStar key={index} color="#ffbc00" size={20} />
                        ))} {review.rating}
                    </div>
                  </div>
                  <div className="review-user">
                    <img
                      src={review.user}
                      alt="User"
                      className="review-user-img"
                    />
                  </div>
                </div>

                <div className="review-body">
                  <img src={review.image} alt="Review" className="review-image" />
                </div>
              </div>

            ))}
        {/* {reviewsData.map((review) => (
          <div className="review-card" key={review.id}>
            <div className="review-image">
              <img src={review.image} alt="Review" />
            </div>
            <div className="review-text">
              <p>{review.text}</p>
              <div className="review-rating">
                {"★".repeat(review.rating)} 
              </div>
            </div>
          </div>
        ))} */}
          {/* {reviewsData.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-header">
              <div className="review-rating">
                {[...Array(review.rating)].map((_, index) => (
                  <FaStar key={index} color="#ffbc00" size={20} />
                ))}
              </div>
              <h3 className="review-title">{review.text}</h3>
            </div>
            <div className="review-body">
              <img src={review.image} alt="Review" className="review-image" />
              <div className="review-user">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="review-user-img"
                />
              </div>
            </div>
          </div>
        ))} */}

        
      </div>
    </section>
  );
};

export default Reviews;
