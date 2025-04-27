import "./Banner.css";

function Banner() {
  return (
    <div id="home">
      <div id="banner-content">
        <div id="banner-text">
          <h1>
            Delicious Meals <span>Delivered</span> to Your Door
          </h1>
          <p>Enjoy fresh, flavorful meals with the finest ingredients, delivered straight to your door, every time.</p>
          <div id="banner-buttons">
            <button>Order Now</button>
            <button>Learn More</button>
          </div>
        </div>

        <div id="banner-image">
          <img src="https://assets.foodhub.com/images/thumbnails/burgers_fried-chicken_pizza_002_692x306.jpg" alt="foodhub" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
