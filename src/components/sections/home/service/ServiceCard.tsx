interface ServiceCardProps {
    title: string;
    caption: string;
    icon: React.ReactNode;
    scrolled: boolean;
}

const ServiceCard = (serviceCardProps: ServiceCardProps) => {
    return (
        <div
            className={`bg-drd-bg-secondary transition-opacity duration-500
            flex flex-col items-center justify-center
            hover:outline hover:outline-drd-primary
            rounded-lg flex-grow px-4 py-6 opacity-0 ${
                serviceCardProps.scrolled && "opacity-100"
            }`}>
            <div
                className="flex flex-col items-center justify-center gap-1
                text-center w-full h-full">
                <span className="text-drd-primary w-full">
                    {serviceCardProps.icon}
                </span>
                <h3 className="text-xl sm:text-2xl">
                    {serviceCardProps.title}
                </h3>

                <p className="text-center text-xs sm:text-sm max-w-60">
                    {serviceCardProps.caption}
                </p>
            </div>
        </div>
    );
};

export default ServiceCard;
