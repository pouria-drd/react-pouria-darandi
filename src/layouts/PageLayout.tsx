interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
    return <section className="p-4 w-full">{children}</section>;
};

export default PageLayout;
