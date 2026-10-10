import {
  Plane,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-main">

      <div className="page-container py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#005a32] text-white">
                <Plane size={18} />
              </div>

              <span
                className="text-3xl font-semibold text-[#003b22]"
                style={{ fontFamily: "var(--heading-font)" }}
              >
                Travexa
              </span>
            </div>

            <p className="body-copy max-w-xs text-sm">
              Thoughtful travel planning, reliable stays and
              straightforward booking — all in one place.
            </p>
          </div>

          {/* Explore */}
          <div>
            <div className="footer-heading">
              Explore
            </div>

            <div className="flex flex-col gap-3">
              <a href="/flights" className="footer-link">
                Flights
              </a>

              <a href="/stays" className="footer-link">
                Stays
              </a>

              <a href="/packages" className="footer-link">
                Holiday packages
              </a>

              <a href="/about" className="footer-link">
                About Travexa
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="footer-heading">
              Company
            </div>

            <div className="flex flex-col gap-3">
              <a href="/contact" className="footer-link">
                Contact us
              </a>

              <a href="/login" className="footer-link">
                Sign in
              </a>

              <span className="footer-link">
                Terms & conditions
              </span>

              <span className="footer-link">
                Privacy policy
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-heading">
              Contact
            </div>

            <div className="space-y-4">

              <div className="flex gap-3">
                <MapPin
                  size={17}
                  className="mt-1 shrink-0 text-[#005a32]"
                />

                <span className="text-sm leading-6 text-[#64716b]">
                  India
                </span>
              </div>

              <div className="flex gap-3">
                <Mail
                  size={17}
                  className="mt-1 shrink-0 text-[#005a32]"
                />

                <span className="text-sm leading-6 text-[#64716b]">
                  hello@Travexa.com
                </span>
              </div>

              <div className="flex gap-3">
                <Phone
                  size={17}
                  className="mt-1 shrink-0 text-[#005a32]"
                />

                <span className="text-sm leading-6 text-[#64716b]">
                  +91 00000 00000
                </span>
              </div>

            </div>
          </div>

        </div>

        <div className="my-10 border-t border-[#dfe8e2]" />

        <div className="flex flex-col justify-between gap-5 md:flex-row">

          <p className="text-xs text-[#7a8580]">
            © 2026 Travexa. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#64716b]">
            <ShieldCheck size={15} className="text-[#005a32]" />
            Secure booking experience
          </div>

        </div>

      </div>
    </footer>
  );
}