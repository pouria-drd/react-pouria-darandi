interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <section className="px-4 sm:px-8 md:px-12 lg:px-16 pt-[88px] pb-4 w-full">
            {children}
        </section>
    );
};

export default PageLayout;
