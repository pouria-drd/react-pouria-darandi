import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const myForm = useRef<HTMLFormElement>(null);
    const [msg, setMsg] = useState<string | undefined>();
    const [isSendingEmail, setIsSendingEmail] = useState<boolean>(false);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isSendingEmail) return;

        setIsSendingEmail(true);

        if (myForm.current) {
            try {
                await emailjs.sendForm(
                    "service_phb76hh",
                    "template_itldaro",
                    myForm.current,
                    {
                        publicKey: "Dk2_uTDF77jTyLQt2",
                    }
                );
                setMsg("Message sent !");
            } catch (error) {
                setMsg("Failed to send message");
            }
        }

        setIsSendingEmail(false);
    };

    return (
        <form
            ref={myForm}
            onSubmit={(e) => sendEmail(e)}
            className="flex flex-col gap-4 w-full sm:w-[400px] md:w-full md:max-w-3xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                <input
                    className="my-input w-full"
                    type="text"
                    name="user_name"
                    id="user_name"
                    placeholder="Name"
                    required
                />
                <input
                    className="my-input w-full"
                    type="email"
                    name="user_email"
                    id="user_email"
                    placeholder="Email"
                    required
                />
            </div>

            <div className="flex flex-col items-center justify-center gap-4 w-full">
                <textarea
                    id="message"
                    className="my-textarea w-full"
                    name="message"
                    required
                    placeholder="Message"></textarea>

                <p
                    className={`${
                        msg?.startsWith("Failed")
                            ? "text-red-500"
                            : "text-pd-primary-text"
                    }`}>
                    {msg || ""}
                </p>

                <button className="my-btn" disabled={isSendingEmail}>
                    {isSendingEmail ? "Sending ..." : "Send Email"}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
