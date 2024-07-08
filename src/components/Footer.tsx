import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import Typewriter from "./typewriter/Typewriter";

const Footer = () => {
    const skills = ["Vue", "React", "Next-js", "Unity", "Django"];

    return (
        <footer
            id="footer"
            className="odd:bg-drd-bg-primary even:bg-drd-bg-secondary
            grid grid-cols-1 md:grid-cols-3
            items-center justify-center gap-4
            app-px py-8 r2l">
            <div className="text-center md:text-right">
                <Logo />

                <div
                    className="transition-all text-drd-primary 
                    text-xl md:text-2xl my-1">
                    <h5 className="inline-block ml-2">توسعه دهنده</h5>
                    <Typewriter texts={skills} />
                </div>
            </div>

            <SocialMedia className="justify-center" />

            <span className="text-drd-text-secondary text-center md:text-right text-xs truncate l2r">
                &#169; Copyright Pouria Darandi. All rights reserved 2024
            </span>
        </footer>
    );
};

export default Footer;
