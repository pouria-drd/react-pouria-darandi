import Typed from "typed.js";
import { useRef, useEffect } from "react";

interface TypewriterProps {
    texts: string[];
}

const Typewriter = (typewriterProps: TypewriterProps) => {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: typewriterProps.texts,
            typeSpeed: 75,
            loop: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div className="w-full">
            <span ref={el} />
        </div>
    );
};

export default Typewriter;
