interface SectionLayoutProps {
    id: string;
    className?: string;
    children?: React.ReactNode;
}

const SectionLayout = (sectionLayoutProps: SectionLayoutProps) => {
    return (
        <section
            className={`${sectionLayoutProps.className} 
            odd:bg-drd-bg-primary even:bg-drd-bg-secondary
            app-px w-full r2l`}
            id={sectionLayoutProps.id}>
            {sectionLayoutProps.children}
        </section>
    );
};

export default SectionLayout;
