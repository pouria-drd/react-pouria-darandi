import SectionLayout from "../../layouts/SectionLayout";

import "./skills.css";

const SkillsSection = () => {
    return (
        <SectionLayout
            className="flex flex-col md:flex-row items-center justify-between gap-20 md:gap-0"
            id="skills">
            <div
                className="flex flex-col items-center md:items-start justify-center gap-4
                text-center md:text-left w-full">
                <div>
                    <h3>
                        Favorite <span className="text-pd-primary">Skills</span>
                    </h3>
                    <h2 className="font-bold text-3xl mt-1">My Skills</h2>
                </div>
                <p className="text-pd-secondary-text text-sm max-w-72">
                    See fully what skills I have and perform, to develop the
                    projects for you.
                </p>
                <a className="my-btn mt-3" href="/#projects">
                    See Projects
                </a>
            </div>
            <div className="skills__content w-full">
                <ol className="skills__group">
                    <li className="skills__item">HTML & CSS & Tailwind</li>
                    <li className="skills__item">JavaScript & TypeScript</li>
                    <li className="skills__item">React & Vue</li>
                    <li className="skills__item">C# & Unity</li>
                </ol>
                <ol className="skills__group" start={5}>
                    <li className="skills__item">Python</li>
                    <li className="skills__item">Django REST framework</li>
                    <li className="skills__item">Django</li>
                </ol>
            </div>
        </SectionLayout>
    );
};

export default SkillsSection;
