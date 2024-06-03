interface ServiceCardProps {
    title: string;
    caption: string;
    icon: React.ReactNode;
}

const ServiceCard = ({ title, caption, icon }: ServiceCardProps) => {
    return (
        <div
            className="bg-pd-primary-bg 
            flex flex-col items-center justify-center gap-6
        
            hover:outline hover:outline-pd-primary
            rounded-lg p-4 flex-grow">
            <div
                className="flex flex-col items-center justify-center gap-2
                text-center w-full h-full">
                <span className="text-pd-primary w-full">{icon}</span>
                <h3 className="text-pd-primary-text text-2xl">{title}</h3>

                <p className="text-pd-secondary-text text-center text-sm max-w-60 mt-2">
                    {caption}
                </p>
            </div>
        </div>
    );
};

export default ServiceCard;
