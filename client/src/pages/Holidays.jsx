import { Link } from "react-router-dom";

function Holidays() {

  const packages = [
    {
      title: "Goa Escape",
      location: "Goa, India",
      days: "4 Days / 3 Nights",
      price: "18,999",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Dubai Explorer",
      location: "Dubai, UAE",
      days: "5 Days / 4 Nights",
      price: "42,999",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Bali Bliss",
      location: "Bali, Indonesia",
      days: "6 Days / 5 Nights",
      price: "49,999",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Paris Romance",
      location: "Paris, France",
      days: "6 Days / 5 Nights",
      price: "79,999",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="holiday-page">

      <div className="holiday-hero">

        <div>
          <span className="eyebrow">HOLIDAY PACKAGES</span>

          <h1>
            Go somewhere
            <br />
            <span>you've never been.</span>
          </h1>

          <p>
            Curated holidays designed to make
            planning your next adventure effortless.
          </p>
        </div>

      </div>


      <section className="section">

        <div className="section-heading">

          <div>
            <span className="eyebrow">
              CURATED FOR YOU
            </span>

            <h2>
              Popular holiday packages
            </h2>
          </div>

        </div>


        <div className="package-grid">

          {packages.map((item) => (

            <div className="package-card" key={item.title}>

              <div className="package-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <span>
                  {item.days}
                </span>

              </div>

              <div className="package-content">

                <small>
                  📍 {item.location}
                </small>

                <h3>
                  {item.title}
                </h3>

                <div className="package-bottom">

                  <div>
                    <span>Starting from</span>
                    <strong>
                      ₹{item.price}
                    </strong>
                  </div>

                  <button>
                    View →
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      <section className="custom-trip">

        <div>

          <span className="eyebrow">
            YOUR TRIP, YOUR WAY
          </span>

          <h2>
            Can't find what
            <br />
            you're looking for?
          </h2>

          <p>
            Tell us where you want to go and what
            kind of experience you're looking for.
            We'll help you plan it.
          </p>

          <Link to="/login" className="primary-btn">
            Plan my trip →
          </Link>

        </div>

      </section>

    </section>
  );
}

export default Holidays;