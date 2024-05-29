import { Link } from "react-router-dom";

interface NavLinksProps {
    className?: string;
}

const NavLinks = (navLinksProps: NavLinksProps) => {
    return (
        <ul className={` flex gap-4 ${navLinksProps.className}`}>
            <Link className="hover:text-pd-primary" to="">
                Home
            </Link>
            <Link className="hover:text-pd-primary" to="#about">
                About
            </Link>
            <Link className="hover:text-pd-primary" to="#services">
                Services
            </Link>
            <Link className="hover:text-pd-primary" to="#projects">
                Projects
            </Link>
            <Link className="hover:text-pd-primary" to="#contact">
                Contact
            </Link>
        </ul>
    );
};

export default NavLinks;
