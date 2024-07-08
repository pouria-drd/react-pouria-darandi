import "./backdrop.css";

interface BackdropProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const Backdrop = ({ isOpen, onClose, children }: BackdropProps) => {
    return (
        <div
            onClick={onClose}
            className={`drd-backdrop ${
                isOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            }`}>
            {children}
        </div>
    );
};

export default Backdrop;
