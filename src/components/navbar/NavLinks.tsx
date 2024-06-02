interface NavLinksProps {
    className?: string;
    onClick?: () => void;
}

const NavLinks = (navLinksProps: NavLinksProps) => {
    const handleOnClick = () => {
        navLinksProps.onClick?.();
    };

    return (
        <ul className={`flex ${navLinksProps.className}`}>
            <a
                onClick={handleOnClick}
                className="hover:text-pd-primary-text"
                href="#home">
                Home
            </a>
            <a
                onClick={handleOnClick}
                className="hover:text-pd-primary-text"
                href="#about">
                About
            </a>
            <a
                onClick={handleOnClick}
                className="hover:text-pd-primary-text"
                href="#services">
                Services
            </a>
            <a
                onClick={handleOnClick}
                className="hover:text-pd-primary-text"
                href="#projects">
                Projects
            </a>
            <a
                onClick={handleOnClick}
                className="hover:text-pd-primary-text"
                href="#contact">
                Contact
            </a>
        </ul>
    );
};

export default NavLinks;
