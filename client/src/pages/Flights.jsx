import {
  Plane,
  Clock3,
  ArrowRight,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const flights = [
  {
    id: "ET204",
    airline: "eTrav Air",
    code: "ET 204",
    from: "Mumbai",
    to: "Delhi",
    departure: "06:30",
    arrival: "08:40",
    duration: "2h 10m",
    price: "₹5,499",
    image: "/images/flight1.jpg",
  },
  {
    id: "SK318",
    airline: "Skyline",
    code: "SK 318",
    from: "Mumbai",
    to: "Delhi",
    departure: "10:15",
    arrival: "12:25",
    duration: "2h 10m",
    price: "₹6,199",
    image: "/images/flight2.jpg",
  },
  {
    id: "AI742",
    airline: "Aero India",
    code: "AI 742",
    from: "Mumbai",
    to: "Delhi",
    departure: "17:40",
    arrival: "19:55",
    duration: "2h 15m",
    price: "₹6,899",
    image: "/images/flight3.jpg",
  },
];

export default function Flights() {
  const navigate = useNavigate();

  return (
    <main className="bg-[#f7fcf5]">

      <section className="border-b border-[#dfe8e2] bg-white py-14">
        <div className="page-container">

          <div className="eyebrow mb-3">
            Flights
          </div>

          <h1 className="heading-section">
            Find a flight that fits your journey.
          </h1>

          <p className="body-copy mt-4 max-w-2xl">
            Compare routes, timings and fares in one place.
          </p>

        </div>
      </section>

      <section className="section-sm">
        <div className="page-container">

          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-center">

            <div>
              <h2 className="heading-small text-2xl">
                Mumbai to Delhi
              </h2>

              <p className="mt-1 text-sm text-[#77827d]">
                3 available flights · Economy · One way
              </p>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-[#dfe8e2] bg-white px-4 py-3 text-sm font-semibold text-[#405049]"
            >
              <SlidersHorizontal size={16} />
              Filters
              <ChevronDown size={15} />
            </button>

          </div>

          <div className="space-y-4">

            {flights.map((flight) => (
              <div
                key={flight.id}
                className="result-card"
              >

                <img
                  src={flight.image}
                  alt={flight.airline}
                  className="result-card-image"
                />

                <div className="result-card-content">

                  <div className="mb-5 flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e5f5e0] text-[#005a32]">
                      <Plane size={17} />
                    </div>

                    <div>
                      <div className="text-sm font-bold text-[#003b22]">
                        {flight.airline}
                      </div>

                      <div className="text-xs text-[#7a8580]">
                        {flight.code}
                      </div>
                    </div>

                  </div>

                  <div className="grid items-center gap-5 md:grid-cols-[1fr_auto_1fr]">

                    <div>
                      <div className="text-2xl font-bold text-[#003b22]">
                        {flight.departure}
                      </div>

                      <div className="text-sm text-[#6c7872]">
                        {flight.from}
                      </div>
                    </div>

                    <div className="text-center">

                      <div className="mb-1 flex items-center justify-center gap-2 text-xs text-[#7a8580]">
                        <Clock3 size={13} />
                        {flight.duration}
                      </div>

                      <div className="mx-auto h-px w-24 bg-[#c7e9c0]" />

                    </div>

                    <div>
                      <div className="text-2xl font-bold text-[#003b22]">
                        {flight.arrival}
                      </div>

                      <div className="text-sm text-[#6c7872]">
                        {flight.to}
                      </div>
                    </div>

                  </div>

                </div>

                <div className="result-card-price">

                  <div className="mb-1 text-xs text-[#7a8580]">
                    Starting from
                  </div>

                  <div className="text-2xl font-bold text-[#003b22]">
                    {flight.price}
                  </div>

                  <div className="mb-4 text-xs text-[#7a8580]">
                    per traveller
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      navigate("/flight-details", {
                        state: { flight },
                      })
                    }
                    className="btn-primary-green w-full"
                  >
                    Select
                    <ArrowRight size={15} />
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}