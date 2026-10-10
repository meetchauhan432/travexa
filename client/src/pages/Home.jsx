import React from "react";
import { Link } from "react-router-dom";
import {
    Plane,
    Building2,
    Bus,
    Compass,
    FileCheck,
    Globe,
    ShieldCheck,
    Briefcase,
    Ship,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

import Homeimg from "../assets/Tropical island.png";
import SearchBox from "../components/SearchBox";

// Service images
import flightImg from "../assets/2.png";
import hotelImg from "../assets/1.png";
import busImg from "../assets/5.png";
import cruiseImg from "../assets/3.png";
// import dmcImg from "../assets/dmc.jpg";
// import visaImg from "../assets/visa.jpg";
// import whiteLabelImg from "../assets/whitelabel.jpg";
// import insuranceImg from "../assets/insurance.jpg";
// import miceImg from "../assets/mice.jpg";

const services = [
    {
        title: "Flight Bookings",
        text: "Domestic and international flight booking solutions for travel agents.",
        icon: Plane,
        image: flightImg,
        points: ["Domestic & International", "Group Fares", "Competitive Rates"],
        link: "/flights",
    },
    {
        title: "Hotel Bookings",
        text: "Access a wide range of hotels with competitive B2B rates.",
        icon: Building2,
        image: hotelImg,
        points: ["Global Inventory", "B2B Rates", "Easy Booking"],
        link: "/stays",
    },
    {
        title: "Bus Booking",
        text: "Book bus tickets across thousands of routes through one platform.",
        icon: Bus,
        image: busImg,
        points: ["6000+ Routes", "Multiple Categories", "Instant Booking"],
        link: "/packages",
    },
    // {
    //     title: "DMC Services",
    //     text: "Reliable destination management services for international travel.",
    //     icon: Compass,
    //     image: dmcImg,
    //     points: ["UAE", "Thailand", "Bali & Vietnam"],
    //     link: "/packages",
    // },
    // {
    //     title: "Visa Processing",
    //     text: "Professional visa assistance with simplified documentation.",
    //     icon: FileCheck,
    //     image: visaImg,
    //     points: ["Documentation", "Consultation", "Bulk Applications"],
    //     link: "/about",
    // },
    // {
    //     title: "White Label",
    //     text: "Launch travel products under your own brand.",
    //     icon: Globe,
    //     image: whiteLabelImg,
    //     points: ["Custom Branding", "API Integration", "Travel Inventory"],
    //     link: "/about",
    // },
    // {
    //     title: "Travel Insurance",
    //     text: "Travel protection solutions for individual and group bookings.",
    //     icon: ShieldCheck,
    //     image: insuranceImg,
    //     points: ["Group Policies", "Wide Coverage", "Easy Processing"],
    //     link: "/about",
    // },
    // {
    //     title: "MICE Services",
    //     text: "Travel management for meetings, incentives and corporate events.",
    //     icon: Briefcase,
    //     image: miceImg,
    //     points: ["Corporate Travel", "Group Management", "Events"],
    //     link: "/about",
    // },
    {
        title: "Cruise Bookings",
        text: "Cruise packages and experiences for your customers.",
        icon: Ship,
        image: cruiseImg,
        points: ["Cruise Lines", "Group Packages", "Special Offers"],
        link: "/packages",
    },
];

const benefits = [
    "24/7 Online Support",
    "Dedicated Relationship Manager",
    "Easy Payment Options",
    "Competitive Commissions",
    "Credit Facility",
    "Pan India Sales Support",
];

export default function Home() {
    return (
        <div className="bg-white text-slate-800">

            {/* HERO */}
            <section className="relative min-h-[650px] overflow-hidden">

                <img
                    src={Homeimg}
                    alt="Travel destination"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[#003b25]/75" />

                <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6 pb-24 pt-28">

                    <div className="max-w-2xl text-white">

                        <span className="rounded bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-md mt-10">
                            B2B TRAVEL SOLUTIONS
                        </span>

                        <h1 className="mt-7 text-5xl font-bold leading-tight md:text-6xl">
                            Travel business,
                            <br />
                            made simpler.
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
                            Flights, hotels, buses, DMC, visa and travel technology
                            everything your travel business needs in one place.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">

                            <Link
                                to="/flights"
                                className="rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#005a35] transition hover:bg-emerald-50"
                            >
                                Start Booking
                            </Link>

                            <Link
                                to="/about"
                                className="rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                            >
                                Know More
                            </Link>

                        </div>

                    </div>
                </div>

                {/* SEARCH */}
                <div className="absolute bottom-0 left-1/2 w-full max-w-6xl -translate-x-1/2 translate-y-1/2 px-5">
                    <div className="rounded-2xl border border-white/70 bg-white/80 p-2 shadow-xl backdrop-blur-xl">
                        <SearchBox />
                    </div>
                </div>

            </section>

            <div className="h-28" />

            {/* SIMPLE INTRO */}
            <section className="px-6 py-16">

                <div className="mx-auto max-w-7xl">

                    <div className="max-w-3xl">

                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00824a]">
                            About Travexa
                        </p>

                        <h2 className="mt-3 text-4xl font-bold text-slate-900">
                            Your trusted B2B travel partner
                        </h2>

                        <p className="mt-5 text-base leading-8 text-slate-500">
                            Travexa helps travel agents, distributors and businesses manage
                            their travel requirements through reliable inventory,
                            competitive pricing and dedicated support.
                        </p>

                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-3">

                        <SimpleStat number="35K+" text="Registered Agents" />
                        <SimpleStat number="5L+" text="Hotels Worldwide" />
                        <SimpleStat number="6K+" text="Bus Routes" />

                    </div>

                </div>
            </section>

            {/* SERVICES */}
            <section className="bg-[#f6faf8] px-6 py-20">

                <div className="mx-auto max-w-7xl">

                    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00824a]">
                                Our Services
                            </p>

                            <h2 className="mt-3 text-4xl font-bold text-slate-900">
                                Everything you need to sell travel
                            </h2>

                            <p className="mt-3 max-w-2xl text-slate-500">
                                Simple tools and services designed for travel professionals.
                            </p>
                        </div>

                    </div>

                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {services.map((service) => (
                            <ServiceCard key={service.title} service={service} />
                        ))}

                    </div>

                </div>
            </section>

            {/* WHY ETRAV */}
            <section className="px-6 py-20">

                <div className="mx-auto max-w-7xl">

                    <div className="grid items-center gap-12 lg:grid-cols-2">

                        <div>

                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00824a]">
                                Why Travexa
                            </p>

                            <h2 className="mt-3 text-4xl font-bold leading-tight text-slate-900">
                                Built for travel professionals
                            </h2>

                            <p className="mt-5 max-w-xl leading-7 text-slate-500">
                                We focus on the things that matter to your business —
                                good inventory, competitive pricing, responsive support
                                and simple operations.
                            </p>

                            <Link
                                to="/about"
                                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#006b40]"
                            >
                                Learn more
                                <ArrowRight size={16} />
                            </Link>

                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">

                            {benefits.map((benefit) => (
                                <div
                                    key={benefit}
                                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-emerald-200 hover:bg-emerald-50/40"
                                >
                                    <CheckCircle2
                                        size={18}
                                        className="shrink-0 text-[#00824a]"
                                    />

                                    <span className="text-sm font-medium text-slate-700">
                                        {benefit}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>
            </section>

            {/* SIMPLE CTA */}
            <section className="px-6 pb-20">

                <div className="mx-auto max-w-7xl rounded-3xl bg-[#003b25] px-7 py-14 text-center text-white md:px-14">

                    <h2 className="text-3xl font-bold md:text-4xl">
                        Ready to grow your travel business?
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/70">
                        Join our growing network of travel professionals and access
                        reliable B2B travel solutions.
                    </p>

                    <Link
                        to="/flights"
                        className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#005a35] transition hover:bg-emerald-50"
                    >
                        Get Started
                        <ArrowRight size={16} />
                    </Link>

                </div>

            </section>

        </div>
    );
}

function ServiceCard({ service }) {
    const Icon = service.icon;

    return (
        <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            {/* IMAGE */}
            <div className="relative h-48 overflow-hidden">

                <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-[#006b40] shadow-sm backdrop-blur">
                    <Icon size={19} />
                </div>

            </div>

            {/* CONTENT */}
            <div className="p-5">

                <h3 className="text-lg font-bold text-slate-900">
                    {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                    {service.text}
                </p>

                {/* POINTS ONLY AFTER HOVER */}
                <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                    <div className="overflow-hidden">

                        <div className="border-t border-slate-100 pt-3">

                            {service.points.map((point) => (
                                <div
                                    key={point}
                                    className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-600"
                                >
                                    <CheckCircle2
                                        size={13}
                                        className="text-[#00824a]"
                                    />
                                    {point}
                                </div>
                            ))}

                        </div>

                    </div>
                </div>

                <Link
                    to={service.link}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-[#006b40]"
                >
                    View service
                    <ArrowRight size={14} />
                </Link>

            </div>

        </div>
    );
}


function SimpleStat({ number, text }) {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="text-2xl font-bold text-[#006b40]">
                {number}
            </div>

            <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                {text}
            </div>
        </div>
    );
}
