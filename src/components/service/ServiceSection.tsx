import SectionLayout from "../layouts/SectionLayout";

const ServiceSection = () => {
    return (
        <SectionLayout className="flex flex-col gap-20 py-28" id="services">
            <div className="text-pd-primary-text text-center w-full">
                <h5 className="w-full">
                    My <span className="text-pd-primary">Services</span>
                </h5>

                <h3 className="font-bold text-3xl w-full mt-1">What I Do</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                <div className="bg-pd-secondary-bg rounded-lg p-4"></div>
                <div className="bg-pd-secondary-bg rounded-lg p-4"></div>
                <div className="bg-pd-secondary-bg rounded-lg p-4"></div>
            </div>
        </SectionLayout>
    );
};

export default ServiceSection;
