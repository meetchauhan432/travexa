import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Packages() {

  const packages = [
    {
      title: "Goa Escape",
      location: "Goa, India",
      duration: "4 days / 3 nights",
      price: "₹18,999",
      image: "/images/goa.jpg",
    },
    {
      title: "Himalayan Retreat",
      location: "Manali, India",
      duration: "5 days / 4 nights",
      price: "₹22,499",
      image: "/images/manali.jpg",
    },
    {
      title: "Royal Rajasthan",
      location: "Jaipur, India",
      duration: "5 days / 4 nights",
      price: "₹24,999",
      image: "/images/jaipur.jpg",
    },
    {
      title: "Kerala Backwaters",
      location: "Kerala, India",
      duration: "6 days / 5 nights",
      price: "₹29,999",
      image: "/images/kerala.jpg",
    },
  ];

  return (
    <main>

      <section className="green-section py-20">

        <div className="page-container">

          <div className="max-w-3xl">

            <div className="eyebrow mb-4 text-[#a1d99b]">
              Holiday packages
            </div>

            <h1 className="heading-display text-6xl md:text-8xl">
              Journeys designed
              <br />
              around you.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70">
              Explore ready-to-book holiday ideas for couples,
              families and independent travellers.
            </p>

          </div>

        </div>

      </section>

      <section className="section bg-[#f7fcf5]">

        <div className="page-container">

          <div className="mb-10 flex items-end justify-between">

            <div>
              <div className="eyebrow mb-3">
                Featured
              </div>

              <h2 className="heading-section">
                Explore our packages.
              </h2>
            </div>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {packages.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-xl border border-[#dfe8e2] bg-white"
              >

                <div className="grid md:grid-cols-[260px_1fr]">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full min-h-[250px] w-full object-cover"
                  />

                  <div className="p-7">

                    <h3 className="heading-small text-3xl">
                      {item.title}
                    </h3>

                    <div className="mt-4 space-y-3">

                      <div className="flex items-center gap-2 text-sm text-[#68746e]">
                        <MapPin size={15} className="text-[#005a32]" />
                        {item.location}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-[#68746e]">
                        <CalendarDays size={15} className="text-[#005a32]" />
                        {item.duration}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-[#68746e]">
                        <Users size={15} className="text-[#005a32]" />
                        Suitable for couples & families
                      </div>

                    </div>

                    <div className="mt-7 flex items-end justify-between">

                      <div>
                        <div className="text-xs text-[#7a8580]">
                          Package from
                        </div>

                        <div className="text-2xl font-bold text-[#003b22]">
                          {item.price}
                        </div>
                      </div>

                      <Link
                        to="/contact"
                        className="btn-primary-green"
                      >
                        Enquire
                        <ArrowRight size={15} />
                      </Link>

                    </div>

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