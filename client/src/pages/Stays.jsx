import {
  Star,
  MapPin,
  ArrowRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const hotels = [
  {
    id: "green-courtyard",
    name: "The Green Courtyard",
    location: "North Goa",
    rating: "4.7",
    price: "₹4,899",
    image: "/images/hotel1.jpg",
  },
  {
    id: "palm-grove",
    name: "Palm Grove Retreat",
    location: "Candolim, Goa",
    rating: "4.6",
    price: "₹5,499",
    image: "../assets/hotel2.jpg",
  },
  {
    id: "coastal-house",
    name: "Coastal House",
    location: "Calangute, Goa",
    rating: "4.5",
    price: "₹3,999",
    image: "/images/hotel3.jpg",
  },
];

export default function Stays() {
  const navigate = useNavigate();

  return (
    <main className="bg-[#f7fcf5]">

      <section className="border-b border-[#dfe8e2] bg-white py-14">

        <div className="page-container">

          <div className="eyebrow mb-3">
            Stays
          </div>

          <h1 className="heading-section">
            Find a place worth staying in.
          </h1>

          <p className="body-copy mt-4 max-w-2xl">
            From quiet retreats to centrally located hotels,
            find accommodation that works for your trip.
          </p>

        </div>

      </section>

      <section className="section-sm">

        <div className="page-container">

          <div className="mb-8">

            <h2 className="heading-small text-2xl">
              Recommended stays
            </h2>

            <p className="mt-1 text-sm text-[#77827d]">
              Properties selected for comfort and location
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {hotels.map((hotel) => (
              <article
                key={hotel.id}
                className="travel-card"
              >

                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="travel-card-image"
                />

                <div className="travel-card-body">

                  <div className="mb-2 flex items-center justify-between">

                    <span className="badge-green">
                      Recommended
                    </span>

                    <div className="flex items-center gap-1 text-sm font-bold text-[#005a32]">
                      <Star
                        size={14}
                        fill="currentColor"
                      />
                      {hotel.rating}
                    </div>

                  </div>

                  <h3 className="heading-small text-3xl">
                    {hotel.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-sm text-[#6c7872]">
                    <MapPin size={15} />
                    {hotel.location}
                  </div>

                  <div className="mt-6 flex items-end justify-between">

                    <div>
                      <div className="text-xs text-[#7a8580]">
                        From
                      </div>

                      <div className="text-xl font-bold text-[#003b22]">
                        {hotel.price}
                      </div>

                      <div className="text-xs text-[#7a8580]">
                        per night
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        navigate("/stay-details", {
                          state: { hotel },
                        })
                      }
                      className="flex items-center gap-2 text-sm font-bold text-[#005a32]"
                    >
                      View
                      <ArrowRight size={15} />
                    </button>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}