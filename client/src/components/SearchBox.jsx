import {
  MapPin,
  CalendarDays,
  Users,
  Search,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function SearchBox({ type = "flight" }) {
  const navigate = useNavigate();

  const handleSearch = () => {
    if (type === "stay") {
      navigate("/stays");
    } else {
      navigate("/flights");
    }
  };

  return (
    <div className="search-panel overflow-hidden rounded-xl">

      <div className="flex border-b border-[#dfe8e2]">

        <button
          type="button"
          onClick={() => navigate("/flights")}
          className={`px-6 py-4 text-sm font-bold ${
            type === "flight"
              ? "border-b-2 border-[#005a32] text-[#005a32]"
              : "text-[#77827d]"
          }`}
        >
          Flights
        </button>

        <button
          type="button"
          onClick={() => navigate("/stays")}
          className={`px-6 py-4 text-sm font-bold ${
            type === "stay"
              ? "border-b-2 border-[#005a32] text-[#005a32]"
              : "text-[#77827d]"
          }`}
        >
          Stays
        </button>

        <button
          type="button"
          onClick={() => navigate("/packages")}
          className="px-6 py-4 text-sm font-bold text-[#77827d]"
        >
          Packages
        </button>

      </div>

      <div className="grid md:grid-cols-[1.3fr_1.3fr_1fr_1fr_auto]">

        <button
          type="button"
          className="search-field text-left"
        >
          <span className="search-label">
            {type === "stay" ? "Destination" : "From"}
          </span>

          <div className="flex items-center gap-2">
            <MapPin
              size={17}
              className="text-[#005a32]"
            />

            <span className="search-value">
              {type === "stay"
                ? "Where are you going?"
                : "Departure city"}
            </span>
          </div>
        </button>

        <button
          type="button"
          className="search-field text-left"
        >
          <span className="search-label">
            {type === "stay" ? "Check in" : "To"}
          </span>

          <div className="flex items-center gap-2">
            <MapPin
              size={17}
              className="text-[#005a32]"
            />

            <span className="search-value">
              {type === "stay"
                ? "Select destination"
                : "Arrival city"}
            </span>
          </div>
        </button>

        <button
          type="button"
          className="search-field text-left"
        >
          <span className="search-label">
            {type === "stay" ? "Check out" : "Departure"}
          </span>

          <div className="flex items-center gap-2">
            <CalendarDays
              size={17}
              className="text-[#005a32]"
            />

            <span className="search-value">
              Select date
            </span>
          </div>
        </button>

        <button
          type="button"
          className="search-field text-left"
        >
          <span className="search-label">
            Guests
          </span>

          <div className="flex items-center gap-2">
            <Users
              size={17}
              className="text-[#005a32]"
            />

            <span className="search-value">
              2 travellers
            </span>
          </div>
        </button>

        <div className="flex items-center justify-center p-3">
          <button
            type="button"
            onClick={handleSearch}
            className="btn-primary-green h-12 w-full md:w-auto"
          >
            <Search size={17} />
            Search
          </button>
        </div>

      </div>
    </div>
  );
}