import { useEffect, useState } from "react";
import SectionLayout from "../../../layouts/SectionLayout";

const AboutSection = () => {
    const [scrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setIsScrolled(window.scrollY >= 120);
        });
    }, []);

    return (
        <SectionLayout className="pb-10 pt-40 sm:py-16" id="about">
            <div
                className={`flex items-center sm:items-start flex-col gap-4 opacity-0 ${
                    scrolled && "opacity-100"
                }`}>
                <h1
                    className={`text-2xl sm:text-3xl font-bold ${
                        scrolled && "bounce-top"
                    }`}>
                    درباره من
                </h1>
                <p
                    className={`text-center sm:text-justify text-sm sm:text-base 
                    w-10/12 sm:w-[350px] ${scrolled && "fade-in"}`}>
                    پوریا دارندی متولد بهمن 1380 هستم. برنامه نویسی رو از دی ماه
                    1399 با یادگیری Python به صورت خود آموز شروع کردم و از تیر
                    ماه 1400 تا دی ماه 1401 در مجتمع فنی تهران دوره های الگوریتم
                    مقدماتی ++C و Python را با نمره 100/100 و Django پیشرفته را
                    با نمره 95/100 گذراندم. پس از آن مشغول به یادگیری در زمینه
                    فرانت (Vue, React) شدم و از اسفند 1401 تا اردیبهشت 1403 به
                    عنوان برنامه نویس در زمینه های Django, React, Vue && NextJs
                    در تیم فراییت مشغول به کار شدم.
                </p>
            </div>
        </SectionLayout>
    );
};

export default AboutSection;
