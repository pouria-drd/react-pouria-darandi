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
            className="rounded-lg p-1 bg-pd-scroll-bg fixed right-4 bottom-4
            w-fit text-pd-primary"
            href="/#home">
            <ChevronUpIcon />
        </a>
    );
};

export default FloatLink;
