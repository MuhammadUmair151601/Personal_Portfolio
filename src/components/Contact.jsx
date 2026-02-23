import {
  MapPin,
  Mail,
  Phone,
  BadgeCheck,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    const phoneNumber = "923038951047";

    const whatsappMessage = `Hello Umair,%0A%0A
Name: ${name}%0A
Contact: ${email}%0A
Message: ${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
  };
  return (
    <section
      id="contact"
      className="bg-gray-900 text-gray-300 flex flex-col items-center py-20 px-4 md:px-20"
    >
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Get in <span className="text-orange-400">Touch</span>
        </h1>
        <p className="mt-2 text-gray-400">
          Have a project in mind or want to collaborate? Let's talk!
        </p>
      </div>

      {/* Form and Contact Info */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-10">
        <div className="flex-1">
          <form
            ref={form}
            className="flex flex-col gap-4 w-full"
            onSubmit={handleSubmit}
            action=""
          >
            <input
              className="py-3 px-4 rounded-md w-full outline-none bg-gray-700"
              name="user_name"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="py-3 px-4 rounded-md w-full outline-none bg-gray-700"
              type="text"
              placeholder="Email/Phone"
              name="user_email"
            />
            <textarea
              className="py-3 px-4 rounded-md w-full outline-none bg-gray-700 resize-none h-32"
              name="message"
              placeholder="Your Message Detail"
            ></textarea>
            <button
              className="w-full bg-orange-400 text-black font-bold py-3 rounded-md hover:scale-105 hover:text-white hover:shadow-[0_0_25px_#f97316] transition-all duration-300"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-4 text-2xl font-bold">
              <MapPin size={30} /> <h1>Location</h1>
            </div>
            <p className="ml-10 text-gray-300">Peshawar, Pakistan</p>
          </div>
          <div>
            <div className="flex items-center gap-4 text-2xl font-bold">
              <Mail size={30} /> <h1>Email</h1>
            </div>
            <p className="ml-10 text-gray-300">muhammadumair4105@gmail.com</p>
          </div>
          <div>
            <div className="flex items-center gap-4 text-2xl font-bold">
              <Phone size={30} /> <h1>Phone</h1>
            </div>
            <p className="ml-10 text-gray-300">03038951047</p>
          </div>
          <div>
            <div className="flex items-center gap-4 text-2xl font-bold">
              <BadgeCheck size={30} /> <h1>Follow me on</h1>
            </div>
            <div className="flex gap-4 mt-2 ml-10">
              <a
                href="https://github.com/MuhammadUmair151601"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-black hover:bg-orange-400 rounded-full h-10 w-10 flex items-center justify-center shadow-[0_0_25px_#f97316] duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-umair-a7b10a2b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-black hover:bg-orange-400 rounded-full h-10 w-10 flex items-center justify-center shadow-[0_0_25px_#f97316] duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/mumair.umair.9022"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-black hover:bg-orange-400 rounded-full h-10 w-10 flex items-center justify-center shadow-[0_0_25px_#f97316] duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-gray-800 py-5 mt-10 text-center">
        <p>© 2025 Created By MuhammadUmairCodes. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
