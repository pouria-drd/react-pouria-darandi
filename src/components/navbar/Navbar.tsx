import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "./Sidebar";
import NavLinks from "./NavLinks";
import MenuIcon from "./icons/MenuIcon";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scroll, setScroll] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY >= 75);
        });
    }, []);
    // ${scroll ? "fixed h-[12svh]" : "h-[10svh]"}

    return (
        <>
            <header
                className={`bg-pd-primary-bg w-full h-[10svh] ${
                    scroll && "fixed glass bg-opacity-80 z-40 top-0 left-0 "
                } app-px`}>
                <nav className="flex items-center justify-between h-full">
                    <Link to="/" className="text-2xl">
                        Pouria <span className="text-pd-primary">DRD</span>
                    </Link>

                    <div className="hidden md:block text-pd-secondary-text">
                        <NavLinks className="items-center justify-center gap-10" />
                    </div>

                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(true)}>
                        {!isOpen && <MenuIcon />}
                    </button>
                </nav>
            </header>
            <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};

export default Navbar;
