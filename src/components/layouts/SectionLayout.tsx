interface SectionLayoutProps {
    id: string;
    className?: string;
    children?: React.ReactNode;
}

const SectionLayout = (sectionLayoutProps: SectionLayoutProps) => {
    return (
        <section
            className={`${sectionLayoutProps.className} odd:bg-pd-primary-bg even:bg-pd-secondary-bg 
            app-px w-full py-28`}
            id={sectionLayoutProps.id}>
            {sectionLayoutProps.children}
        </section>
    );
};

export default SectionLayout;
