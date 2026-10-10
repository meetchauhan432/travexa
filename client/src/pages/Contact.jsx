import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you. Your enquiry has been received."
    );
  };

  return (
    <main className="bg-[#f7fcf5]">

      <section className="border-b border-[#dfe8e2] bg-white py-16">

        <div className="page-container">

          <div className="eyebrow mb-3">
            Contact
          </div>

          <h1 className="heading-section">
            How can we help?
          </h1>

          <p className="body-copy mt-4 max-w-2xl">
            Have a question about a trip, stay or holiday package?
            Send us a message and our team will get back to you.
          </p>

        </div>

      </section>

      <section className="section">

        <div className="page-container">

          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">

            {/* Contact information */}
            <div className="rounded-xl bg-[#003b22] p-8 text-white">

              <div className="eyebrow mb-8 text-[#a1d99b]">
                Get in touch
              </div>

              <div className="space-y-7">

                <div className="flex gap-4">

                  <Mail className="text-[#a1d99b]" />

                  <div>
                    <div className="font-semibold">
                      Email
                    </div>

                    <div className="mt-1 text-sm text-white/65">
                      hello@Travexa.com
                    </div>
                  </div>

                </div>

                <div className="flex gap-4">

                  <Phone className="text-[#a1d99b]" />

                  <div>
                    <div className="font-semibold">
                      Phone
                    </div>

                    <div className="mt-1 text-sm text-white/65">
                      +91 00000 00000
                    </div>
                  </div>

                </div>

                <div className="flex gap-4">

                  <MapPin className="text-[#a1d99b]" />

                  <div>
                    <div className="font-semibold">
                      Location
                    </div>

                    <div className="mt-1 text-sm text-white/65">
                      India
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-[#dfe8e2] bg-white p-8"
            >

              <h2 className="heading-small text-3xl">
                Send an enquiry
              </h2>

              <p className="body-copy mt-2 text-sm">
                Tell us a little about what you are planning.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">

                <div>
                  <label className="form-label">
                    Full name
                  </label>

                  <input
                    required
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>

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

              </div>

              <div className="mt-5">

                <label className="form-label">
                  What can we help with?
                </label>

                <select className="form-input">
                  <option>Flight booking</option>
                  <option>Hotel / stay</option>
                  <option>Holiday package</option>
                  <option>General enquiry</option>
                </select>

              </div>

              <div className="mt-5">

                <label className="form-label">
                  Message
                </label>

                <textarea
                  required
                  rows="6"
                  className="w-full resize-none rounded-lg border border-[#d5e0da] p-4 text-sm outline-none focus:border-[#087f3e]"
                  placeholder="Tell us about your travel plans..."
                />

              </div>

              <button
                type="submit"
                className="btn-primary-green mt-6"
              >
                Send enquiry
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}