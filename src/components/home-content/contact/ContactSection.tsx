import SectionLayout from "../../layouts/SectionLayout";

const ContactSection = () => {
    return (
        <SectionLayout className="flex flex-col gap-12" id="contact">
            <div className="text-pd-primary-text text-center w-full">
                <h5 className="w-full">
                    Get in <span className="text-pd-primary">Touch</span>
                </h5>

                <h3 className="font-bold text-3xl w-full mt-1">Contact Me</h3>
            </div>

            <div className="flex items-center justify-center w-full">
                <form
                    action=""
                    className="flex flex-col gap-4 w-full sm:w-[400px] md:w-full md:max-w-3xl">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                        <input
                            className="my-input w-full"
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Name"
                            required={true}
                        />
                        <input
                            className="my-input w-full"
                            type="email"
                            name="email"
                            id="username"
                            placeholder="Email"
                            required={true}
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 w-full">
                        <textarea
                            className="my-textarea w-full"
                            name="content"
                            required
                            placeholder="message"></textarea>

                        <button className="my-btn">Send Email</button>
                    </div>
                </form>
            </div>
        </SectionLayout>
    );
};

export default ContactSection;
