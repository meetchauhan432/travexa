import HotelCard from "../components/HotelCard";

function Hotels() {

  const hotels = [
    {
      name: "The Grand Palace Goa",
      location: "North Goa, India",
      rating: "4.8",
      reviews: "1,248",
      price: 3499,
      tag: "Top Rated",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Azure Beach Resort",
      location: "Maldives",
      rating: "4.9",
      reviews: "876",
      price: 8299,
      tag: "Luxury",
      image:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Urban Nest Hotel",
      location: "Dubai, UAE",
      rating: "4.7",
      reviews: "923",
      price: 5199,
      tag: "Popular",
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Mountain View Retreat",
      location: "Manali, India",
      rating: "4.6",
      reviews: "645",
      price: 2899,
      tag: "Best Value",
      image:
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Palm Grove Resort",
      location: "Kerala, India",
      rating: "4.8",
      reviews: "732",
      price: 4199,
      tag: "Guest Favourite",
      image:
        "https://images.unsplash.com/photo-1582610116397-edb318620f8a?auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "The City Grand",
      location: "Mumbai, India",
      rating: "4.5",
      reviews: "1,103",
      price: 3799,
      tag: "",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="results-page">

      <div className="results-header">

        <div>
          <span className="eyebrow">HOTELS</span>

          <h1>Find your perfect stay</h1>

          <p>
            Discover comfortable stays at destinations around the world.
          </p>
        </div>

        <button className="modify-btn">
          Modify Search
        </button>

      </div>


      <div className="hotel-results-layout">

        <aside className="filters">

          <h3>Filter stays</h3>

          <div className="filter-group">
            <strong>Property type</strong>

            <label>
              <input type="checkbox" />
              Hotels
            </label>

            <label>
              <input type="checkbox" />
              Resorts
            </label>

            <label>
              <input type="checkbox" />
              Villas
            </label>
          </div>

          <div className="filter-group">
            <strong>Guest rating</strong>

            <label>
              <input type="checkbox" />
              4.5+
            </label>

            <label>
              <input type="checkbox" />
              4.0+
            </label>
          </div>

          <div className="filter-group">
            <strong>Amenities</strong>

            <label>
              <input type="checkbox" />
              Free WiFi
            </label>

            <label>
              <input type="checkbox" />
              Breakfast
            </label>

            <label>
              <input type="checkbox" />
              Swimming Pool
            </label>
          </div>

        </aside>


        <div className="hotel-results">

          <div className="sort-bar">

            <span>
              <strong>{hotels.length}</strong> properties found
            </span>

            <select>
              <option>Recommended</option>
              <option>Lowest Price</option>
              <option>Highest Rated</option>
            </select>

          </div>

          <div className="hotel-grid results-grid">

            {hotels.map((hotel) => (
              <HotelCard
                key={hotel.name}
                {...hotel}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hotels;