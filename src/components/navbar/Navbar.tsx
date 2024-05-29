import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "./Sidebar";
import MenuIcon from "./icons/MenuIcon";
import NavLinks from "./NavLinks";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scroll, setScroll] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY >= 50);
        });
    }, []);
    // ${scroll ? "fixed h-[12svh]" : "h-[10svh]"}

    return (
        <>
            <header
                className={`fixed bg-pd-primary-bg z-40 top-0 left-0 w-full ${
                    scroll && "glass bg-opacity-80"
                } px-4 sm:px-8 md:px-12 lg:px-16`}>
                <nav className="flex items-center justify-between h-[10svh]">
                    <Link to="/" className="text-2xl">
                        Pouria <span className="text-pd-primary">DRD</span>
                    </Link>

                    <div className="hidden md:block">
                        <NavLinks className="items-center justify-center" />
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
