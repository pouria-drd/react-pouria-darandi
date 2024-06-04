import SectionLayout from "../../layouts/SectionLayout";
import PouriaBorderHexIcon from "../../icons/PouriaBorderHexIcon";

const AboutSection = () => {
    return (
        <SectionLayout id="about">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-20 md:gap-4 h-full">
                <div className="flex items-center  justify-center w-full">
                    <PouriaBorderHexIcon />
                </div>

                <div
                    className="
                    flex flex-col items-center md:items-start justify-start gap-4
                    w-full h-full">
                    <h3 className="font-bold text-3xl text-pd-primary-text">
                        About Me
                    </h3>
                    <p className="text-pd-secondary-text text-justify max-w-80 lg:max-w-96">
                        Born on 3rd Feb 2002, I'm a passionate web and game
                        developer with 2 years of experience working with the
                        <a
                            href="https://feriat.ir"
                            target="_blank"
                            className="text-pd-primary">
                            {" "}
                            ferait{" "}
                        </a>{" "}
                        team. I specialize in crafting robust backend solutions
                        with Django and Django REST framework, designing
                        interactive and responsive frontends with React, Vue,
                        and Tailwind CSS, and creating immersive gaming
                        experiences with Unity engine.
                    </p>
                    <a className="my-btn mt-3" href="/#contact">
                        Contact Me
                    </a>
                </div>
            </div>
        </SectionLayout>
    );
};

export default AboutSection;
