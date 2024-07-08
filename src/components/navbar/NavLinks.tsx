import ALink from "./ALink";
// import LanguageIcon from "../icons/LanguageIcon";

interface NavLinksProps {
    onClick?: () => void;
}

const NavLinks = ({ onClick }: NavLinksProps) => {
    return (
        <div className="hidden sm:flex items-center justify-center gap-6">
            {/* <button className="nav-link flex items-center gap-1">
                <LanguageIcon />
            </button> */}
            <ALink href="/#intro" onClick={onClick} text="تماس" />
            <ALink href="/#projects" onClick={onClick} text="پروژه‌ها" />
            <ALink href="/#services" onClick={onClick} text="خدمات" />
            <ALink href="/#about" onClick={onClick} text="درباره" />
        </div>
    );
};

export default NavLinks;
