import "./Food.css";

function Food_Items() {
  return (
    <div id="food-section">
      <h1>Our <span>Popular</span> Items</h1>
      <p>Try our popular items, crafted fresh with irresistible flavors.</p>

      <div id="food-cards">
        {/* Card 1 - Butter Chicken */}
        <div className="food-card">
          <img src="https://static.toiimg.com/photo/53110049.cms" alt="Butter Chicken" />
          <h3>Butter Chicken</h3>
          <p>Cost: ₹250</p>
          <p className="food-description">
            A rich, creamy curry made with tender chicken pieces, slow-cooked in a spiced tomato sauce with a touch of butter. Perfect with naan or rice!
          </p>
          <button>Order Now</button>
        </div>

        {/* Card 2 - Paneer Tikka */}
        <div className="food-card">
          <img src="https://spicecravings.com/wp-content/uploads/2020/10/Paneer-Tikka-Featured-1.jpg" alt="Paneer Tikka" />
          <h3>Paneer Tikka</h3>
          <p>Cost: ₹200</p>
          <p className="food-description">
            Grilled cubes of paneer (Indian cottage cheese) marinated in a spiced yogurt mix, served with mint chutney. A perfect vegetarian starter!
          </p>
          <button>Order Now</button>
        </div>

        {/* Card 3 - Veg Biryani */}
        <div className="food-card">
          <img src="https://i.ytimg.com/vi/Do7ZdUodDdw/maxresdefault.jpg" alt="Veg Biryani" />
          <h3>Veg Biryani</h3>
          <p>Cost: ₹180</p>
          <p className="food-description">
            A fragrant rice dish made with basmati rice, mixed vegetables, and aromatic spices like saffron. Perfectly paired with raita.
          </p>
          <button>Order Now</button>
        </div>

        {/* Card 4 - Chicken 65 */}
        <div className="food-card">
          <img src="https://bonmasala.com/wp-content/uploads/2022/06/Chicken-65-recipe.webp" alt="Chicken 65" />
          <h3>Chicken 65</h3>
          <p>Cost: ₹220</p>
          <p className="food-description">
            A spicy, crispy fried chicken dish seasoned with curry leaves, green chilies, and a blend of spices. A popular snack or appetizer.
          </p>
          <button>Order Now</button>
        </div>

      </div>
    </div>
  );
}

export default Food_Items;
