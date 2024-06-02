import FloatLink from "../FloatLink";

interface PageLayoutProps {
    className?: string;
    children?: React.ReactNode;
}

const PageLayout = (pageLayoutProps: PageLayoutProps) => {
    return (
        <>
            <main className={`${pageLayoutProps.className}`}>
                {pageLayoutProps.children}
            </main>

            <FloatLink />
        </>
    );
};

export default PageLayout;
