import { useEffect, useState } from "react";

interface AnimatedTitleProps {
    text: string;
    scrollY: number;
}

const AnimatedTitle = ({ text, scrollY }: AnimatedTitleProps) => {
    const [scroll, setScroll] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY >= scrollY);
        });
    }, []);

    return (
        <div className="text-center w-full">
            <h1
                className={`transition-all text-2xl sm:text-3xl font-bold opacity-0 ${
                    scroll && "bounce-top opacity-100"
                }`}>
                {text}
            </h1>
        </div>
    );
};

export default AnimatedTitle;
