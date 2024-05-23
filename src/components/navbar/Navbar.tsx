import { useEffect, useState } from "react";
import MenuIcon from "./icons/MenuIcon";

const Navbar = () => {
    const [scroll, setScroll] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10);
        });
    }, []);

    return (
        <nav
            className={`glass ${scroll ? "fixed h-[12svh]" : "h-[10svh]"}
            bg-zinc-800 bg-opacity-90 border-b
            flex items-center justify-between transition-all duration-300
            px-4 py-2 w-full`}>
            <p className="font-bold text-xl sm:text-2xl uppercase">
                Pouria Drd
            </p>

            <button>
                <MenuIcon />
            </button>
        </nav>
    );
};

export default Navbar;
