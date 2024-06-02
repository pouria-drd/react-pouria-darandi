interface SectionLayoutProps {
    id: string;
    className?: string;
    children?: React.ReactNode;
}

const SectionLayout = (sectionLayoutProps: SectionLayoutProps) => {
    return (
        <section
            className={`odd:bg-pd-primary-bg even:bg-pd-secondary-bg 
            app-px w-full min-h-svh ${sectionLayoutProps.className}`}
            id={sectionLayoutProps.id}>
            {sectionLayoutProps.children}
        </section>
    );
};

export default SectionLayout;
