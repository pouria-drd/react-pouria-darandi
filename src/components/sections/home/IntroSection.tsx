import SocialMedia from "../../SocialMedia";
import Typewriter from "../../typewriter/Typewriter";
import pouria from "../../../assets/images/trs-pouria.png";
import SectionLayout from "../../../layouts/SectionLayout";

const IntroSection = () => {
    const skills = ["Vue", "React", "Next-js", "Unity", "Django"];

    return (
        <SectionLayout className="py-10 pb-24 sm:py-16" id="intro">
            <div className="transition-all flex flex-col sm:flex-row justify-between gap-16">
                <div className="flex flex-col justify-start gap-8 w-fit">
                    <div>
                        <h3 className="transition-all text-xl sm:text-2xl font-light">
                            درود
                        </h3>
                        <h1 className="transition-all text-3xl sm:text-4xl font-bold bounce-left">
                            پوریا دارندی
                            <span className="font-normal"> هستم</span>
                        </h1>

                        <div className="transition-all text-drd-primary text-xl sm:text-2xl my-1">
                            <h5 className="inline-block ml-2">توسعه دهنده</h5>
                            <Typewriter texts={skills} />
                        </div>

                        <p
                            className="transition-all text-justify text-sm sm:text-base 
                            w-fit max-w-56 sm:max-w-[350px] mt-2">
                            با داشتن دانش در زمینه توسعه وب و بازی، بهترین ها را
                            ارائه می دهم، پروژه هایی که منجر به کار با کیفیت می
                            شود.
                        </p>
                    </div>

                    <a href="/#intro" className="a-btn">
                        راه های ارتباطی
                    </a>

                    <SocialMedia />
                </div>

                <div className="relative flex justify-center w-full md:w-3/5">
                    <div
                        className="transition-all bg-drd-bg-secondary shadow-inner overflow-clip
                        absolute -top-4 sm:top-1/2 md:top-24 md:left-16
                        rounded-full size-64 sm:size-80 md:size-[340px] lg:size-[400px]">
                        <img
                            className="fade-in"
                            src={pouria}
                            alt="pouria image"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
};

export default IntroSection;
