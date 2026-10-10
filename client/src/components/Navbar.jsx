import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    Menu,
    X,
    Plane,
    UserRound,
} from "lucide-react";

import logoImg from "../assets/logo.png";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Home", path: "/" },
        { name: "Flights", path: "/flights" },
        { name: "Stays", path: "/stays" },
        { name: "Packages", path: "/packages" },
        { name: "About", path: "/about" },
    ];

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-transparent px-4 pt-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl rounded-full bg-emerald-950/40 backdrop-blur-md border border-white/15 shadow-lg shadow-black/10">
                <div className="px-6 flex h-[72px] items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src={logoImg}
                            alt="Travexa Logo"
                            className="h-12 w-auto max-w-[120px] rounded-full object-contain shadow-inner"
                        />

                        <div>
                            {/* <div
                                className="text-2xl font-bold leading-none text-white tracking-wide"
                                style={{ fontFamily: "var(--heading-font)" }}
                            >
                                Travexa
                            </div> */}
                            {/* 
                            <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-200/80">
                                Travel with confidence
                            </div> */}
                        </div>
                    </Link>

                    {/* Desktop navigation (White, Bold, Big fonts using links array) */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {links.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-base font-bold transition-colors hover:text-emerald-200 ${
                                        isActive 
                                            ? "text-white underline underline-offset-8 decoration-emerald-400" 
                                            : "text-white"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Desktop actions */}
                    <div className="hidden items-center gap-4 md:flex">
                        <Link
                            to="/login"
                            className="flex h-10 items-center gap-2 px-4 text-sm font-bold text-emerald-100 hover:text-white transition-colors"
                        >
                            <UserRound size={16} />
                            Sign in
                        </Link>

                        <Link
                            to="/flights"
                            className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-emerald-950 shadow-md hover:bg-emerald-50 transition-all active:scale-95"
                        >
                            Search trips
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="rounded-xl border border-white/20 bg-white/10 p-2 text-white md:hidden backdrop-blur-sm"
                    >
                        {open ? <X size={21} /> : <Menu size={21} />}
                    </button>
                </div>

                {/* Mobile dropdown */}
                {open && (
                    <div className="border-t border-white/10 px-6 py-5 md:hidden bg-emerald-950/80 backdrop-blur-xl rounded-b-3xl">
                        <nav className="flex flex-col gap-1">
                            {links.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setOpen(false)}
                                    className="rounded-lg px-3 py-3 text-sm font-semibold text-emerald-100 hover:bg-white/10"
                                >
                                    {link.name}
                                </NavLink>
                            ))}

                            <Link
                                to="/login"
                                onClick={() => setOpen(false)}
                                className="mt-3 rounded-full bg-white px-4 py-3 text-center text-sm font-bold text-emerald-950 shadow-md"
                            >
                                Sign in
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}