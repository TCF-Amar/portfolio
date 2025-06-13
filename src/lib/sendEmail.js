import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export async function sendEmail(form) {
    try {
        // Validate environment variables
        if (!import.meta.env.VITE_SERVICE_ID ||
            !import.meta.env.VITE_TEMPLATE_ID ||
            !import.meta.env.VITE_PUBLIC_KEY) {
            throw new Error("Missing required environment variables");
        }

        // Validate form
        if (!form.current) {
            throw new Error("Form reference is invalid");
        }

        const result = await emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_PUBLIC_KEY
        );

        if (result.status === 200) {
            toast.success("Message sent successfully!");
            form.current.reset();
        } else {
            throw new Error(`Email failed to send with status: ${result.status}`);
        }
    } catch (error) {
        console.error("Email sending error:", error);
        toast.error(error.message || "Failed to send message.");
        throw error;
    }
}