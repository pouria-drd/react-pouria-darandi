interface ALinkProps {
    href: string;
    text?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

const ALink = (aLinkProps: ALinkProps) => {
    return (
        <a
            className="nav-link"
            href={aLinkProps.href}
            onClick={aLinkProps.onClick}>
            {aLinkProps.children || aLinkProps.text}
        </a>
    );
};

export default ALink;
