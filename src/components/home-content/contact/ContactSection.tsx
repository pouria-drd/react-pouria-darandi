import ContactForm from "./ContactForm";
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
                <ContactForm />
            </div>
        </SectionLayout>
    );
};

export default ContactSection;
