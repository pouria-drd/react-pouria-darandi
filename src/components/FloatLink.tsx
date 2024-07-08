import { useState, useEffect } from "react";
import ChevronUpIcon from "./icons/ChevronUpIcon";

const FloatLink = () => {
    const [scroll, setScroll] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY >= 300);
        });
    }, []);

    return (
        <a
            className={`${
                scroll ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500
            bg-zinc-100 text-drd-primary fixed right-4 bottom-4 z-10
            hover:scale-105 
            rounded-lg p-2 w-fit`}
            href="/#intro">
            <ChevronUpIcon />
        </a>
    );
};

export default FloatLink;
