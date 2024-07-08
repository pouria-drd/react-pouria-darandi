import { useEffect, useState } from "react";

import CubeIcon from "../../../icons/CubeIcon";
import ServerIcon from "../../../icons/ServerIcon";
import DesktopIcon from "../../../icons/DesktopIcon";

import ServiceCard from "./ServiceCard";
import SectionLayout from "../../../../layouts/SectionLayout";

const ServiceSection = () => {
    const [scrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setIsScrolled(window.scrollY >= 600);
        });
    }, []);

    return (
        <SectionLayout
            className="flex flex-col gap-12 py-10 sm:py-16"
            id="services">
            <div className="text-center w-full">
                {/* <h5 className="w-full">
                    <span className="text-drd-primary">خدمات</span> من
                </h5> */}
                <h1
                    className={`transition-all text-2xl sm:text-3xl font-bold opacity-0 ${
                        scrolled && "bounce-top opacity-100"
                    }`}>
                    در چه زمینه‌هایی فعالم؟
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-fit">
                <ServiceCard
                    scrolled={scrolled}
                    title="Fronted Developer"
                    icon={<DesktopIcon />}
                    caption="ایجاد رابط کاربری های پویا و مدرن با استفاده از React, Next js, Vue و ..."
                />
                <ServiceCard
                    scrolled={scrolled}
                    title="Game Developer"
                    icon={<CubeIcon />}
                    caption="ساخت بازی های هیحان انگیز و سرگرم کننده با استفاده از موتور بازی سازی Unity."
                />

                <ServiceCard
                    scrolled={scrolled}
                    title="Backend Developer"
                    icon={<ServerIcon />}
                    caption="با استفاده از فریم ورک Django ساخت API های قدرتمند انجام می‌شود."
                />
            </div>
        </SectionLayout>
    );
};

export default ServiceSection;
