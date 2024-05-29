import NavLinks from "./NavLinks";
import CloseIcon from "./icons/CloseIcon";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar = (sidebarProps: SidebarProps) => {
    return (
        <div
            className={`md:hidden sidebar z-50 max-w-72 transform transition-transform duration-200 ${
                sidebarProps.isOpen ? "translate-x-0" : "translate-x-full"
            }`}>
            <NavLinks className="flex-col" />

            <button
                onClick={sidebarProps.onClose}
                className="absolute top-4 right-3">
                <CloseIcon />
            </button>
        </div>
    );
};

export default Sidebar;
