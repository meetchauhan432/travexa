function FlightCard({
  airline,
  logo,
  from,
  to,
  departure,
  arrival,
  duration,
  stops,
  price
}) {
  return (
    <div className="flight-card">

      <div className="flight-airline">
        <div className="airline-logo">{logo}</div>

        <div>
          <strong>{airline}</strong>
          <span>Economy</span>
        </div>
      </div>

      <div className="flight-route">

        <div className="flight-time">
          <strong>{departure}</strong>
          <span>{from}</span>
        </div>

        <div className="flight-duration">
          <span>{duration}</span>
          <div className="route-line">
            <span>●</span>
            <div></div>
            <span>●</span>
          </div>
          <small>{stops}</small>
        </div>

        <div className="flight-time">
          <strong>{arrival}</strong>
          <span>{to}</span>
        </div>

      </div>

      <div className="flight-price">
        <span>Starting from</span>
        <strong>₹{price.toLocaleString("en-IN")}</strong>
        <small>per traveller</small>
        <button>View Flight</button>
      </div>

    </div>
  );
}

export default FlightCard;