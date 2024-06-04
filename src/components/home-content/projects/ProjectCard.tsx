interface ProjectCardProps {
    title: string;
    caption: string;
    link: string;
}

const ProjectCard = ({ title, caption, link }: ProjectCardProps) => {
    return (
        <div
            className="bg-pd-secondary-bg 
            flex flex-col items-center justify-center gap-6

            hover:outline hover:outline-pd-primary
            rounded-lg p-4 flex-grow h-full min-h-52">
            <div
                className="flex flex-col items-center justify-center gap-2
                text-center w-full h-full">
                <h3 className="text-pd-primary text-2xl">{title}</h3>

                <p className="text-pd-secondary-text text-center text-sm max-w-60">
                    {caption}
                </p>

                <a
                    href={link}
                    target="_blank"
                    className="text-pd-primary text-center text-sm max-w-60 mt-2">
                    see more
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
