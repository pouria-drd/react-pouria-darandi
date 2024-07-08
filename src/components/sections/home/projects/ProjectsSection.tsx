import { useEffect, useState } from "react";

import ProjectCard from "./ProjectCard";
import SectionLayout from "../../../../layouts/SectionLayout";
import useWindowDimensions from "../../../../hooks/useWindowDimensions ";

const ProjectsSection = () => {
    const { width } = useWindowDimensions();
    const [scrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (width <= 768) setIsScrolled(window.scrollY >= 1900);
            else if (width >= 768) setIsScrolled(window.scrollY >= 1200);
        });
    }, []);

    return (
        <SectionLayout
            className="flex flex-col items-center justify-center gap-12 py-10 sm:py-16"
            id="projects">
            <div className="text-center w-full">
                {/* <h5 className="w-full">
                    <span className="text-drd-primary">کارهای</span> من
                </h5> */}
                <h1
                    className={`transition-all text-2xl sm:text-3xl font-bold opacity-0 ${
                        scrolled && "bounce-top opacity-100"
                    }`}>
                    آخرین پروژه‌ها
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-full">
                <ProjectCard
                    scrolled={scrolled}
                    title="OnlineMenuApi"
                    link="https://github.com/pouria-drd/OnlineMenuApi"
                    caption="مناسب برای رستوران ها و کافی شاپ ها، به راحتی برای محصولات خود منو ایجاد کنید و آن را مدیریت کنید..."
                />
                <ProjectCard
                    scrolled={scrolled}
                    title="CubeRunner"
                    link="https://github.com/pouria-drd/CubeRunner"
                    caption="CubeRunner با استفاده از Unity ساخته شده است که در سبک endless runner. وانیی های خود را به چالش بکشید"
                />
                <ProjectCard
                    scrolled={scrolled}
                    title="drd-ui"
                    link="https://github.com/pouria-drd/drd-ui"
                    caption="رابط کاربری های آماده برای React شامل دکمه‌ها، تست سیستم‌، مدال و ... به صورت Reusable Component ساخته شده است."
                />

                <ProjectCard
                    scrolled={scrolled}
                    title="Sitechoob Panel"
                    link="https://user.sitechoob.ir/"
                    caption="پنل کاربری سایت چوب ساخته شده با React، امکان جستجو و سفارش از میان برندهای برتر و پرکاربرد"
                />
                <ProjectCard
                    scrolled={scrolled}
                    title="Avacadu"
                    link="https://avacadu.ir/"
                    caption="آوایی است که آن را کادو می دهید. قابی ماندگار از خاطرها که در آن تصویر لحظه ها ثبت می شوندو صدا ها به آن جان می دهد"
                />
                <ProjectCard
                    scrolled={scrolled}
                    title="Rasacrowd"
                    link="https://rasacrowd.ir/"
                    caption="افرادی که ایده ای را راه اندازی کرده اند. استارت آپ هایی که قصد توسعه محصولات یا خدمات خود را دارند."
                />
            </div>
        </SectionLayout>
    );
};

export default ProjectsSection;
