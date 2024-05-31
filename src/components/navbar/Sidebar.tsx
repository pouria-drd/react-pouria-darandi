import NavLinks from "./NavLinks";
import CloseIcon from "./icons/CloseIcon";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar = (sidebarProps: SidebarProps) => {
    return (
        <div
            className={`bg-black/50 fixed inset-0 flex items-center justify-start 
            z-[1000] md:hidden transition-opacity duration-200 ${
                sidebarProps.isOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            }`}
            onClick={sidebarProps.onClose}>
            <div
                className={`bg-pd-secondary-bg/80 w-[75vw] max-w-[270px] h-full glass
                flex flex-col items-start justify-start gap-10 p-4
                transform transition-transform duration-200 ${
                    sidebarProps.isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
                onClick={(e) => e.stopPropagation()}>
                <h3 className="text-2xl">
                    Pouria <span className="text-pd-primary">DRD</span>
                </h3>

                <NavLinks className="flex-col gap-4" />

                <button
                    onClick={sidebarProps.onClose}
                    className="absolute top-4 right-3">
                    <CloseIcon />
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
