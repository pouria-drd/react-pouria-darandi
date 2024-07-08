import BurgerIcon from "../icons/BurgerIcon";

interface BurgerButtonProps {
    onClick: () => void;
}

const BurgerButton = ({ onClick }: BurgerButtonProps) => {
    return (
        <div className="sm:hidden flex items-center justify-end w-full">
            <button
                onClick={onClick}
                className=" text-drd-text-secondary hover:text-drd-text-primary">
                <BurgerIcon />
            </button>
        </div>
    );
};

export default BurgerButton;
