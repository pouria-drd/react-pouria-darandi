import SocialMedia from "../SocialMedia";
import Typewriter from "../typewriter/Typewriter";

const Footer = () => {
    const skills = [
        "React Developer",
        "Vue Developer",
        "Django Developer",
        "Unity Developer",
    ];

    return (
        <footer
            className="odd:bg-pd-primary-bg even:bg-pd-secondary-bg 
            grid grid-cols-1 md:grid-cols-3
            items-center justify-center gap-4
            app-px py-8">
            <div className="text-center md:text-left">
                <h3 className="text-2xl">
                    Pouria <span className="text-pd-primary">drd</span>
                </h3>
                <Typewriter texts={skills} />
            </div>

            <SocialMedia className="justify-center" />

            <span className="text-pd-secondary-text text-center md:text-right text-sm">
                &#169; Copyright Pouria Darandi. All rights reserved 2024
            </span>
        </footer>
    );
};

export default Footer;
