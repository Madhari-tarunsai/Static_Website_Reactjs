import "./Teams.css";

function Teams() {
  return (
    <div id="reviews-section">
      <h1>What <span>Our Customers Say</span> About Us</h1>
      <div id="reviews-cards">
        {/* Review 1 */}
        <div className="review-card">
          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Customer 1" />
          <p>"The food was amazing! Highly recommend their Butter Chicken and Paneer Tikka. Will definitely order again."</p>
        </div>

        {/* Review 2 */}
        <div className="review-card">
          <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Customer 2" />
          <p>"Excellent delivery speed and the food was fresh and hot. The Veg Biryani was fantastic!"</p>
        </div>

        {/* Review 3 */}
        <div className="review-card">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer 3" />
          <p>"A great dining experience. I love their Chicken 65! Definitely one of the best I've had."</p>
        </div>

        {/* Review 4 */}
        <div className="review-card">
          <img src="https://randomuser.me/api/portraits/women/20.jpg" alt="Customer 4" />
          <p>"Their food never disappoints. The Paneer Tikka and Biryani are the highlights. Always a fan!"</p>
        </div>

        {/* Review 5 */}
        <div className="review-card">
          <img src="https://randomuser.me/api/portraits/men/50.jpg" alt="Customer 5" />
          <p>"Quick delivery, great taste. I love the variety of options available. Highly recommended!"</p>
        </div>
      </div>
    </div>
  );
}

export default Teams;
