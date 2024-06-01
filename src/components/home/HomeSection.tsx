import HomeHeader from "./HomeHeader";
import SocialMedia from "../SocialMedia";
import HomeDescription from "./HomeDescription";
import Typewriter from "../typewriter/Typewriter";
import PouriaHexagonIcon from "../icons/PouriaHexagonIcon";

const HomeSection = () => {
    const skills = [
        "React Developer",
        "Vue Developer",
        "Django Developer",
        "Unity Developer",
    ];

    return (
        <section className="bg-pd-primary-bg app-px w-full pb-12" id="home">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 w-full">
                <div
                    className="text-center md:text-left
                    flex flex-col items-center md:items-start gap-4 
                    mt-20 md:mt-32 h-fit">
                    <HomeHeader />

                    <Typewriter texts={skills} />

                    <HomeDescription />

                    <a className="my-btn my-4">Let's Talk</a>

                    <SocialMedia />
                </div>

                <div
                    className="flex items-center justify-center 
                    w-full h-full md:pt-20">
                    <PouriaHexagonIcon />
                </div>
            </div>
        </section>
    );
};

export default HomeSection;
