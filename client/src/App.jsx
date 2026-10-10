import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Stays from "./pages/Stays";
import Packages from "./pages/Packages";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Login() {
  return (
    <main className="min-h-[70vh] bg-[#f7fcf5] py-20">

      <div className="page-container">

        <div className="mx-auto max-w-md rounded-xl border border-[#dfe8e2] bg-white p-8">

          <div className="eyebrow mb-3">
            Welcome back
          </div>

          <h1 className="heading-section text-4xl">
            Sign in to Travexa
          </h1>

          <p className="body-copy mt-3 text-sm">
            Access your bookings and manage your travel plans.
          </p>

          <form
            className="mt-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Demo login submitted.");
            }}
          >

            <div>
              <label className="form-label">
                Email address
              </label>

              <input
                required
                type="email"
                className="form-input"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="form-label">
                Password
              </label>

              <input
                required
                type="password"
                className="form-input"
                placeholder="Enter password"
              />
            </div>

            <button className="btn-primary-green w-full">
              Sign in
            </button>

          </form>

        </div>

      </div>

    </main>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#f7fcf5] px-6">

      <div className="text-center">

        <div className="text-sm font-bold uppercase tracking-[0.15em] text-[#238b45]">
          404
        </div>

        <h1 className="heading-display mt-3 text-7xl text-[#003b22]">
          Page not found
        </h1>

        <p className="body-copy mt-4">
          The page you are looking for does not exist.
        </p>

        <a
          href="/"
          className="btn-primary-green mt-7"
        >
          Return home
        </a>

      </div>

    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/flights" element={<Flights />} />

        <Route path="/stays" element={<Stays />} />

        <Route path="/packages" element={<Packages />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />

    </div>
  );
}