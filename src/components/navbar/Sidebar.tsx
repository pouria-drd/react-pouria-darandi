import SideLinks from "./SideLinks";
import CloseIcon from "../icons/CloseIcon";
import Backdrop from "../ui/backdrop/Backdrop";
import getAppVersion from "../../utils/getAppVersion";

interface SidebarProps {
    isOpen: boolean;
    onClick: () => void;
}

const Sidebar = ({ isOpen, onClick }: SidebarProps) => {
    return (
        <Backdrop isOpen={isOpen} onClose={onClick}>
            <aside
                className={`bg-drd-bg-primary drd-sidebar absolute right-0 glass ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
                onClick={(e) => e.stopPropagation()}>
                <button onClick={onClick}>
                    <CloseIcon />
                </button>

                <SideLinks onClick={onClick} />

                <p
                    className="absolute right-4 bottom-4
                    text-drd-text-secondary text-right text-xs">
                    ویرایش {getAppVersion()}
                </p>
            </aside>
        </Backdrop>
    );
};

export default Sidebar;
