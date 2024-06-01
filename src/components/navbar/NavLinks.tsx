import { Link } from "react-router-dom";

interface NavLinksProps {
    className?: string;
}

const NavLinks = (navLinksProps: NavLinksProps) => {
    return (
        <ul className={`flex ${navLinksProps.className}`}>
            <Link className="hover:text-pd-primary-text" to="">
                Home
            </Link>
            <Link className="hover:text-pd-primary-text" to="#about">
                About
            </Link>
            <Link className="hover:text-pd-primary-text" to="#services">
                Services
            </Link>
            <Link className="hover:text-pd-primary-text" to="#projects">
                Projects
            </Link>
            <Link className="hover:text-pd-primary-text" to="#contact">
                Contact
            </Link>
        </ul>
    );
};

export default NavLinks;
