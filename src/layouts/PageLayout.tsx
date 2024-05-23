interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
    return <section>{children}</section>;
};

export default PageLayout;
