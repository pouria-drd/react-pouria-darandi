import CubeIcon from "../icons/CubeIcon";
import ServerIcon from "../icons/ServerIcon";

import ServiceCard from "./ServiceCard";
import SectionLayout from "../layouts/SectionLayout";
import DesktopIcon from "../icons/DesktopIcon";

const ServiceSection = () => {
    return (
        <SectionLayout className="flex flex-col gap-12 py-28" id="services">
            <div className="text-pd-primary-text text-center w-full">
                <h5 className="w-full">
                    My <span className="text-pd-primary">Services</span>
                </h5>

                <h3 className="font-bold text-3xl w-full mt-1">What I Do</h3>
            </div>

            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full 
                h-[600px] md:h-[500px] lg:h-72">
                <ServiceCard
                    title="Fronted Developer"
                    icon={<DesktopIcon />}
                    caption="Crafting dynamic and responsive user interfaces with React, Vue, and Tailwind CSS."
                />
                <ServiceCard
                    title="Game Developer"
                    icon={<CubeIcon />}
                    caption="Creating immersive and interactive gaming experiences using Unity engine."
                />

                <ServiceCard
                    title="Backend Developer"
                    icon={<ServerIcon />}
                    caption="Building robust and scalable solutions with Django and Django REST framework."
                />
            </div>
        </SectionLayout>
    );
};

export default ServiceSection;
