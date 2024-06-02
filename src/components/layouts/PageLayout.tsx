interface PageLayoutProps {
    className?: string;
    children?: React.ReactNode;
}

const PageLayout = (pageLayoutProps: PageLayoutProps) => {
    return (
        <main className={`${pageLayoutProps.className}`}>
            {pageLayoutProps.children}
        </main>
    );
};

export default PageLayout;
