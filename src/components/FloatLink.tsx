import { useState, useEffect } from "react";
import ChevronUpIcon from "./icons/ChevronUpIcon";

const FloatLink = () => {
    const [scroll, setScroll] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY >= 400);
        });
    }, []);

    if (!scroll) return null;

    return (
        <a
            className="bg-pd-scroll-bg text-pd-primary fixed right-4 bottom-4
            hover:scale-105
            rounded-lg p-2 w-fit"
            href="/#home">
            <ChevronUpIcon />
        </a>
    );
};

export default FloatLink;
