interface NavLinksProps {
    className?: string;
}

const NavLinks = (navLinksProps: NavLinksProps) => {
    return (
        <ul className={`flex ${navLinksProps.className}`}>
            <a className="hover:text-pd-primary-text" href="#home">
                Home
            </a>
            <a className="hover:text-pd-primary-text" href="#about">
                About
            </a>
            <a className="hover:text-pd-primary-text" href="#services">
                Services
            </a>
            <a className="hover:text-pd-primary-text" href="#projects">
                Projects
            </a>
            <a className="hover:text-pd-primary-text" href="#contact">
                Contact
            </a>
        </ul>
    );
};

export default NavLinks;
