function HotelCard({
  image,
  name,
  location,
  rating,
  reviews,
  price,
  tag
}) {
  return (
    <div className="hotel-card">

      <div className="hotel-image-wrapper">
        <img src={image} alt={name} />

        {tag && (
          <span className="hotel-tag">{tag}</span>
        )}

        <button className="heart-btn">♡</button>
      </div>

      <div className="hotel-content">

        <div className="hotel-rating">
          <span>★ {rating}</span>
          <small>{reviews} reviews</small>
        </div>

        <h3>{name}</h3>

        <p className="hotel-location">
          📍 {location}
        </p>

        <div className="hotel-amenities">
          <span>✓ Free WiFi</span>
          <span>✓ Breakfast</span>
        </div>

        <div className="hotel-bottom">

          <div>
            <small>Starting from</small>
            <strong>₹{price.toLocaleString("en-IN")}</strong>
            <span> / night</span>
          </div>

          <button>View Hotel</button>

        </div>

      </div>
    </div>
  );
}

export default HotelCard;