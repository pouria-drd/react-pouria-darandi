import { useEffect, useState } from "react";
import SectionLayout from "../../../../layouts/SectionLayout";
import useWindowDimensions from "../../../../hooks/useWindowDimensions ";

import "./skills.css";

const SkillsSection = () => {
    const { width } = useWindowDimensions();
    const [scrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (width <= 768) setIsScrolled(window.scrollY >= 1300);
            else if (width >= 768) setIsScrolled(window.scrollY >= 900);
        });
    }, []);

    return (
        <SectionLayout
            className="flex flex-col md:flex-row items-center justify-between 
            gap-12 md:gap-0 py-10 sm:py-16 "
            id="skills">
            <div
                className={`transition-all duration-500 flex flex-col items-center md:items-start justify-center gap-4
                text-center md:text-right w-full opacity-0 ${
                    scrolled && "opacity-100"
                }`}>
                {/* <div> */}
                {/* <h3>
                        <span className="text-drd-primary">توانایی های</span> من
                    </h3> */}
                <h1
                    className={`transition-all text-2xl sm:text-3xl font-bold ${
                        scrolled && "bounce-top"
                    }`}>
                    توانایی های من
                </h1>
                {/* </div> */}
                <p className="text-sm max-w-72">
                    به طور کامل ببینید چه مهارت‌هایی دارم و چه چیزهایی را توسعه
                    داده‌ام
                </p>
                <a className="a-btn" href="/#projects">
                    مشاهده پروژه‌ها
                </a>
            </div>
            <div
                className={`skills__content w-full transition-opacity duration-500 opacity-0 ${
                    scrolled && "opacity-100"
                }`}>
                <ol className="skills__group">
                    <li className="skills__item">C# & Unity</li>
                    <li className="skills__item">React, Next-js & Vue</li>
                    <li className="skills__item">HTML & CSS & Tailwind</li>
                    <li className="skills__item">JavaScript & TypeScript</li>
                </ol>
                <ol className="skills__group" start={5}>
                    <li className="skills__item">Python</li>
                    <li className="skills__item">Django</li>
                    <li className="skills__item">Django REST framework</li>
                </ol>
            </div>
        </SectionLayout>
    );
};

export default SkillsSection;
