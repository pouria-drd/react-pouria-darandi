import ALink from "./ALink";
// import LanguageIcon from "../icons/LanguageIcon";

interface SideLinksProps {
    onClick?: () => void;
}

const SideLinks = ({ onClick }: SideLinksProps) => {
    return (
        <div className="text-right flex flex-col items-end gap-8 w-full">
            <ALink href="/#about" onClick={onClick} text="درباره" />
            <ALink href="/#services" onClick={onClick} text="خدمات" />
            <ALink href="/#projects" onClick={onClick} text="پروژه‌ها" />
            <ALink href="/#intro" onClick={onClick} text="تماس" />
            {/* <button className="nav-link flex items-center gap-1">
                <p>زبان</p>
                <span>
                    <LanguageIcon />
                </span>
            </button> */}
        </div>
    );
};

export default SideLinks;
