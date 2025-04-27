import "./About.css";

function About() {
  return (
    <div id="about">
      <div id="about-content">
        
        <div id="about-image">
          <img src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2016/07/030816_BestRolls_Rollmall.jpg" alt="chi" />
        </div>

        <div id="about-text">
          <h3>------- About Us</h3>
          <h1>Inspired by Taste, Built on <span>Quality</span></h1>
          <p>Passionate about quality, we create delicious meals with fresh ingredients and care.</p>
          <ul>
            <li>Fresh Food, Fast Delivery</li>
            <li>Taste the Freshness in Every Bite</li>
            <li>10% off every Sunday for all food items</li>
          </ul>
          <p className="learn-more">Learn More</p>
        </div>

      </div>
    </div>
  );
}

export default About;
