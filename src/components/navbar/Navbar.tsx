import "./navbar.css";

import { useEffect, useState } from "react";

import Logo from "../Logo";
import Sidebar from "./Sidebar";
import NavLinks from "./NavLinks";
import BurgerButton from "./BurgerButton";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scroll, setScroll] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY >= 25);
        });
    }, []);

    return (
        <>
            <nav
                className={`drd-navbar glass app-px ${
                    scroll ? "top-0" : "top-4"
                }`}>
                <Logo />

                <NavLinks />

                <BurgerButton onClick={() => setIsOpen(true)} />
            </nav>

            <Sidebar isOpen={isOpen} onClick={() => setIsOpen(false)} />
        </>
    );
};

export default Navbar;
