import {
  Compass,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

export default function About() {
  return (
    <main>

      <section className="green-section py-24">

        <div className="page-container">

          <div className="max-w-3xl">

            <div className="eyebrow mb-4 text-[#a1d99b]">
              About Travexa
            </div>

            <h1 className="heading-display text-6xl md:text-8xl">
              Travel should feel
              <br />
              exciting, not complicated.
            </h1>

          </div>

        </div>

      </section>

      <section className="section">

        <div className="page-container">

          <div className="grid gap-14 md:grid-cols-2">

            <div>
              <div className="eyebrow mb-4">
                Our purpose
              </div>

              <h2 className="heading-section">
                Making travel planning easier for everyone.
              </h2>
            </div>

            <div className="space-y-5">

              <p className="body-copy">
                Travexa is built around a simple idea: booking travel
                should be clear, convenient and dependable.
              </p>

              <p className="body-copy">
                Instead of making travellers jump between multiple
                services, we aim to bring flights, stays and holiday
                planning together in one straightforward experience.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="section bg-[#f7fcf5]">

        <div className="page-container">

          <div className="grid gap-6 md:grid-cols-3">

            <div className="feature-box">

              <div className="feature-icon">
                <Compass size={21} />
              </div>

              <h3 className="heading-small text-2xl">
                Explore
              </h3>

              <p className="body-copy mt-3 text-sm">
                Discover destinations and travel options
                without unnecessary complexity.
              </p>

            </div>

            <div className="feature-box">

              <div className="feature-icon">
                <ShieldCheck size={21} />
              </div>

              <h3 className="heading-small text-2xl">
                Trust
              </h3>

              <p className="body-copy mt-3 text-sm">
                We believe clear information and transparent
                choices create better travel decisions.
              </p>

            </div>

            <div className="feature-box">

              <div className="feature-icon">
                <HeartHandshake size={21} />
              </div>

              <h3 className="heading-small text-2xl">
                Support
              </h3>

              <p className="body-copy mt-3 text-sm">
                We want travellers to feel supported before,
                during and after their journey.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}